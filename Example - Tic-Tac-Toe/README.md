## Example / A Tic-Tac-Toe game (standalone version)

This simple program will play the classic children's game of Tic-Tac-Toe .

![tictactoe example](http://beadslang.com/examples/TicTacToe/tictactoe.gif)

The first line of every Beads program declares the level of the language, and names the project.

```
beads level 1 program TicTacToe
```

When producing standalone Windows and Mac OSX executables, any art resources such as sound effects and bitmaps will typically be embedded into the executable. For HTML/JS outputs, you will specify the URL of the resource so the browser can download it.  This game uses a sound effect. So that we can produce both executable and HTML output, we specify the local file location of the resource, and the URL of the folder. To make for less typing, you specify the local and remote folders at the beginning of the asset block, and then each file will only need the filename, and the label to be used inside the code to refer to this asset. Effectively the asset is a constant to the program's point of view.

```
assets local:"/code/TicTacToe/src/" remote:"http://magicmouse.com/beads/examples/TicTacToe/"
	file:"beep.mp3" label:BEEP
```

The next section declares the main state record for the game, which stores who is the current player, who has won, how many moves have been made so far, and the playing board, and a list of color hints which allows us to highlight the squares that were involved in a winning move.   

```
record a_state      //  our global state record
	player : str	//  the player whose turn it is: "X", "O"
	winner : str	//  U means no winner yet
	nmoves : num	//  total number of moves played so far, 0..9
	board  : array of str	//  a 9 element array representing the board, each string value is either PLAYER_X, PLAYER_O, or U
	hints  : array of color	//  a 9 element array holding color overrides for board cells

var g : a_state

```

This implementation of the game uses a one-dimensional array for the 9 squares. It is less work overall to use one-dimensional coordinates for a game of this simplicity. In order to check for a winning move, we store a two dimensional array of all the winning paths through the grid. There is a syntax for matrix literals in Beads that permits easy definition of multi-dimensional arrays. If you put in a semicolon, it starts a new level of the matrix. Two semicolons in a row mark two levels change (for 3-D matrices). Thus it is easy to specify a multi-dimensional array literal without using additional parentheses and brackets. Since Beads uses sparse arrays by default, the following definition:

```
	WINNING_WAYS <=== [ 1 2 3; 4 5 6; 7 8 9; 1 4 7; 2 5 8; 3 6 9; 1 5 9; 3 5 7]

```

Each of the 9 cells of the board thus has 2, 3, or 4 pairs of neighbor cells that constitute all the possible winning paths that go through that cell. By searching through the neighbor pairs for a given cell we can efficiently test for winning moves.

During testing it is handy to have a way of starting with the game part-way finished. This accelerates testing. So we define a scaffolding constant:

```
	SCAFFOLDING = Y  //  if true, start almost won
```
In Beads each chunk of code is prefixed with an indicator as to what kind of code chunk it is. There are chunks related to calculation `calc`, drawing blocks named `draw`, `grid`, `table` and `slice`. In almost every program you will have an initialization block, which has a reserved name `main_init`, which is run at the very start of the program one time. In this program we call the sub-function `reset_board`, and then if the `SCAFFOLDING` flag is set, we will then set the board to have 4 moves already done. Note that in the case where a function has no parameters, it is not necessary to add empty parentheses. Many functions will not have parameters, and this is one of many instances where Beads saves typing by eliminating superfluous punctuation.

```
------------------
calc main_init 	// one time init for the module
------------------
	reset_board
	if SCAFFOLDING 
		g.board[1] = "X"
		g.board[2] = "O"
		g.board[3] = "O"
		g.board[5] = "X"
		g.nmoves = 4
```

The sub-function ```reset_board``` is used to start a fresh game. It sets up the current player to be X, clears any previous winner, sets the number of moves to zero and empties out the board and hints arrays. The ```trunc``` command truncates a tree.

```
------------------
calc reset_board  // reset the playing state
------------------
	g.player = "X" 
	g.winner = U
	g.nmoves = 0 
	trunc g.board 
	trunc g.hints
```
The main drawing function of each Beads program is called `main_draw`, and it is executed whenever the entire screen needs to be refreshed. In the case of windowed environments such as browsers, since Beads is a reactive/dynamic layout type of system, the screen will be reformmated when the size of the window changes. In a mobile app, the screen size is effectively changing when the phone is rotated from landscape to portrait orientation (if the profile you specify for the final product supports both orientations).

In this case we have 3 layouts, one for portrait, one for landscape, and one for square areas. Many programs may only have one orientation, but to demonstrate how Beads draws we show 3 different layouts.

```
------------------
draw main_draw
------------------
	if b.box.width / b.box.height > 1.25
		landscape_layout
	elif b.box.height / b.box.width > 1.25
		portrait_layout
	else
		square_layout
```

A `slice` block is a kind of drawing block that is subdivided into horzontal or vertical slices. This takes the existing space created by the parent block, and subdivides it according to the formula supplied by the `add` and `skip` sections. In the following horizontal slice block, we are subdividing the screen horizontally into strips, based on a relative proportion. Because mobile phone resolutions vary by almost 10:1 among the devices in the installed base, using physical pixels is a very bad idea, and in almost all cases you will use either proportional units (aliquots, abbreviated `al`) or physical units like points (abbreviated `pt`). In this example we given 30 parts of the space to the board, and 10 parts of the space to the sidebar. The total number of parts is 40, so thus the board is 3/4 the width, and the remaining 1/4 of the screen is the sidebar. The proportional amounts are not limited to constants, and can be expressions, and you can use `if` statements to control which sections appear. Each `add` statement adds another slice, and after the size specification, you specify the sub-function that will do the drawing for that slice. To construct a screen you keep subdividing the screen into smaller sections, and finally end with drawing something into a small rectangular area. Because Beads uses a tracked mutable state system under the hood, you do not specify which block needs to be refreshed, but it is inferred from the dependency graph of quantities used by the code in the drawing block. In systems which do not track state information, large amounts of unnecessary refresh can occur. In traditional graphical programming, the programmer is repsonsible for determining how much of the screen needs refreshing, and under-drawing and over-drawing bugs abound. 

```
------------------
horz slice square_layout
------------------
	add 30 al square_board
	add 10 al landscape_sidebar
```

In this next sections are laying out the various configurations of screens, depending on landscape or portrait:

```
------------------
draw square_board
------------------
	layer area:solve_rect(basis:b.box, pin:5, aspect:1)
		d_board

------------------
horz slice landscape_layout
------------------
	add b.box.height px d_board
	add 10 al landscape_sidebar

------------------
vert slice portrait_layout
------------------
	add 10 al d_status
	add b.box.width px d_board
	if g.winner <> U
		add 10 al d_newgame
	else
		skip 10 al

------------------
vert slice landscape_sidebar
------------------
	//  in landscape orientation we slice the side window into 2 parts
	skip 10 al
	add 10 al d_status
	skip 10 al
	if g.winner <> U
		add 10 al d_newgame
	else
		skip 10 al
	skip 10 al


```
This block draws the status section of the screen. This code is solely concerned with drawing the status area, which is a rectangle that the parent created and scheduled for drawing. In each drawing block, there is an implied variable `b` that is a record describing the block, and the most commonly used field in the b record is the `box` field, which is a rectangle (a sub-record containing the fields `left, top, width, height`). This block tests to see if there is a winner yet, and if the game is still underway, we draw whose turn it is. The standard library of Beads has various drawing functions like `draw_str` which draws a text string, and `draw_rect` which draws a rectangle. There are many options for text drawing, such as font, leading, indents, justification, but for this block all we need to know is that the default justification is centered horizontally and vertically, and autoshrink is on by default. Autoshrink means that if you specify a text size that is too large for the box it will automatically adjust the font size so that the entire string fits into the space. In this case we specified 99 points, which will very likely be reduced in size. We indent horizontally by 1/14th of the width of the box, which is a proportional amount. Beads uses a string substitution system similar to that in the latest JS specification, but instead of using backticks, you use normal double quotes to have a substituted string, and doesn't require a dollar sign in front of the brace, as our experience shows that it is much more common to use substituted strings than to want to draw a brace character. To draw a brace you would escape the brace like \{. So inside the braces {} you any expression is converted to a string. 

```
------------------
draw d_status
------------------
	//  either announce the winner, or show whose turn it is now
	if g.winner == U
		//  game in progress, say X/O's turn
		draw_str(b.box, "{g.player}’s turn", size:99 pt, indent:b.box.width/14)
	else
		//  game is finished, say X/O/nobody has won
		draw_str(b.box, "{g.winner} has won", size:99 pt, indent:b.box.width/14, color:CRIMSON)
```

This section of code draws a button, which is a simple rounded rectangle with text inside. Since this is an interactive control, the newgame block has a tracking section immediately after the draw code, which handles events. Since it is very command for a track block to handle a single event, there is a shorthand notation where you specify the event kind after the `track` keyword, and in this case we are concerned with the TAP gesture. In the standard library definition file there is a set of predefined event kinds like EV_TAP, EV_DOUBLE_TAP, EV_KEYBOARD, etc., which correspond to the typical user events one sees in interactive graphics.

```
------------------
draw d_newgame
------------------
	var boxw ⇐ b.box.width*12/14
	var tbox : a_rect <=== solve_rect (basis:b.box, pin:5, width:boxw, height:b.box.height*0.8)
	draw_rect (tbox, fill:LIGHT_GREEN, color:DARK_GREEN, corner:8 pt, thick:2 pt)
	draw_str (tbox, "NEW GAME", size:tbox.height*0.4, indent:tbox.width/14, color:DARK_GREEN)
------------------
track EV_TAP
	//  any click in the new game button when the game is over should start a new game
	reset_board()
```

Now we get to the core function of the program, which is the drawing of the Tic-Tac-Toe board of 9 squares. There is a kind of draw block called a `table`, that draws a two-dimension grid of rectangular cells. The first section (`horz slice`) specifies the columnar grid spacing, and second section (`vert slice`) specifies the vertical dimension spacing. In the horz slice section, we are adding a column of 100 proportional units (aliquots, abbreviated al), then skipping over a gap of 10 aliquots, and then repeating so that we have 5 columns total; 3 data columns, and 2 dead space columns (the `skip` keyword indicates dead space). By explicitly defining data and skipped space it is much more precise than other layout systems such as CSS which is devilishly unpredictable.

```
------------------
grid d_board
------------------
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
```

The `under` section draws a pale blue rectangle underneath the entire playing board using the standard library `draw_rect` function.  

```
	under
		//  background fill
		draw_rect (b.box, color:#BDF7FF) // pale blue
```

The `cell` section is the critical section for a grid; it is called 9 times, with the colums and row values automatically incremented, to cover the 9 grid cells. Inside a grid cell section, there is the implied variable `b` that has fields like `b.box` for the bounding box of the cell rectangle, `b.cell_seq` for the sequence number of the cell (which goes from 1 to 9, `b.cell.x` for the x coordinate of the cell column (1..3), and `b.cell.y` for the y coordinate of the cell row (1..3).  

```
	cell
		//  inside: b.box, b.cell_seq, b.cell.x/y, b.cell_id.x/y
		//  if this cell is marked for a hilite, make it stand out with a different background color
		var color = g.hints[b.cell_seq]
		if color <> U
			draw_rect (b.box, color:color)
	
		//  draw the X or O for each square that has been played	
		var player = g.board[b.cell_seq]
		if player <> U
			draw_str (player, b.box, size:b.box.height*0.95, color:CRIMSON)
```

The final section is `over` which draws on top of the grid cells, as a final pass. In our case since the lines between the cells are actually thicker than the area allocated for the lines, we must draw them last on top so as to have a nice looking grid.
The `over` section is used to draw on top of the grid

```
	over
		//  subtle point: we draw the lines after the grid because we are intruding slightly into 
		//  the space of the grid, and when hinted, if we drew the grid first, the grid would be
		//  partially obliterated by the cell, as they overlap. painter's algorithm!

		//  calculate the size of the grid lines. almost the full width of the box, fairly thick.
		var indent = b.box.width/20
		var length = b.box.width - indent - indent
		var thickness = b.box.width*12/320  // 10 would be perfect but air runtime doesn't draw thick lines accurately

		//  horz lines
		draw_line (color:GRAY2, x1:indent, y1:b.box.height*1/3, dx:length, dy:0, width:thickness)
		draw_line (color:GRAY2, x1:indent, y1:b.box.height*2/3, dx:length, dy:0, width:thickness)

		//  vert lines
		draw_line (color:GRAY2, x1:b.box.width*1/3, y1:indent, dy:length, dx:0, width:thickness)
		draw_line (color:GRAY2, x1:b.box.width*2/3, y1:indent, dy:length, dx:0, width:thickness)
```

Attached to a draw block is an optional series of `track` blocks, that handle events related to the prior draw block. In this case we are capturing drag events (for the purpose of warning the user that dragging is not supported), and tap events which correspond to single taps of a touch screen or a mouse click. Since touch screens are the more dominant interaction form now due to the popularity of mobile phones, mouse-based devices are mapped automatically by the runtime into the corresponding touch gesture. If the tracking block returns Y this means it is absorbing the event and no other block will see that event. As is common in interactive graphics, the event handling section is the largest code block, because it takes the input and advances the game to the next phase. 

in response to a tap, if the game was already over, we will interpret a click in the board area as an intention to start a new game. If the user has clicked on a grid line separating the cells, the implied variable of the cell coordinate that they tapped on will be undefined (U), and can be ignored. If the user clicks on a cell that is already occupied by some player, we will ignore it. Only if the cell is unoccupied will we take the cell, and then determine if that move just won the game.


```
track EV_DRAG_BEGIN
	sound_play(BEEP) -- warn user that they started a drag, they meant to tap probably
------------------
track EV_TAP --  returns Y if absorbed
//  inside: b.box, b.cell_seq, b.cell.x/y, b.cell_id.x/y
//  the e record has info about the raw event.
//  note that clicks on grid lines which are dead space, cell index will be U

	//  as a convenience, if the game was over, interpret a tap in the board area as a request to start a new game
	if g.winner <> U
		reset_board()
		return Y

	//  we will use the current cell many times
	var cellx ⇐ b.cell_seq

	//  ignore clicks in dead areas like grid lines, or if the square is already occupied
	if cellx == U or g.board[cellx] <> U
		sound_play(BEEP)
		return Y
		
	//  mark the cell for the current player
	g.board[cellx] ⇐ g.player
```

Now we check for a won game, by scanning the 8 possible winning paths for a 3 in a row. We show the winning three in a row by setting the hints array to override the color for the cell. Note that it is possible for a winning move to have two different 3 in a row paths.

```
	//  check for a win by seeing if any of the 8 winning paths have 3 in a row
	var won = N
	loop array:WINNING_WAYS path:p
		//  the cells in the path are p[1], p[2], p[3]
		if g.board[p[1]] == g.player and g.board[p[2]] == g.player and g.board[p[3]] == g.player
			//  we now have 3 in a row, mark the 3 winning cells for hilite
			loop from:1 to:3 index:ix
				g.tints[p[ix]] = LIGHT_PINK

			//  there may be a second simultaneous winning path, so keep going
			won = Y
	//..end loop

	if won
		g.winner ⇐ g.player  --  current player just won
		return Y  -- victory
```

This was not a winning move, so increment our number of moves made, and if we have reached 9 moves then the grid is full, and have reached a stalemate, and the game is over.

```
	//  check for a stalemate
	inc g.nmoves
	if g.nmoves >= 9 
		g.winner ⇐ "Nobody"  
		return Y  -- stalemate
```

If we get here, we still have empty squares in the game. So switch the current player

```
	//  game continues, switch sides
	g.player ⇐ if g.player == "X" then "O" else "X"
```

This program is very close to the theoretical minimum number of words to implement the specification. Notice that the code had no explicit coordinates which means it will work across many devices properly. Also notice there is no code related to triggering refresh; the mutable state of the program is tracked by the runtime, and any change to the variables used in a drawing block, wiil trigger refresh of that chunk. 

In a later example we will show how one can build both client/server programs in Beads, and present a multi-player Tic-Tac-Toe game.