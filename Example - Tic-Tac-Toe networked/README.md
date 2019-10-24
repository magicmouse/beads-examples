## Example / Networked Tic-tac-toe Game

This examples shows how you can make client/server projects. Unlike the previous examples, this program comes in two parts: one for the client side and one for the server. This game allows 12 simultaneous tic tac toe games to be running at once, and the users can join any number of games, and play both sides at once if they wish, all the while seeing the status of other games being played. Any game that doesn't include you is drawn in gray, yellow games are joinable, and green games are ones where you are in the game. 


![game example](http://beadslang.com/beads/projects/tictactoe_net/docs/screenshot.png)


To build a client/server product the following steps are followed:

1) you define the data structures that are going to be used in the game.

2) you write temporary scaffolding code in the `main_init` block that initializes the game state so that you can test all the different drawing combinations, like an empty game, or a game that is stalemated, or won.

3) you write the drawing code that runs against the test data.

4) after debugging and tuning the drawing code, you then write the game play code. Each time you want to update the game state, you create a function for that purpose.

5) now that the game is playing okay, you then move the definitions of the data structures to the server code, marking them for export, and move the functions that modify the game state to the server side. 

6) you add a `subscribe()` command in the `main_init` block to connect to the server

7) you compile the server module for `NODE` output, which creates files of suffix `.mjs` which is the `node.js` suffix for ES modules. To run a node module on a server, you can run it on your LAN with node installed on a computer on your network, but more likely is you purchase a web hosting service that specializes in node.js, such as A2 and many other firms.  

8) running node version 11 or later, you will use the `--experimental-modules` flag, so that the .mjs suffix is recognized. Once node 12 reaches long term support state, which may have already happened by the time you read this, this flag will no longer be needed.

### The sever side of the code

```
beads level 1 server TicServer
```

The first line declares this module as the server side.

```
------------------------
--   EXPORTS >>>>
------------------------

const
	NGAMES! ⇐ 12  // how many simultaneous games we run
	SERV_PORT! ⇐ 31234  // the Node.JS port we listen on. Note that many ISPs like A2 must be in range: 30000-50000

enum
	TIC_TAC_TOE! //  our secret ID so hackers cannot disturb us

--  record used to describe a player in a game
--  note that a user can be in more than one game at once
record a_player!
	userid          //  unique user ID
	name     : str  //  copy of the name from the client table
	won             //  number of games won
	side     : str  //  X or O

record a_game!      //  holds the state for one game
	gstate  : (GAME_WAITING, GAME_PLAYING, GAME_OVER)
	turn         	//  the player index 1 or 2 whose turn it is
	winner       	//  U means no winner, the player index 1 or 2, or NOBODY
	nmoves      	//  total number of moves played so far, 0..9
	last_move       //  elapsed time when last move was made
	players : array of a_player //  array of 1..2 players
	board   : array of num	    //  a 9 element array representing the board with player index in it
	hints   : array of color	//  a 9 element array holding color overrides for board cells

	hilite_join1   : yesno  // is join button in hi state
	hilite_join2   : yesno 
	hilite_rematch : yesno
	hilite_exit    : yesno

	//  the client side prevents getting ahead of itself (by clicking twice quickly on a button
	//  on the screen), by setting a busy flag which on the client is set to Y on each server request
	//  we force the N value to be retransmitted by using the 'touch' statement
	//  this allows us to signal to the client it is okay to click again
	busy           : yesno  // while waiting for server to answer, block any new client clicks
```

This section of code declared the game state structures. We picked a port that we know our hosting service won't block, and won't conflict with other products. Each player will have a unique ID, a name, and we track how many games they have won, and which side of the game they are on.

Each game is either waiting for 2 players to join, or is inside a game, or the game just ended.  The winner could be X or O or nobody. To permit highlighting of the 3 in a row that won (and there can be two winning paths at once), we store an array of hints that override the default background color for each of the 9 cells.

