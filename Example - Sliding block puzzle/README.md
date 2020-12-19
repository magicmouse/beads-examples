## Example - Sliding block puzzle


Here is a screenshot of our project:

![screenshot](http://beadslang.com/projects/sliding_puzzle/puzzle.gif)


The whole program can be [run here](http://beadslang.com/projects/sliding_puzzle/puzzle.html)


##### Program difficulty: Simple

This simple project is a simulation of the classic 4x4 sliding block puzzle. 

#### Step 1 -  import assets

Here we import the sound effects we are going to use later, and set up constants that determine the size of the grid.

```
assets local:"./art/"
	file:"click.mp3" label:CLICK
	file:"whoosh.mp3" label:WHOOSH

const
	TRACE = Y	//  show extra tracing

	CELLSIZE = 50
	GAP = 4
	CORNER = 3
	BORDER = 1
	TOTSIZE = 4*CELLSIZE + 5*GAP
	OPACITY = 0.5
```

#### Step 2 -  define the data structures

This project has a trivial data structure; we use a simple 1-dimensional array to store the 1..16 cells of the 4 x 4 grid. We store the number of the cell, and the 0 cell means "empty" which is how the physical puzzle works, by having 1 empty cell.

So that we can animate nicely the moving piece, we remember the 16 rectangles' global coordinates so we can nicely animate.

```
var
	board : array of num	//  draw tiles as a one-1 array

	//  data structure used during dragging
	drag : record
		active // dragging tile index  U means not dragging
		deltax  // offset of dragged tile 
		deltay  // offset of dragged tile
		mouse_gstart : a_xy  // global coord of where mouse started the drag
		gcorners : array of a_xy  // global coord of drawn cells, indexed by seq
```

#### Step 3 -  initialize the data structures

The `main_init` function is called once at the beginning of every program. Here we are setting the numbers of the grid, setting up the puzzle.  A future improvement might be to create some randomly scambled version of the board.

```
calc main_init  -- one time init function
	board <=== [1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 0]
```

#### Step 4 -  build the main drawing function

The `main_draw` function is used to draw the entire screen. In this case we fill with a background color, and then create a subset of the screen for the board. Since we are going to drag around a sprite on top of the board, we create an animation layer on top using the `layer` command.


```
draw main_draw  --  main draw function
	draw_rect(fill:SADDLE_BROWN)

	//  draw the board in the middle of the screen, centered at a fixed size
	var r <=== solve_rect(basis:bb, pin:5, width:TOTSIZE pt, height:TOTSIZE pt)
	layer area:r d_board()
	
	//  during dragging we will draw a moving tile in this layer
	//  having it be a huge area means we can move outside the board area without clipping
	//  note that overlay layers must stay put, else the main_draw will be called repeatedly
	//  we need stability so that the tracking inside d_board is good.
	layer area:bb d_moving_tile


```
#### Step 5 -  draw the board

The playing board is a 4 x 4 grid of cells. When the board is at rest, we draw 15 cells (skipping the 16th cell which has the number of 0.  During a drag operation we don't draw the number in the cell, so that the sprite can take over that number.

```
grid d_board order:LRTB  -- draw the tiles in a 4x4 grid
	horz slice
		skip GAP pt
		loop reps:4
			add CELLSIZE pt
			skip GAP pt

	vert slice
		skip GAP pt
		loop reps:4
			add CELLSIZE pt
			skip GAP pt

	under
		draw_rect(fill:KHAKI)

	cell
		//  remember the coords of the cells, stdlib doesn't have have a function for this yet
		drag.gcorners[b.cell_seq] <=== local_to_global(x:bb.left, y:bb.top)

		draw_rect(fill:GRAY2, thick:BORDER pt, opacity:OPACITY, pos:0, corner:CORNER pt)

		//  skip drawing the tile number if it is the one being dragged, or if it is the empty cell (0)
		if b.cell_seq <> drag.active and board[b.cell_seq] <> 0
			//log "drawing cell interior seq={b.cell_seq}, active={drag.active}" on:TRACE
			draw_str("{board[b.cell_seq]}", size:0.5, bold:Y) //,opacity:OPACITY)
```
#### Step 5 -  draw the moving tile when dragging

During a drag of a cell, we need to draw the overlay layer, which has one cell drawn. We saved the global coordinates of each cell in our `drag` record, so we just draw a red cell.

```
draw d_moving_tile  --  draw the moving tile in the overlay layer
	if drag.active <> U
		//  we are dragging a cell around

		//  we gotta calc the global coord of where the cell should be
		var r <=== solve_rect(left:drag.gcorners[drag.active].x+drag.deltax, top:drag.gcorners[drag.active].y+drag.deltay, width:CELLSIZE pt, height:CELLSIZE pt)
		log "drawing overlay at {r}" on:TRACE

		draw_rect(box:r, fill:RED, thick:BORDER pt, pos:0, corner:CORNER pt)
		draw_str("{board[drag.active]}", box:r, size:0.55, color:WHITE, bold:Y)	
```

#### Step 6 -  track the drag events

When the user begins to drag, we handle the `EV_DRAG_BEGIN` event, and remember the global coord where we started.  Then during the `EV_DRAG_MOVE` events, we can calculate how much we have moved.  To force the movement to be only vertical or horizontal, whichever movement is the most moved, we set the other to 0.  In the `EV_DRAG_END` we check if this was a valid move, and if so, then swap the two cell's numbers. Otherwise we play a sound and let the user know it was a bad move.


```
track
	//  note: inside a DRAG events, the bb is that of the entire grid
	case e.evkind
	| EV_DRAG_BEGIN
		//  user is starting a drag operation
		//  we don't let you move the empty square, or a dead area between the cells
		if board[b.cell_seq] > 0
			//  we allow you to try and move any cell
			//  but we could restrict it to cells adjacent to the empty cell
			drag.active = b.cell_seq			
			drag.deltax = 0
			drag.deltay = 0
			drag.mouse_gstart.x = e.global_x
			drag.mouse_gstart.y = e.global_y
			log "EV_DRAG_BEGIN"	on:TRACE
			return Y

	| EV_DRAG_MOVE
		//  user is moving the mouse
		if drag.active <> U
			//  recalc the delta
			drag.deltax = e.global_x - drag.mouse_gstart.x
			drag.deltay = e.global_y - drag.mouse_gstart.y

			//  since the sliding block can only move vertically or horz, zero out the smaller movement
			if abs(drag.deltax) > abs(drag.deltay)
				drag.deltay = 0
			else
				drag.deltax = 0

			log "EV_DRAG_MOVE, cell={b.cell_seq}, dx={drag.deltax}, dy={drag.deltay}" on:TRACE
			return Y

	| EV_DRAG_END
		//  user is releasing the mouse
		if drag.active <> U
			log "EV_DRAG_END, cell={b.cell_seq}" on:TRACE

			//  we can only swap if we moved onto an adjacent cell
			// and if that cell was empty
			if is_numeric(b.cell_seq) and is_adjacent(b.cell_seq, drag.active) and board[b.cell_seq] == 0
				//  successful move
				sound_play(CLICK)
				swap board[drag.active] <=> board[b.cell_seq]
			else
				//  bad move, warn user an snap back 
				sound_play(WHOOSH)

			drag.active = U
			return Y

	//  we didn't use the event
	return N
```

#### Step 7 -  utility function 

We have a helper function that handles small things like determining if two cells are adjacent.

```
calc is_adjacent ( -- see if two cells are adjacent
	cell1
	cell2
	) : yesno  // return Y if the two cells are adjacent

	//  conver the simple cell number into column and row
	var col1 = rem(cell1, 4, one:Y)
	var row1 = idiv(cell1, 4, one:Y)
	var col2 = rem(cell2, 4, one:Y) 
	var row2 = idiv(cell2, 4, one:Y)

	var dx = abs(col1 - col2)
	var dy = abs(row1 - row2)

	log "is_adjacent, dx={dx}, dy={dy}" on:TRACE

	//  the to be adjacent, the cell has to be up or down, but not both, and only 1 square away
	return (dx == 0 and dy == 1) or (dx == 1 and dy == 0)
```
