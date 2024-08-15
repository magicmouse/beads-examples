## Example / A minesweeper clone

Welcome to the Beads language. Please note that this document is in markdown format. To view a nicely rendered markdown file, you can use the free [MacDown program](https://github.com/MacDownApp/macdown/releases/download/v0.7.1/MacDown.app.zip) for macintosh, or you can use [Markdown Pad](http://markdownpad.com/download.html) for Windows.

This program is a game of minesweeper, with the mines replaced by a cute little bear. The original web-app which this code imitates can be found at [Carol Chiew's bearsweeper](https://bearsweeper.kyaroru.com/#/). The Beads version is approx. 1 file of 1350 words (after comments removed), compared to over 50 files, and with 10x the amount of code in Electron. 

When playing the game the screen looks like this:

![browser example](http://magicmouse.com/beads/examples/bearsweeper/game1_small.png)

The first line of every Beads program must declare the level of the language.

```
beads 1 program bearsweeper
```

In Beads you can import graphical resources easily. Since you can export executables for OSX and Windows, as well as web apps, you typically supply two locations for the art resources, a local one that can be bundled into the executable, and a remote one for use with the web version of your program.  After supplying the folders, you can then just refer to the file name, which is convenient, and then assign a handy short label that will be used inside the Beads program to refer to the resources.

```
resource local:"/code/bearsweeper/src/" remote:"http://magicmouse.com/beads/examples/bearsweeper/"
	file: "bear.png" label:BEAR
	file: "bear2.jpeg" label:BEAR2
	file:"snd_beep.mp3" label:BEEP
	file:"snd_bear.mp3" label:SOUND_LOST
	file:"snd_ta_da.mp3" label:SOUND_WON
```

Typically you put all critical constants at the top of the program. In our case, during development we will want to force the game to skip over the opening menu screens and start at the game. The scaffolding flag helps in development as well, by putting you into the middle of a game so as to skip the extra clicks needed to get to a more critical point of the game where you are about to win. We also define the basic colors we will use in the game (we use the HTML hex color #rrggbb form for colors).

```
const
	FORCE_GAME_PHASE = Y  //  skip opening screens, and shrink the playing board to 4x4
	SCAFFOLDING = N // draw a game in progress

	COLOR_BUTT_FORE = #b0caed
	COLOR_DIFF_FORE = #faa5ba
	COLOR_PUKE = #baec97
	COLOR_SWEPT_BACK = #b2cffb
	COLOR_TABLE : array of color = [ BLUE, GREEN, RED, CYAN, BLACK, GRAY, BLACK, BLACK ]
```

Now the core data structures of the entire program are declared. We have a game state `g` that will hold the mutable state of the game. It consists of various single variables, like how many squares per side the board is `nc`, or how many mines `nmines` are placed in the board, and the board itself `sq`.

```
record a_square
	count       //  number of adjacent mines
	is_mine     : yesno  //  is this a mine cell?
	is_flagged  : yesno  //  is this cell flagged?
	is_swept    : yesno  //  Y when swept

record a_state
	phase  : ( PHASE_OPENING, PHASE_ABOUT, PHASE_DIFFICULTY, PHASE_GAME, PHASE_END )

	//---- set by difficulty level
	nc     //  number of cells
	nmines //  number of mines
	
	//--- change during the game
	result : ( GAME_WON, GAME_LOST ) //  result of game, U means still playing
	sweep_avail //  number of cells we have left to sweep
	flags_avail //  number of flags that we have remaining to plant on the board
	clock       //  number of seconds as user tries to solve the puzzle
	clock_running : yesno  // is clock running?
	help_active : yesno  //  is the help screen overlay up?
	congrats_active : yesno   //  is the congrats screen up?
	hint : a_xy  //  xy coordinate of cell that is hinted, if U then no hint is active
	sq   : array^2 of a_square  //  the minefield

var
	g : a_state
```

Note that `phase` is defined as a number that is expecting to be one of the enumerated values `PHASE_OPENING`, `PHASE_ABOUT`, etc.  Each value in Beads has an undefined value (`U`) until it is set to something. Every datatype can be compared against `U`. 

Each program has at least 2 entry points: one of the entry points is called one time at the very start of the program to initialize any data structures. This is always called `main_init`.

Each block of code (which corresponds to a function/subroutine) has a prefix which indicates the kind of function it is. If it is only changing values, it is marked as a `calc` function. If it is related to drawing, it will be either a `draw`, `grid`, `slice`, `stack`, `grid`, or `table` block. The different kinds of draw blocks subdivide the screen in various ways. A plain `draw` block doesn't subdivide. You cannot draw inside a `calc` block as it has no drawing context available. 

```
===========================
calc main_init
===========================
	g.phase = PHASE_OPENING

	//  set up a never ending callback to 'do_tick' every second, starting immediately
	loom_timer(do_tick, delay:0, interval:1, reps:INFINITY)

	if FORCE_GAME_PHASE
		g.phase = PHASE_GAME
		g.nc = 4  // would be set by difficulty screen, a small grid makes it easy to test 
		g.nmines = 4  // would be set by difficulty screen
		fresh_game

	if SCAFFOLDING
		//  put in some data to test refresh
		g.sq[1, 1].is_swept = Y
		g.sq[1, 1].count = 1
		g.sq[1, 2].is_flagged = Y
		g.sq[1, 2].count = 1
		g.sq[2, 2].is_swept = Y
		g.sq[2, 2].count = 2
		g.sq[3, 3].is_swept = Y
		g.sq[3, 3].count = 3
		g.sq[4, 4].is_swept = Y
		g.sq[4, 4].count = 4
		dec g.flags_avail
		g.clock = 62  //  should show as 00:01:02
		g.hint.x = 3
		g.hint.y = 1  // have a hint flashing
```

In the above code, we set the the basic phase of the game to be `PHASE_OPENING`, but if we are forcing the game we will instead set it to `PHASE_GAME`, and to make it easier to debug, we will set the game size to a very tiny 4 x 4 cells, with only 4 mines.

The library function `loom_timer` allows you to set up a repeating callback every second. The loom is a conceptual event system, like an Indian beadwork loom, where each channel contains events of a different kind. In a game this simple, we will only be handling timer events, and taps.

```
===========================
calc do_tick // is called once a second
===========================
	if g.clock_running
		inc g.clock  // will cause status item to get redrawn
```

The do_tick function merely increments the clock, which is tracking how many seconds the user has taken to solve the current puzzle.

The next funcion clears the board for a fresh game. It resets the variables to their default states at the beginning of a game. Since the rules of minesweeper dictate that the first play of the user cannot hit a mine, we defer placing the mines until the user picks that first square.

```
===========================
calc fresh_game
===========================
	//  difficulty picker phase set g.nmines and g.nc
	g.result = U
	g.sweep_avail = g.nc^2 - g.nmines
	g.flags_avail = g.nmines
	g.clock = 0
	g.clock_running = N
	g.help_active = N
	g.congrats_active = N
	trunc g.hint

	//  mark the entire grid as unswept. we test is_swept for N to help keep us on the board
	trunc g.sq  //  clear previous grid
	loop from:1 to:g.nc index:col
		loop from:1 to:g.nc index:row
			g.sq[col, row].is_swept = N
			g.sq[col, row].count = 0 // we will add to this when the mines are placed

	//  we won't place the mines until the user has swept the first square
```

The main drawing function of each Beads program is called `main_draw`. It will be called whenever the window size changes, the orientation changes on a mobile device, or when changes in the tracked state imply a refresh of the main block is needed. In Beads, you do not schedule explicitly the refresh of screen areas. The runtime system is tracking which parts of the state are used by each code fragment, and when it deduces that a part of the screen is needing refresh, will call the drawing code. The larger and more complex a project grows the greater the benefits in error reduction and extra coding.

In this function, we branch into the main phases of the game: the opening screen, the about box, the difficulty picker, and the game phase. Note that the help and congratulations screens are modal screens that are drawn on top of the game.


```
===========================
draw main_draw
===========================
	draw_rect(b.box, fill:#282d33)

	case g.phase
	| PHASE_OPENING
		//  opening screen start/about buttons
		d_opening

	| PHASE_ABOUT
		d_about

	| PHASE_DIFFICULTY
		//  pick level of difficulty
		d_difficulty

	| PHASE_GAME
		d_game //  will set board_size
		//  help screen is done as an overlay of the game
		if g.help_active
			d_help
	
		//  congratulation screen is done as an overlay of the game
		if g.congrats_active
			d_congrats
```

A `slice` block subdivides the screen into strips. In this case the stirps are vertically spread. Inside a slice block you can `add` a strip of something that is drawn, or `skip` a strip. Unlike HTML/CSS which uses a crazy-quilt of margin, padding, and borders, which inevitably are maddeningly inconsistent and surprising in their behavior, Beads uses a simple algorithm where the incoming rectangle is subdivided explicitly, with zero ambiguity. The measurement units of each strip are either pixels (px), points (pt), or proportional units of aliquotes (al). Each strip is given a function name to call to draw, or in the case of the 2nd strip, we do an anonymous function to draw the string "Bear Sweeper", which is a trivial 1-line function and not worth the bother of naming.

```
===========================
vert slice d_opening
===========================
	skip 40 al
	add 80 al d_bear
	skip 4 al
	add 10 al 
		draw_str(b.box, "Bear Sweeper", size:b.box.height*0.7, color:WHITE)
	skip 4 al
	add 16 al butt_start
	skip 4 al
	add 16 al butt_about
	skip 30 al
```

The main bear icon in a future version will animate, which is why we left this in its own function

```
===========================
draw d_bear
===========================
	//  -- not yet implemented, animation
	draw_image(b.box, BEAR, aspect:Y)
```

The start button is a rectangle that is inside one of the strips of the main screen. Since the strip goes across the whole screen, we will use the most frequently used library function, `solve_rect` to take a series of constarints, and calculate a rectangle. This function has a very flexible parameter set, and this case we are using the current block's bounding box (b.box, which is referencing the implied variable `b` which carries basic information about the drawing context of each draw function), asking for a pin point of 5 (we use the Adobe Creative Suite 9-point attachment point system, where the numbers 1-9 refer to the upper left corner, middle top, upper right corner, etc.  By specifying that the width is 2.2 times the height, we ensure that the button is nicely shaped but could be any size. Beads programs almost never use pixel coordinates, because pixels vary too widely in actual physical size. There are Android devices ranging from 100 to over 500 dots per inch, so 2 pixels could be microscopic on some devices. By using proportions whenever possible, Beads programs adapt very nicely and naturally to whatever sized screen they are on. This is an enormous problem with CSS, and since Beads can use `if` statements in the draw functions it can fine-tune the layout so it looks great on all devices.

In this button drawing function, at the end of the draw section, you have a `track` section, which allow syou to track events, in this case the TAP event. If the user taps on this button, it will set the phase to the difficulty level picking screen.

```
===========================
draw butt_start
===========================
	var r <=== solve_rect(basis:b.box, pin:5, width:b.box.height*2.2)
	draw_rect(r, color:COLOR_BUTT_FORE, width:1.5 pt, corner:5 pt)
	draw_str(r, "Start", size:b.box.height*0.35, color:COLOR_BUTT_FORE)
track EV_TAP
	g.phase = PHASE_DIFFICULTY
```

In the case wehre we draw the about button, when the user taps that button, we set the game phase `PHASE_ABOUT` which will overlay some info.

```
===========================
draw butt_about
===========================
	var r <=== solve_rect(basis:b.box, pin:5, width:b.box.height*2.2)
	draw_rect(r, color:COLOR_BUTT_FORE, width:1.5 pt, corner:5 pt)
	draw_str(r, "About", size:b.box.height*0.35, color:COLOR_BUTT_FORE)
track EV_TAP
	g.phase = PHASE_ABOUT
```

To allow the user to back up, we have a back button.

```
===========================
draw butt_back
===========================
	var fore:color = if g.phase == PHASE_GAME then BLACK else WHITE
	draw_str(b.box, "⬅ Back", size:b.box.height*0.7, indent:12 pt, just:LEFT, color:fore)
track EV_TAP
	//  transition back to the appropriate state
	case g.phase
	| PHASE_ABOUT, PHASE_DIFFICULTY
		g.phase = PHASE_OPENING
	else
		g.phase = PHASE_DIFFICULTY
```

The about box consists of 5 strips, one for the back button, and some text and an icon.

```
===========================
vert slice d_about
===========================
	skip 8 al
	add 11 al butt_back
	skip 40 al
	add 11 al 
		draw_str(b.box, "BearSweeper was originally written by Carol Chiew in Malaysia", indent:10 pt, size:b.box.height*0.7, color:WHITE)
	skip 4 al
	add 60 al 
		draw_image(b.box, BEAR2, aspect:Y)
	skip 4 al
	add 11 al
		draw_str(b.box, "and it is now cloned in Beads", indent:10 pt, size:b.box.height*0.7, color:WHITE)
	skip 50 al
	add 7 al
		draw_str(b.box, "© 2019 edj", size:b.box.height*0.7, color:WHITE)
	skip 8 al
```

The difficulty picker is another set of strips. We have 3 levels of difficulty, and to save duplication of code, we call a function with the number of cells across and the number of mines.  Once we have set the dimensions of the playing board, we call `fresh_game` to set the board to its starting state.

```
===========================
vert slice d_difficulty
===========================
	skip 8 al
	add 9 al butt_back
	skip 51 al 
	add 10 al
		draw_str(b.box, "Choose your difficulty", size:b.box.height*0.7, color:WHITE)
	skip 4 al
	add 17 al butt_difficulty("Easy", 8, 5)
	skip 4 al
	add 17 al butt_difficulty("Medium", 12, 15)
	skip 4 al
	add 17 al butt_difficulty("Hard", 16, 30)
	skip 63 al
	
===========================
draw butt_difficulty( // difficulty level button
===========================
	prompt : str
	ncells
	nmines
	)
	var r <=== solve_rect(basis:b.box, pin:5, width:b.box.height*2.2)
	draw_rect(r, color:COLOR_DIFF_FORE, width:2 pt, corner:5 pt)
	draw_str(r, prompt, size:r.height*0.4, color:COLOR_DIFF_FORE)
track EV_TAP
	g.nc = ncells
	g.nmines = nmines
	g.phase = PHASE_GAME
	fresh_game

```
This is game drawing function that is used while we are drawing. Note that in order to have the game space out nicely we take into account the pixel resolution of the bounding box of our overall window (`b.box`) and calculate various proportions of that to ensure that no matter we are in portrait or landscape mode. These formulas require a little trial and error to get just right, but when you have it tuned right the program looks good on any device you throw it onto. Notice how if we are in portrait mode, we include the "Enjoy Bearsweeker" message, but in landscape mode we will skip that. CSS users dearly wish they could put an `if` statement around their styles; at present in JS you typically use complex frameworks to achieve conditional formatting.

```
===========================
vert slice d_game // total game board area
===========================
	draw_rect(b.box, fill:#fefb9e)

	//  calculate the board size we will use 62% of total
	var board_size = min(b.box.height, b.box.width)*0.65
	var status_v = min(60 pt, b.box.height*0.2)
	var butt_v = min(60 pt, b.box.height*14)
	var status_h = if b.box.width < status_v*20 then b.box.width*0.90 else board_size

	skip 4 al
	add butt_v px butt_back
	skip 10 al
	add status_v px d_status(status_h)
	skip 10 al
	add board_size px d_board(board_size)
	skip 25 al
	//  only in portrait mode draw the bottom prompt, we don't have enough space in landscape
	if is_portrait(b.box)
		add 18 al 
			draw_str(b.box, "Enjoy BearSweeper!", size:min(50 pt, b.box.height*0.7), color:BLACK)
	skip 10 al
```

The help and congratulations screens are overlaid on the main game screen. They are just slices of text.

```
===========================
draw d_congrats  // overlay of main screen, used to notify winning
===========================
	//  b.box is same size as entire screen
	draw_rect(b.box, fill:WHITE, opacity:0.8)  // dim the whole screen
	var boxw = min(b.box.width*0.5, 280 pt)

	//  draw text
	var r <=== solve_rect(basis:b.box, pin:5, width:boxw, height:boxw*0.6)
	draw_rect(r, fill:WHITE, color:GRAY, width:2 pt, corner:2 pt)
	draw_str(r, "Congratulations\n\nYou've won the game in just {g.clock} seconds!\nTo start again, click the emoji face", indent:10 pt, vert:0.2, size:r.height/9)

	//  draw an okay button
	var r2 <=== solve_rect(basis:r, pin:8, dy:-r.height*0.15, width:r.width/4, height:r.height/6)
	draw_rect(r2, color:CRIMSON, width:2 pt)
	draw_str(r2, "OK", size:r2.height*0.5, color:CRIMSON)
track EV_TAP
	g.congrats_active = N  // disable the congrats overlay

===========================
draw d_help  // help screen
===========================
	//  b.box is same size as entire screen
	draw_rect(b.box, fill:WHITE, opacity:0.8)  // dim the whole screen
	var boxw = min(b.box.width*0.5, 320 pt)

	//  draw text
	var r <=== solve_rect(basis:b.box, pin:5, width:boxw, height:boxw*0.6)
	draw_rect(r, fill:WHITE, color:GRAY, width:2 pt, corner:2 pt)
	draw_str(r, '''Instructions

- Click any tile to start game
- Right click a tile to flag/unflag
- Click the hint icon to safely reveal tile
- To restart game, press the emoji face''', indent:14 pt, vert:0.2, size:r.height/13)

	//  draw an okay button
	var r2 <=== solve_rect(basis:r, pin:8, dy:-r.height*0.15, width:r.width/4, height:r.height/6)
	draw_rect(r2, color:CRIMSON, width:2 pt)
	draw_str(r2, "OK", size:r2.height*0.5, color:CRIMSON)
track EV_TAP
	g.help_active = N
```

The status bar consists of the help icon, the clock display, an emoji of a face, the number of flags we have left to place, and a hint button.

```
===========================
horz slice d_status( //  status display segmentation
===========================
	boardh
	)
	skip 10 al
	add boardh px d_status2
	skip 10 al

===========================
horz slice d_status2 // the actual status icons
===========================
	var vv = b.box.height

	add vv px d_butt_help
	skip 10 pt
	add 82 al d_clock
	skip 10 pt
	add vv px d_face
	skip 10 pt
	add 82 al d_flagcount
	skip 10 pt
	if g.result == U and g.hint.x == U
		//  only when we don't have a hint running show the hint button
		add vv px d_butt_hint
	else
		skip vv px
```

Each of the sections of the status bar is a function that draws its particular section. Note that by subdividing the screen into separate drawing functions, the coordinate system is reset in each function so that 0,0 is the upper left. It makes calculations so much easier to always be 0 based (although you can change the origin if it helps your drawing code).

```
===========================
draw d_butt_help  // status area - help button
===========================
	draw_rect(b.box, color:COLOR_PUKE, width:2 pt, corner:b.box.height/7, pos:0)
	draw_str(b.box, "ℹ️", size:b.box.height*0.7, color:BLACK, vert:0.8) //  emoji of i with square
track EV_TAP
	g.help_active = Y //  this will add the help overlay

===========================
draw d_face  // status icon and restart button
===========================
	var ss : str = case g.result | GAME_WON "😍" | GAME_LOST "😭" else "😏"
	draw_str(b.box, ss, size:b.box.height*0.9, color:BLACK, vert:0.7) //  emoji of i with square
track EV_TAP
	//  start a new game
	fresh_game

===========================
draw d_butt_hint  // status area - hint button
===========================
	draw_rect(b.box, color:COLOR_PUKE, width:2 pt, corner:b.box.height/7, pos:0)
	draw_str(b.box, "💡", size:b.box.height*0.7, color:BLACK, vert:0.8) //  emoji of lightbulb
track EV_TAP
	//  build a list of all the possible hints
	var hintlist : array of a_xy
	loop from:1 to:g.nc index:col
		loop from:1 to:g.nc index:row
			if g.sq[col, row].is_swept == N	and g.sq[col, row].is_mine <> Y
				append {x:col, y:row} ===> hintlist

	//  now pick randomly from the hint list
	hintlist[random_int(1, tree_count(hintlist))] ===> g.hint

===========================
draw d_clock  // status area - elapsed time clock
===========================
	//  convert the number of seconds into a string
	// note that to allow a time of 0, which corresponds to Jan 1, 1970, epoch time
	// we tell the time string conversion we want the time in GMT
	draw_str(b.box, time_to_str("[iso time]", time:g.clock, city:TIMEZONE_GMT), font:"_typewriter", size:b.box.height*0.7, color:BLACK) //  emoji of i with square

===========================
draw d_flagcount  // status area - flag count
===========================
	draw_str(b.box, "{g.flags_avail}/{g.nmines} flags", font:"_typewriter", size:b.box.height*0.7, color:BLACK) 
```

This is a main gameboard drawing function. So this is the key function that is used to draw the playing grid. A `grid` function has several sections. The first section describes the horizontal subdivision of the screen. Each `add` segment adds another column to the grid. The `vert` section lets you add rows to the grid. In our case we want 3 aliquots of space between the rows, and we only add a gap after the first row. Note that the `loop` statement allows you to specify a local scratch variable `ix` for the current count of the loop, which goes 1, 2....

The `cell` section is the code fragment that will be called for each cell that we earlier defined in the `horz` and `vert` sections. In the case of an 8x8 grid, the cell function will be called 64 times. Inside the cell section of code, the implied variable `b.cell` is a point (a record with fields .x, .y) corresponding to the cell coordinate in the grid, and the variable `b.box` refers to the box of that particular cell.  The `box` field is a record of type `a_rect`, which has the usual fields `.top, .left, .width, .height` As a convenience to the programmer, Beads will automatically expanding during compilation a comparison between a point into a comparison between .x and .y of the two points.

```
===========================
horz slice d_board(  // total board area, used to subdivide into square
	boardh  //  width in pixels we use for board
	)
===========================
	skip 10 al
	add boardh px d_board2
	skip 10 al
	
===========================
grid d_board2  // the playing grid
===========================
	horz slice
		loop reps:g.nc count:ix
			if ix > 1
				skip 3 al
			add 35 al
	vert slice
		loop reps:g.nc count:ix
			if ix > 1
				skip 3 al
			add 35 al
	cell
		//-----------------
		//  draw the square
		//-----------------
		var square = adr g.sq[b.cell]
		if square.is_swept and square.is_mine
			//  this happens when the user sweeps a mine
			draw_rect(b.box, fill:#ac0b4f, corner:b.box.height/11)
			draw_image(b.box, BEAR, aspect:Y, indent:b.box.height/10)
		elif square.is_swept
			draw_rect(b.box, fill:COLOR_SWEPT_BACK, corner:b.box.height/11)
			if square.count > 0
				//  we use a different color for each count 1-8
				draw_str(b.box, to_str(square.count), size:b.box.height*0.6, color:COLOR_TABLE[square.count])
		else
			//  an unswept square
			draw_rect(b.box, fill:COLOR_PUKE, corner:b.box.height/11)

		//  at the end of the game we will reveal all the mines
		//  to allow the user to see their mistakes, draw the flags on top of the bear image
		if square.is_flagged
			draw_str(b.box, "⛳", size:b.box.height*0.8)  //  \u26f3 flag in hole
		//  if this square is hinted; note that it is possible that a hint is on top of a flag!
		if b.cell == g.hint // note: point comparison is legal!
			draw_str(b.box, "HINT", size:b.box.height*0.5, opacity:0.5, indent:4 pt)
```

Immediately after the drawing code for the main board, we have the tracking function for the grid. In this case we respond to both a TAP event, which allows the user to sweep the cell, and the right click (which corresponds to the ALT_TAP gesture). The left click will be ignored if we aren't in a game, and if it is a mine, we lose the game. The right tap toggles the flag of the current cell.

```
-----------------------
track EV_TAP  //  left click
	if g.sq[b.cell].is_flagged or g.result <> U
		//  ignore clicks after game is over, or a click on a flag; they gotta right click to unflag
		sound_play(BEEP)
		return Y

	if g.sq[b.cell].is_mine
		//  BOOM!
		reveal_all_mines  //  make it prettier by uncovering all the cells that the user hadn't flagged yet
		//g.sq[b.cell].is_swept = Y //  make the bomb that killed us visible
		g.result = GAME_LOST
		g.clock_running = N  // stop the clock
		trunc g.hint  //  hide any hint flag
		sound_play(SOUND_LOST)
	else
		//  sweep this cell, guaranteed to not be a mine
		sweep(b.cell)
		g.clock_running = Y  //  start the clock if it is not already running

		//  after sweeping this cell, if there are no more unswept cells, we won
		//  note that user can win on the first move, if by accident all the non-mine squares are contiguous
		if g.sweep_avail == 0
			reveal_all_mines  //  make it prettier by uncovering all the cells that the user hadn't flagged yet
			g.result = GAME_WON
			g.congrats_active = Y
			g.clock_running = N
			sound_play(SOUND_WON)
-----------------------
track EV_ALT_TAP  //  right click
	//  the first click starts the clock
	g.clock_running = Y

	//  flag this cell if it can be flagged
	if g.sq[b.cell].is_swept
		sound_play(BEEP)  //  can't flag a swept cell
	elif g.sq[b.cell].is_flagged
		//  unflag
		g.sq[b.cell].is_flagged = N
		inc g.flags_avail
	elif g.flags_avail > 0
		//  flag 
		g.sq[b.cell].is_flagged = Y
		dec g.flags_avail
	else
		// ran out of flags
		sound_play(BEEP)  //  we used up all our flags
```
This is the core function that handles sweeping of a cell. When a cell is swept that has a count of zero, the rule of minesweeper dictate that it then automaticaly sweeps the neighboring cells, and this continues recursively. 

```
===========================
calc sweep(  // (RECURSIVE) sweep a non-mine cell, and then propagate outwards to unswept cells
===========================
	cell : a_xy // cell to be swept
	)

	//  let the user see this cell now
	g.sq[cell].is_swept = Y
	trunc g.hint //  if there was a hint active, remove it

	//log "bear - sweeping cell [{cell.x}, {cell.y}], nleft={g.sweep_avail}"

	//  if this is the first cell swept, now we can place the mines.
	//  we delay placing the mines to after the first sweep so that the first play always works
	//  nobody likes to get killed on the first click!
	if g.sweep_avail == g.nc^2 - g.nmines
		place_mines(cell)

	dec g.sweep_avail

	//  if this is a zero cell, we automatically sweep adjacent zero cells
	if g.sq[cell].count == 0
		//  now sweep all adjacent cells, note that off-board cells won't have is_swept set to N
		//  that is how we tell we are on the board
		var neighbor : a_xy
		loop from:-1 to:+1 index:dx
			loop from:-1 to:+1 index:dy
				neighbor.x = cell.x + dx
				neighbor.y = cell.y + dy
				//log "bear - testing adjacent cell at [{neighbor.x}, {neighbor.y}]"
				if (g.sq[neighbor].is_swept == N) and (g.sq[neighbor].is_mine <> Y)
					//log "bear - clearing neighbor"
					sweep(neighbor)
```

This pair of functions is used to place the mines on the first click of the user. The rules of minesweeper dictate that the first click can never expose a mine, so we waited until the first click, then place the mines.

```
===========================
calc place_mines (  // put down the mines randomly, but avoid the first square the user picked
===========================
	avoid : a_xy  //  cell to avoid
	)
	//  first cell to be swept, now place the mines
	var nplanted = 0	
	loop until:nplanted == g.nmines
		//  try a random point in the grid
		var try : a_xy <=== {x:random_int(1, g.nc), y:random_int(1, g.nc)}
		if g.sq[try].is_mine <> Y and try <> avoid
			//  this square is not yet mined, and avoids the starting square
			g.sq[try].is_mine = Y			
			update_count(try) //  add to the count for the adjacent squares
			inc nplanted

===========================
calc update_count( // update the count field for neighbors of the mine we just placed
===========================
	mine : a_xy  //  where we just placed a mine
	)
	//  look at the 8 neighboring cells, we don't care about updating the mine's count
	loop from:mine.x-1 to:mine.x+1 index:dx
		loop from:mine.y-1 to:mine.y+1 index:dy
			if g.sq[dx, dy].is_swept == N  // tests for inside playing board
				inc g.sq[dx, dy].count
```

This is a small helper function that shows all the mines once the user blows up a mine.

```
===========================
calc reveal_all_mines //  make all the mines visible
===========================
	loop from:1 to:g.nc index:col
		loop from:1 to:g.nc index:row
			if g.sq[col, row].is_mine
				g.sq[col, row].is_swept = Y
```