To track button highlighting state we have fields for those.  To prevent the user from clicking in the game and trying to perform actions while we are still digesting the previous command, we have a busy flag. 

```
const
	SCAFFOLDING ⇐ Y
	TRACE_SERVER ⇐ Y

	//  neighbors we check for a winning play, given where the player just moved
	//  this tree lists all the neighbors that constitute a 3 in a row, indexed by board position
	BUDDIES	⇐ [ 2 3; 4 7; 5 9;; 1 3; 5 8;; 1 2; 6 9; 5 7;; 5 6; 1 7;; 4 6; 2 8; 1 9; 3 7;; 4 5; 3 9;; 8 9; 1 4; 3 5;; 7 9; 2 5;; 7 8; 3 6; 1 5]

//  our source of truth for the state of each game
//  this array is subscribed to by the clients
var games : array of a_game  //  array 1..NGAMES of games
```

These constants turn on/off the scaffolding, and control whether we are emitting tracing. Note that when a client subscribers to the server, it can request that all tracing be fed back to the client's console log stream, so that you can more easily debug conversations, by having the tracing merged based on time. Since Beads only allows the conversation to go back and forth, there is no overlapping in the beads system; all server actions are considered to be in the refresh cycle of the client, so deadly embraces and other nasty race conditions are almost impossible create. 

```
===========================
calc main_init
===========================
	//  start out with all the games waiting for players to join
	loop reps:NGAMES count:fx
		games[fx].gstate ⇐ GAME_WAITING
		games[fx].busy ⇐ N
 
	//  put in two games playing so we can test the decode
	if SCAFFOLDING
		//   create 3 users
// 		{ userid:100, name:"Fred", ip:"11.12.13.14", port:3340 } ===> subscribers[1]
// 		{ userid:101, name:"Penelope", ip:"22.12.13.14", port:2340 } ===> subscribers[2]
// 		{ userid:102, name:"Sydney", ip:"33.12.13.14", port:2340 } ===> subscribers[3]

		//  put a game into slot 1
		merge { gstate:GAME_PLAYING, turn:1, nmoves:2 } ===> games[1]
		merge { userid:100, name:"Fred", won:0, side:"X" } ===> games[1].players[1]
		merge { userid:101, name:"Penelope", won:3, side:"O" } ===> games[1].players[2]
		{ 1:1, 3:2 } ===> games[1].board

		//  put a stalemate game into slot 2
		merge { gstate:GAME_OVER, turn:1, nmoves:9 } ===> games[2]
		merge { userid:104, name:"Esmerelda", won:0, side:"X" } ===> games[2].players[1]
		merge { userid:105, name:"Poindexter", won:3, side:"O" } ===> games[2].players[2]
		{ 1:1, 2:2, 3:1, 4:2, 5:1, 6:2, 7:2, 8:1, 9:2 } ===> games[2].board

		//  put a won game into slot 3
		merge { gstate:GAME_OVER, turn:2, winner:1, nmoves:3 } ===> games[3]
		merge { userid:101, name:"Penelope", won:1, side:"X" } ===> games[3].players[1]
		merge { userid:102, name:"Sydney", won:0, side:"O" } ===> games[3].players[2]
		{ 1:1, 2:1, 3:1, 4:2, 7:2 } ===> games[3].board
		games[3].hints[1] = PINK
		games[3].hints[2] = PINK
		games[3].hints[3] = PINK
	//..end if

	//  start listening on the port accepting subscription requests
	//  we list all the functions that can be remotely called for this connection
	//  note that we could have multiple ports open, and different functions for each port
	publish_start(TIC_TAC_TOE, SERV_PORT, 1000, games, serv_join_game, 
		serv_take_square, serv_leave_game, serv_rematch)
```

Here we initialized our global state, which only sets the games to the waiting state, and the busy flag to N.  If scaffolding is on, we will put in 3 dummy games into the system to test the refresh on the client side.

