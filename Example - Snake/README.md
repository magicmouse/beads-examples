## Snake

This Beads language sample program plays a Snake game, similar to the classic Nokia phone game of decades ago. It is a fun game, and one of the simplest possible games to program.

![snake example](http://beadslang.com/apps/snake/snake_animated.gif)


The first line of every Beads program must declare the level of the language. We then declare the art assets that will be used with the program.

```
beads level 1 program Snake title "The Classic Snake Game"

assets local:"/code/Snake/src/" remote:"http://magicmouse.com/beads/examples/snake/"
	file:"crunch.mp3" label:CRUNCH
	file:"beep.mp3" label:BEEP
```

The beginning of each program declares the state variables that will be used to track the game. In this case, we have array of points which are the locations of each cell of the snake. Since we support keystroke buffering, we have a queue of pending movements. This allows the user to put in multiple moves ahead of time. We need to know the current direction of the snake (4 possible directions), and where the apple is located that the snake eats to grow one more cell.

```
const
	FRAME_RATE ⇐ 6  --  our target frame rate for the snake to move

var
	snake   : array of a_xy  --  snake body; snake[1] is the head
	queue   : array of a_xy  --  the pending movement queue
	dir     : a_xy  --  snake XY movement speed, {x:+1, y:0} for eastward
	apple   : a_xy  --  apple XY coordinate
	maxlen  : num   -- how long snake can grow, each apple eaten adds 1 to this
	longest : num   -- longest snake in history, user's high score
	paused  : yesno -- have we have paused the game?

```

When the program starts up, we will calculate ergonomically reasonable sizes and spacings of the cells. This game has to be playable regardless of the size of the screen, and the dots per inch of the screen. In modern graphical programming you can't hard-code any pixel sizes, as there is now a 10:1 range of device dot density. This example is designed to work on both desktop computers which assume a keyboard, and on touchscreen phones, which don't have physical keys, and will require a soft keyboard superimposed on the screen. Note that the type `yesno` is similar to the Boolean type in other languages. In some languages like C, a Boolean value only has 2 states: true and false. In Javascript a Boolean value has 3 values: true, false, and undefined. In Beads, a `yesno` type variable has 4 possible states: `Y` (meaning yes), `N` meaning no, `U` meaning undefined, and `ERR` meaning error state. All variables can hold a regular value, but also could be in the undefined or in the error state. This protected arithmetic system was directly copied from Excel. The protected arithmetic of Beads is something that Javascript wishes it had, and avoids massive numbers of problems.

``` 
	//  these values are set when the window size changes
	spacing  : a_xy  --  cell spacing
	cellsize : a_xy  --  cell size after subtracting border
	ncells   : a_xy  --  number of cells in XY
```

Now that we have stored our state, we get ready for the one time initalization call, which by default calls the function main_init, which allows the program to set variables away from the starting value of undefined. This block of code starts the game out in the paused state, sets the current longest the user has reached this round to 1, points the snake going downwards, and thus is waiting for the user to press space bar to start the game.

We call the `loom_timer` function at a rate of 6 times per second so that the snake will move 6 cells per second which is a reasonable speed. The loom is a core concept in Beads, where all events are serialized into strings for the event kind, like a Indian beadwork loom. 

```
====================
calc main_init
====================
	//  called one time only at start of program before any drawing
	{ x:2, y:2 } ===> snake[1]  --  start out with a single cell snake
	{ x:6, y:6 } ===> apple  --  put down an apple
	{ x:0, y:1 } ===> dir  --  head south at the start

	longest ⇐ 1  --  reset high score 
	maxlen ⇐ 5   --  allow snake to grow to 5 cells for starters
	paused ⇐ N	 --  start in the moving state
 
	//  set up a callback to 'update_position' so that the snake moves 
	loom_timer (update_position, delay:0.2, rate:FRAME_RATE, reps:INFINITY)

```

At at rate of 6 times per second, we update the position of the snake. If we are paused we return immediately. If we see any pending events, we process them. If the user is alreay moving in the direction they are asking for, we ignore the key. We only allow 90 degree changes in direction, so if the snake is heading east, we will ignore westward arrow keys.

```
====================
calc update_position
====================
	//  called at the current framerate
	var pending : a_xy

	//  this function is called by a timer. if we are paused, don't update our position
	if paused
		return

	//  look at the pending events, and use them up until we find a valid move.
	loop array:queue index:qx
		queue[qx] ===> pending
		clear queue[qx]

		//  if the new direction is different than current dir, and not the opposite we have a new dir
		if (abs(pending.x) <> abs(dir.x)) or (abs(pending.y) <> abs(dir.y))
			pending ===> dir  -- accept the change
			exit


```

We calculate the new position of the head of the snake. We use the remainder function, which is like the modulo function (the % operator in C), that gives you the remainder after doing integer division.  If the head of the snake crosses over the tail, we penalize the user by truncating the snake to where it was crossed. The `rem` function is the same as modulo operator in C (`%`).

```
	//  take the current dir and calculate the new position of the snake head
	var newx ⇐ rem(snake[1].x + dir.x, ncells.x)
	var newy ⇐ rem(snake[1].y + dir.y, ncells.y)

	//  if the snake crosses over its tail, then penalize
	loop array:snake index:i
		//  future optimize:   if newpos == snake[i]
		if (newx == snake[i].x) and (newy == snake[i].y)
			//  we stepped on our tail, truncate to that length-1
			sound_play(BEEP)
			maxlen ⇐ i - 1
			limit_length
			exit


	//  snake gets longer by inserting a new element at the head, renumbering later ones
	insert { x:newx y:newy } ===> snake[1]
```

If the new position of the head of the snake matches the apple position, then we grow the snake one segment. If we aren't eating an apple, then as we moved one cell over, we have to subtract the cell we just added.

```
	//  if the new position of the head matches the apple increase the limit 
	if (newx == apple.x) and (newy == apple.y)
		//  eat the apple and let the snake grow one cell
		sound_play(CRUNCH)
		inc maxlen
		longest ⇐ max(maxlen, longest)  -- update our high score
		random_apple  --  move the apple
	else
		//  if the snake did not hit the apple, then it may have grown past our limit
		limit_length
```

The top level drawing block is always called `main_draw`. It is called after the one-time startup function `main_init` has been called. We fill the screen background, then draw the snake at its current position, and the apple. 

```
====================
draw main_draw
====================
	//  any time the snake or apple changes, this function will automatically be called
	var color : color
	var box : a_rect
	
	draw_rect(b.box, fill:BLACK)  -- board background

	//  draw snake as an array of boxes
	loop array:snake index:i
		box <=== solve_rect(left:snake[i].x*spacing.x, top:snake[i].y*spacing.y, width:cellsize.x, height:cellsize.y)

		//  alternate colors on the snake so it is easier to detect movement
		color ⇐ if is_odd(i) then LIME_GREEN else LAWN_GREEN

		if i == 1  
			//  head of the snake has a border, and is rounded more 
			draw_rect(box, fill:color, corner:cellsize.x*0.20, color:DARK_GREEN, thick:cellsize.x*0.10)
		else
			//  body snake cells have no border, only slightly rounded
			draw_rect(box, fill:color, corner:cellsize.x*0.10)
	//..end snake loop

	//  draw the apple
	box <=== solve_rect(left:apple.x*spacing.x, top:apple.y*spacing.y, width:cellsize.x, height:cellsize.y)
	draw_oval (box, fill:CRIMSON)
```

superimpose the score on top of the playing surface, by using only 40% opacity.

```
	//  draw the current and high score
	var boxheight ⇐ min(b.box.height, b.box.width)/8
	var ss : str ⇐ "{maxlen}     high:{longest}"
	box <=== solve_rect(basis:b.box, pin:2, height:boxheight)
	draw_str (box, ss, size:boxheight*0.85, opacity:0.4, bold:Y, color:WHITE)
```

Since Beads can output to mobile devices which most of the time lack a keyboard, there are some directional arrows drawn if needed (a soft keyboard).

```
	//  if this is a full_screen device, draw the soft keyboard
	if runtime.full_screen
		//  a fullscreen device like a cellphone likely won't have a physical keyboard
		//  so in order to control the snake draw a soft keyboard
		box <=== solve_rect(basis:b.box, pin:8, height:b.box.width*0.7)  --  area at bottom of screen
		layer area:box opacity:0.25
			soft_keyboard  -- overlay the soft keyboard
```

After each drawing block, you can specify code that handles events related to that object, these tracking blocks can specify the kind of event they are focused on (`EV_KEYBOARD` and `EV_RESIZE` are two examples). By default if you don't specify a return value, it will return `Y` which absorbs the event and no other block will get the event. 

```
--------------------
track EV_KEYBOARD
	//  a track block has an implied record e containing event data
	do_key(e.keycode)
--------------------
track EV_RESIZE
	//  called at startup after main_init, before main_draw is called
	//  also called if user resizes the window
	//  if we can we would like 10 cells, but don't make them larger than 42 pt
	var targsize ⇐ min(min(b.box.width, b.box.height)*0.1, 42 pt)

	ncells.x ⇐ round_down(b.box.width  / targsize)
	ncells.y ⇐ round_down(b.box.height / targsize)

	//  now calculate a cellsize so that the entire screen is used up
	//  this will result in fractional pixel cell sizes, but that is okay
	spacing.x ⇐ b.box.width  / ncells.x
	spacing.y ⇐ b.box.height / ncells.y

	//  calculate the net size after subtracting a border
	cellsize.x ⇐ spacing.x*0.85
	cellsize.y ⇐ spacing.y*0.85

	//  since hits resize event could happen mid-game, 
	//  we may have just shrunk the playing field, we must move any snake cells outside range
	//  note that snake cell coordinates are 0-based to make it easier to draw
	var limitx ⇐ ncells.x-1
	var limity ⇐ ncells.y-1
	loop array:snake index:i
		snake[i].x ⇐ min(snake[i].x, limitx)
		snake[i].y ⇐ min(snake[i].y, limity)

	//  also check the apple
	apple.x ⇐ min(apple.x, limitx)
	apple.y ⇐ min(apple.y, limity)
```

The soft keyboard uses a 3x3 grid of cells, of which we only draw into 5 of them (directional arrows plus a pause button). A code block of type `table` allows you to specify the horizontal columns (the section called `horz`), the vertical columns, and how to draw each cell in the grid.  Inside the `horz` and `vert` sections, you are specifying whether to skip a column or add a data column. The measurements can be in points, picas, pixels or aliquots, where an aliquot is a proportional amount of space. In the case of aliquots you add up the total sum of the aliquots, and then each slice gets its fraction of the total space passed in from the calling block. By using a proportional system, we get a nice looking arrangement for a huge range of screen shapes and sizes. 

```
====================
table soft_keyboard
====================
	//  set up a 3x3 grid, we only draw into 5 slots
	horz slice
		skip 20 al
		add 80 al 
		skip 10 al
		add 80 al 
		skip 10 al
		add 80 al 
		skip 20 al
	vert slice
		skip 20 al
		add 80 al 
		skip 10 al
		add 80 al 
		skip 10 al
		add 80 al 
		skip 20 al
```

The `cell` section is where we describe how to draw each cell inside the grid. There is an implied set of variables that automatically defined and set by the runtime system, that give you the `cell_box`, the bounding box of the cell in question, the `cell_id` which is the XY coordinate of the cell in terms of logical columns and rows. The `cell_cum` variable holds the cumulative number of the cell, starting at 1.

```		
	cell
		//  implied vars: b.box, b.cell_seq, b.cell.x/y, b.cell_id.x/y
		//  the default sequence ordering is LRTB
		var cc ⇐ ""
		var size ⇐ b.box.height*0.7  -- default size for buttons
		case b.cell_seq
		| 2  
			cc ⇐ "\u25B2" --  upward triangle
		| 4
			cc ⇐ "\u25C0" --  left triangle
		| 5
			cc ⇐ "PAUSE"
			size ⇐ b.box.height*0.3 --  make pause text smaller
		| 6
			cc ⇐ "\u25B6"  --  right triangle
		| 8
			cc ⇐ "\u25BC" --  down triangle
		if cc <> ""
			draw_rect(b.box, fill:#714900, corner:b.box.width*0.2)  --  was color 684300
			draw_str(b.box, cc, color:BLACK, size:size)
-----------------------
track EV_TAP
	//  if we tap on a cell that is active simulate a keyboard command
	case b.cell_seq
	| 2 
		do_key(KEYCODE_UP)
	| 4
		do_key(KEYCODE_LEFT)
	| 5
		do_key(KEYCODE_SPACE)
	| 6
		do_key(KEYCODE_RIGHT)
	| 8
		do_key(KEYCODE_DOWN)
	//  ignore other cell clicks
```

The `do_key` function is used by the touch screen versions to simulate a keypress.

```
====================
calc do_key (
	code : num -- the keycode to process
	) 
====================
	case code
	| KEYCODE_LEFT
		//  go west
		append { x:-1, y:0 } ===> queue 
		paused ⇐ N  --  resume game

	| KEYCODE_RIGHT
		// go east
		append { x:+1, y:0 } ===> queue 
		paused ⇐ N  --  resume game

	| KEYCODE_UP
		//  go north
		append { x:0, y:-1 } ===> queue 
		paused ⇐ N  --  resume game

	| KEYCODE_DOWN
		//  go south
		append { x:0, y:+1 } ===> queue 
		paused ⇐ N  --  resume game

	| KEYCODE_SPACE
		toggle paused
```

This function picks a nice place for the apple. We don't want to place an apple where the snake head is, because that is confusing.

```
====================
calc random_apple -- find a random spot for the apple
====================
	// note that we might pick a spot inside the snake, but it only counts as eaten if the head moves onto the apple
	//  but don't pick a spot that is on top of the snake head
	loop until: apple.x <> snake[1].x or apple.y <> snake[1].y  
		apple.x ⇐ random_int(0, ncells.x - 1)
		apple.y ⇐ random_int(0, ncells.y - 1) 

```

This funtion is used to limit the length of the snake to the current limit. While the length of the snake is above our maximum length, we chop off the last cell of the snake.

```
====================
calc limit_length -- shorten the snake if necessary to stay within limit of maxlen
====================
	loop while:tree_count(snake) > maxlen
		//  drop the last cell in the snake
		clear snake[tree_hi(snake)]
```