The last line of the initialization code is to start listening on our port, and lists all the external functions that are callable on this port. You can have multiple ports listening, and each port can have separate remote function calls available. Although you can do TCP messaging in the Beads system, most client/server products are built using a publish operation, which lets remote computers see a subset of the game state. The clients don't send messages explicitly, but instead do remote function calls, which automatically converted into messages by the Beads runtime; compressed, transmitted, and then decoded, and turned back into local function calls on the server side. 

In the publish command we set up a secret code which will be expected on each packet to dissuade hackers from discovering the server, which port we are using, how much bandwidth maximum we are allowing the server to try and use, which variable we are sharing (`games`), and which functions are permitted to be called across this channel.

```
===========================
calc serv_join_game! ( //  client wants to join a game 
===========================
	//  all remote functions have an implifed parameter of userid
	game : a_game   //  the game to join
	my_name : str  //  name of this new user
	my_id : num  // userid of this user
	) ----------------------
	log "join_game, name={my_name}, game={game}" on:TRACE_SERVER

	//  the client is setting busy at the time of the remote call so client can't do double executions
	touch game.busy  //  this will cause a push back busy=N to client

	//  see if this user can take the first slot
	if game.players[1].userid == U 
		log "--joining as first comer" on:TRACE_SERVER
		{ name:my_name, userid:my_id, won:0, side:"X" } ===> game.players[1] // first comer gets X
	elif game.players[2].userid == U
		log "--joining as second comer" on:TRACE_SERVER
		{ name:my_name, userid:my_id, won:0, side:"O" } ===> game.players[2] // second comer gets O
	else
		//  user side should catch this, so should never happen; just ignore the click
		log "--ignoring join request, game is full" on:TRACE_SERVER
	
	if game.players[1].userid <> U and game.players[2].userid <> U
		//  start the game
		fresh_game(game)  // clear out the old game
```

This is the first remotely callable function, which lets the user join a game. Note that `!` after the name, which means it is exported. On the client side they are setting the local copy of `busy` to Y so no duplicate actions can occur, and to force the server to send back a fresh copy of the value, we set the invisible dirty flag for the variable by using the `touch` verb. Beads is a tracked mutable state system, and during this remote function call, any changes to the global state that happen are automatically transmitted back to each subscribing client. 

If slot 1 is empty, we take that slot. If slot 2 is empty we take that slot. If both slots are now full, we can start the game.

```
===========================
calc serv_take_square! (  // client is making a move
===========================
	game : a_game   //  index of game
	cellx  //  index of square to take
	) ----------------------

	log "## SERVER: take_square cellx={cellx}" on:TRACE_SERVER
	touch game.busy
	//  client should catch this, but if this game isn't in progress, ignore the crazy request
	if game.gstate <> GAME_PLAYING
		return

	//  since the client enforces the rule that only the current player can move
	//  we know the current player index (game.turn)
	game.board[cellx] ⇐ game.turn //  current player has taken the square
	game.last_move ⇐ elapsed // update our move time
	inc game.nmoves

	//  check for a winner
	var won ⇐ N
	//  our buddy list is an array of array, each node in the array corresponds to the other 2 squares
	//  of every winning 3 in a row. If the other two cells in the buddy list item match the current player
	//  then we have a winner.  it is possible to have more than one winning path at once.
	loop array:BUDDIES[cellx] path:mybuddy
		if (game.board[mybuddy[1]] == game.turn) and (game.board[mybuddy[2]] == game.turn)
			//  we now have 3 in a row, mark the 3 winning cells for hilite			
			game.hints[cellx] ⇐ LIGHT_PINK
			game.hints[mybuddy[1]] ⇐ LIGHT_PINK
			game.hints[mybuddy[2]] ⇐ LIGHT_PINK
			won ⇐ Y
	//..end loop

	if won
		game.winner ⇐ game.turn  //  current player just won
		game.gstate ⇐ GAME_OVER
	elif game.nmoves >= 9
		//  NOBODY
		game.winner ⇐ U
		game.gstate ⇐ GAME_OVER
	else
		//  no winner yet, switch sides
		game.turn ⇐ if game.turn == 1 then 2 else 1
```

This function contains the core logic for the game. The user wishes to take a square in the grid, and we mark the board cell as taken, increment the number of moves, and check for 3 in a row. We have a handy array declared at the time, which lists for each of the 9 squares the 2, 3 or 4 possible winning paths that include that square. We could naively check all 8 possible winning paths, but to demonstrate the easy 3-dimensional sparse array notation, we used this fancier approach, which is slightly faster. When we detect a winning path, we mark all the squares that are in the winning path with a hint color of pink.

If the game is won, then we mark the game state as `GAME_OVER`. It is possible that nobody wins. If the game continues, we just change the `game.turn` variable to the opposite of 1 or 2.

```
===========================
calc serv_leave_game! (  //  the client wishes to leave a game
=========================== 
	game  : a_game   //  the game client wants to leave
	my_id : num      //  user id of user wishing to leave
	) ----------------------
	log "## SERVER: leave_game, game={game}" on:TRACE_SERVER

	//  figure out which player corresponds to this user
	touch game.busy

	//  since we can be in the game twice, clear the 2nd slot first
	if game.players[2].userid == my_id
		//  we are in slot 2
		trunc game.players[2]
	elif game.players[1].userid == my_id
		//  we are in slot 1
		trunc game.players[1]

	//  once we have subtracted a player we can't be in a game any more
	fresh_game(game) // clear any game that had been underway
	game.gstate ⇐ GAME_WAITING  // waiting for a partner
```

In this remote call, we are allowing the user to exit the game. There is an `EXIT` button we show in the game so the user can leave at any time. All we do is clear the players subtree, and reset the game if it was underway back to a blank state.

```
===========================
calc serv_rematch! (  // fresh game request, swap X and O
===========================
	game : a_game   //  the game client wants to join
	) ----------------------
	log "## SERVER: rematch, game={game}" on:TRACE_SERVER
	touch game.busy
	swap game.players[1].side <===> game.players[2].side  //  switch between X and O
	fresh_game(game)
```

In this remote call, we switch X and O sides, and reset the game state.

```
===========================
calc fresh_game (  //  clear out traces of previous game
===========================
	game : a_game
	) ----------------------
	game.gstate ⇐ GAME_PLAYING
	game.winner ⇐ U
	game.turn ⇐ 1
	game.nmoves ⇐ 0
	game.last_move ⇐ elapsed
	trunc game.board
	trunc game.hints
```

This helper function resets the game state to the normal starting condition.

### The client side of the code

```
beads level 1 program TicClient

from remote TicServer import NGAMES, SERV_PORT, TIC_TAC_TOE, GAME_WAITING, GAME_PLAYING, GAME_OVER, 
		a_player, a_game, serv_join_game, serv_take_square, serv_rematch, serv_leave_game 

assets local:"art/" remote:"http://beadslang.com/beads/projects/tictactoe_net/art/"
	file:"beep.mp3" label:BEEP 

//  this is our subscribed copy of the game state from the server
//  we will always have a complete copy at the end of each update
//  since the server owns this structure so best not to modify it
var games : array of a_game  --  array 1..NGAMES of games

//  a_client_conn is from std
var con1 : a_client_conn  --  our connection to server
```

Here we declare the client side as a regular Beads program. When we compiled the server program, the compiler emits a compiled header file, which is used by the compiler to resolve the imports. In languages like C and C++ there is no compiled definition file, which is very inefficient. Beads uses the same system as Modula-2 which creates a small file containing the imports in already digested form, which saves duplicate import processing. 

We only have one A/V asset, in this case a sound effect to warn the user they have done an invalid command, which we incorporate with the name BEEP. 

We declare a copy of what is on the server. We will ask the server to keep this data structure up to date, by subscribing to the server.  There is a record type defined in the standard library that holds the connection information. Whenever we perform a remote function call, we will supply the connection variable so the system know which server is going to handle the call.

```
const
	HOST = "ws://beadslang.com"

	BUTT_BACK = #54938F  // button background color
	BUTT_EDGE = #497F7C  // button edge color
	BUTT_TEXT = WHITE

	//  in this simplified program we will generate automatically our user name & ID
	MY_NAME : str ⇐ random_word4() & '-' & random_word4()
	MY_ID   : num ⇐ runtime.hardware_id

	SCAFFOLDING ⇐ N //  when on, doesn't connect to server, just draws some fake games
```

Here we are defining the server hostname, which is a websocket server (running JavaScript via Node.JS), defining some colors we will be using repeatedly, and giving ourselves a unique ID and name. 

```
------------------
calc main_init 	// one time init for the module
	
	//  connect to our server, and ask for updates 1 per second of the playing games
	if SCAFFOLDING
		//  pretend we connected with a server so we can debug drawing code
		loop reps:NGAMES count:fx
			games[fx].gstate ⇐ GAME_WAITING
		con1.client_status ⇐ CSTATUS_CONNECTED

		//  put a game into slot 1
		merge { gstate:GAME_PLAYING, turn:1, nmoves:2 } ===> games[1]
		merge { userid:MY_ID, name:"Fred", won:0, side:"X" } ===> games[1].players[1]
		merge { userid:101, name:"Penelope", won:3, side:"O" } ===> games[1].players[2]
		merge { 1:1, 3:2 } ===> games[1].board

		//  put another game into slot 3
		merge { gstate:GAME_PLAYING, turn:2, nmoves:3 } ===> games[3]
		merge { userid:101, name:"Penelope", won:1, side:"X" } ===> games[3].players[1]
		merge { userid:102, name:"Sydney", won:0, side:"O" } ===> games[3].players[2]
		merge { 1:1, 4:2, 7:1 } ===> games[3].board

		//  put a stalemate in 7
		merge { gstate:GAME_OVER, turn:2, nmoves:9 } ===> games[7]
		merge { userid:111, name:"Joe", won:1, side:"X" } ===> games[7].players[1]
		merge { userid:103, name:"Maxie", won:0, side:"O" } ===> games[7].players[2]
		merge { 1:1, 2:2, 3:1, 4:2, 5:1, 6:2, 7:1, 8:2, 9:1 } ===> games[7].board

		//  put a half joined game in 9
		merge { turn:1, nmoves:0 } ===> games[9]
		merge { userid:MY_ID, name:"Fred", won:1, side:"X" } ===> games[9].players[1]

		//  put a winner in 12
		merge { gstate:GAME_OVER, turn:2, nmoves:9, winner:2 } ===> games[12]
		merge { userid:111, name:"Poindexter", won:1, side:"X" } ===> games[12].players[1]
		merge { userid:103, name:"Robert", won:0, side:"O" } ===> games[12].players[2]
		merge { 1:1, 2:2, 3:1, 4:2, 5:1, 6:2, 7:1, 8:2, 9:1 } ===> games[12].board

	else
		//  go get the game state from the server
		//  subscribe_start will set the status to CSTATUS_WAITING
		//  for external URLs, use the format: ws:--1.2.3.4 or wss: for secure con1s
		subscribe_start(TIC_TAC_TOE, HOST, SERV_PORT, U, games, con1, echo:Y) 
```

During development, before we have the server debugged, we can test our drawing code by setting up some games in progress. When scaffolding is off, the init is just one call to the standard library function `subscribe_start` which establishes the connection to the server, and will immediately start receiving game state data. The receive operations are buffered, and take effect during the refresh cycle of the client. Effectively, on one tick the game is in one state, and then the next opportunity the runtime will load any changes to the game state. Because Beads is a deductive system, whatever part of the screen needs refreshing will be drawn. If only game #3 changes, then only game #3 will be redrawn. The fact that you don't have to manually keep track of which variables have changed eliminates a whole category of bugs.

```
------------------
draw main_draw
	case con1.client_status
	| CSTATUS_WAITING
		//  draw a placeholder graphic
		draw_rect(b.box, color:MEDIUM_PURPLE)
		//  note that on Mac, 269B draws as a color emoji
		draw_str(b.box, "\u269B Connecting to server...", size:50 pt, color:GRAY5)
	| CSTATUS_CONNECTED
		//  draw the array of games
		draw_rect(b.box, color:#4d3f50)
		draw_games
	else
		//  we can't reach the server
		draw_rect(b.box, color:GRAY5)
		//  269C is the fleur du lis symbol
		draw_str(b.box, "\u269C Could not reach server", size:50 pt, color:GRAY5)
```

Here is the main drawing code. We are either waiting for the server to answer, which should only take a fraction of a second, or we are connected and can draw our games, or we can't reach the server for some reason; most likely because the server process isn't running at that moment.

```
------------------
table draw_games
	//  set up the grid
	horz slice
		var ncol
		var nrow

		//  if landscape, it will be 6 x 2, if portrait 3 x 4
		if is_landscape(b.box)
			//  landscape
			ncol = 6
			nrow = 2
		else
			ncol = 3
			nrow = 4

		skip 6 pt
		loop reps:ncol
			add 10 al 
			skip 6 pt
	vert slice 
		skip 6 pt
		loop reps:nrow
			add 10 al
			skip 6 pt
	cell
		//  we have 6 pts of border around each cell
		d_game(games[b.cell_seq])
track EV_TAP
	//  user has clicked in one of the cells of the grid, which each cell holding a game
	//  join this game if it has at least one empty slot
	if games[b.cell_seq].busy <> Y and (games[b.cell_seq].players[1].userid == U or games[b.cell_seq].players[2].userid == U)
		serv_join_game(games[b.cell_seq], MY_NAME, MY_ID) via con1 
	else
		// invalid choice game is already full or system busy
		sound_play(BEEP)
```

We draw the 12 games as either 6 x 2 or 3 x 4 depending on whether the screen is in portrait or landscape. Since it is very common to have the browser debugger running below this arrangement works pretty well.  We draw the games as a grid and if the user clicks in a game cell, we will consider that a request t join the game.

```
------------------
vert slice d_game( --  draw a single game
	game : a_game
	)
	//  if the game is full of people not us show in gray, else show joinable/our games in a beige
	var mythick ⇐ 2 pt
	var myfill:color ⇐ BEIGE  //  joinable color
	var border:color ⇐ #f7cf8f  //  joinable border 
	if are_we_in_game(game)
		//  we are inside this game
		myfill ⇐ #b3c5a1  // very pale green
		border ⇐ #96a587  // darker green
		mythick ⇐ 3 pt
	elif game.gstate <> GAME_WAITING
		//  other people have filled this game and so mark it as non-clickable
		myfill ⇐ GRAY2  
		border ⇐ #a59f97
	draw_rect(b.box, fill:myfill, corner:8 pt, thick:mythick, color:border, pos:0)

	//  draw the game as a top bar showing status info, and bottom square for game
	skip 4 pt
	add 20 al d_status(game)
	//if game.gstate <> GAME_WAITING
	add 40 al d_board_outer(game)
	//else
	//	skip 40 al
	skip 4 pt
```
This is the key routine that draws a single game. We fill a rounded rectangle with a color which depends on whether we are in the game, could join the game, or the game is in process with two other people and we will be merely an observer.

```
------------------
horz slice d_status(  --  leave some margins on left and right
	game : a_game
	)
	skip 10 al
	add 100 al d_status2(game)
	skip 10 al

------------------
vert slice d_status2(  --  draw the status area
	game : a_game
	)
	//  band 1: user1, band 2:timer bar, exit, band 3:user2
	skip 5 al
	add 20 al d_username(game, 1)
	skip 5 al
	add 20 al d_middle_row(game)
	skip 5 al
	add 20 al d_username(game, 2)
	skip 5 al
```

The status area above the game is subdivided into three rows, one for user #1, the middle row is for buttons, and the their row is user #2.

```
------------------
horz slice d_middle_row(  -- draw timer or stalemate announcement
	game : a_game
	)
	//  left side 50 units - stalemate sign or timer bar
	//  right side 50 units - rematch or exit button
	if game.gstate == GAME_WAITING
		//  we can join this game
		add 50 al d_join(game)

	if are_we_in_game(game) 
		//  we are in this game, and it could be waiting also
		if game.gstate == GAME_OVER
			//  game is over, offer us a rematch
			add 50 al d_rematch(game)
		elif game.gstate == GAME_PLAYING
			//  game is running, show timer
			add 50 al d_timer_bar(game)

		//  if we are playing a game, show an exit button
		skip 6 pt
		add 50 al d_exit(game)

// ------------------
horz slice d_timer_bar(  -- the timer bar which shrinks
	game : a_game
	)
	nop
	//draw_rect(b.box, fill:GRAY8)
// 	//  if the game timer is U, then we aren't putting a time limit on the moves
// 	if game.gstate == GAME_PLAYING and game.timer <> U
// 		draw_str(b.box, "{game.timer} sec", size:b.box.height*0.7)
// 

------------------
draw d_exit(  -- when playing a game, show the exit button
	game : a_game
	)
	d_button(b.box, "Exit")
track EV_TAP
	//  tell server we want to leave the game
	if game.busy
		sound_play(BEEP)  // waiting for server to handle prior command
	else
		serv_leave_game(game, MY_ID) via con1 

------------------
draw d_rematch( -- rematch button
	game : a_game
	)
	d_button(b.box, "Rematch")
track EV_TAP
	//  tell server we want to play again
	if game.busy
		sound_play(BEEP)  // waiting for server to handle prior command
	else
		serv_rematch(game) via con1 

------------------
draw d_join(  -- join button
	game : a_game
	)
	d_button(b.box, "Join")
track EV_TAP
	//  tell server we want to join the game
	if game.busy
		sound_play(BEEP)  // waiting for server to handle prior command
	else
		serv_join_game(game, MY_NAME, MY_ID) via con1 
		
------------------
draw d_username( --  the user name in the sidebar
	game : a_game
	playerx -- player index
	)
	if game.players[playerx].name <> U
		//  someone in game
		//  if your turn, draw heavy wedge-tailed rightwards arrow in dingbats
		var arrow:str = "   "
		var suffix:str = "" 
		var mycolor:color = BLACK

		case game.gstate
		| GAME_PLAYING
			//  game in progress, see if it is our turn
			if game.turn == playerx
				arrow = "\u27BD"  //  is our turn, show arrow			
				mycolor ⇐ DARK_RED

		| GAME_OVER
			//  game is finished, say X/O/nobody has won
			if game.winner == playerx
				suffix ⇐ "Won! 🎉" // u1F839
				mycolor ⇐ DARK_RED

		draw_str(b.box, "{arrow} {game.players[playerx].side}: {game.players[playerx].name} {suffix}", size:b.box.height*0.7, indent:2 pt, color:mycolor, just:LEFT)
```

In later versions of the this game we plan to put up a timer to force the user to play within a certain number of seconds. These are the simple drawing functions for the various buttons and name rows. 

```
------------------
//  the board area will be rectangular, subset to the largest square we can fit
draw d_board_outer(  --  draw the overall playing board
	game : a_game
	)
	var r <=== solve_rect(basis:b.box, pin:5, aspect:1.0, inset:b.box.height/24)
	layer area:r
		d_board(game)

------------------
//  assumes you have supplied a square area
table d_board(  -- draw the 9 squares
	game : a_game
	)
	//  draw the grid of 9 cells, implicitly uses cell function that immediately follows
	horz slice
		add  100 al 
		skip   10 al 
		add  100 al 
		skip   10 al 
		add  100 al 
	vert slice
		add  100 al 
		skip   10 al 
		add  100 al 
		skip   10 al 
		add  100 al 
	------------------
	under
		//  background fill
		draw_rect (b.box, color:#BDF7FF) -- pale blue
	
	------------------
	cell
		//  inside grid draw function, b has properties cell_box, cell_seq
		//  if this cell is marked for a hilite, make it stand out with a different background color
		var color ⇐ game.hints[b.cell_seq]
		if color <> U
			draw_rect (b.box, fill:color)
		//  draw the X or O for each square that has been played	
		var playerx ⇐ game.board[b.cell_seq]
		if playerx <> U
			draw_str (b.box, game.players[playerx].side, size:b.box.height*0.95, color:CRIMSON)
	------------------
	over
		//  subtle point: we draw the lines after the grid because we are intruding slightly into 
		//  the space of the grid. if we drew the grid first, the grid would be partially obliterated by the cell
		//  calculate the size of the grid lines. almost the full width of the box, fairly thick.
		var indent ⇐ b.box.width/20
		var length ⇐ b.box.width - indent - indent
		var thickness ⇐ b.box.width*12/320  -- 10 would be perfect but air runtime doesn't draw thick lines accurately

		//  horz lines
		var linec = if are_we_in_game(game) then BUTT_BACK else GRAY4
		draw_line (color:linec, x1:indent, y1:b.box.height*1/3, dx:length, dy:0, thick:thickness)
		draw_line (color:linec, x1:indent, y1:b.box.height*2/3, dx:length, dy:0, thick:thickness)

		//  vert lines
		draw_line (color:linec, x1:b.box.width*1/3, y1:indent, dy:length, dx:0, thick:thickness)
		draw_line (color:linec, x1:b.box.width*2/3, y1:indent, dy:length, dx:0, thick:thickness)
------------------
track EV_TAP --  returns true if absorbed
	//  b has properties: b.box, b.cell_seq, b.cell.x/y, b.cell_id.x/y
	//  if it isn't our turn, or the square is already taken, error
	if game.busy <> Y and game.gstate == GAME_PLAYING and is_our_turn(game) and game.board[b.cell_seq] == U
		//  we are in this game, it is our turn, and the square is empty, so take it
		serv_take_square(game, b.cell_seq) via con1 
	else
		log "rejected tap, in_game={are_we_in_game(game)}, our_turn={is_our_turn(game)}, board={game.board[b.cell_seq]}"
		sound_play(BEEP)
```

This is the critical function that draws the 9 squares of the tic tac toe grid. Note that we draw underneath the grid with a fill of pale blue, then we draw the 9 cells, then we draw above the grid our 4 dividing lines. When the user taps on a cell, if it is their turn, and the busy flag is not blocking the action, we will then call the server to take the square.

```
------------------
draw d_button(  -- simple button drawing func
	mybox : a_rect
	label : str
	)
	var netbox <=== solve_rect(basis:mybox, pin:5, width:min(mybox.width, 120 pt))
	draw_rect(netbox, fill:BUTT_BACK, thick:2 pt, color:BUTT_EDGE, corner:netbox.height*0.4)
	draw_str(netbox, label, color:BUTT_TEXT, size:netbox.height*0.6, indent:2 pt)

------------------
calc are_we_in_game( -- helper function to determine if we are already in a specific game
	game : a_game
	) :yesno
	return game.players[1].userid == MY_ID or game.players[2].userid == MY_ID

------------------
calc is_our_turn( -- helper function to determine if it is our turn in this game
	game : a_game
	) :yesno
	//  note that we don't need to test for in_game also, because this test is tighter
	case game.turn
	| 1
		// it is player 1's turn, are we player 1?
		return game.players[1].userid == MY_ID
	| 2
		// it is player 1's turn, are we player 2?
		return game.players[2].userid == MY_ID
	else
		return N	
```

These are useful functions that are used a few times, such as drawing a rounded button, determining if we are in a game, and calculating if it is our turn in the game.

That's all there is to the client. As you can there is almost no fat in the code, and you would be hard pressed to make a program that does this in fewer words.


