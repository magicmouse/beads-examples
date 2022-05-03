### Example - Liquid control widget

Program difficulty: Simple

This simple example project draws a fun liquid control that could be used for all sorts of purposes.  It shows how you can make the control with or without an operable input adjustment draggable arrow

![sketch](http://beadslang.com/projects/temperature2/screenshot4_big.gif)

You can [run the program](http://beadslang.com/projects/temperature2/temperature2.html)


#### Step 1 - Design the key data structures

Each tube we draw is going to have a color for the liquid inside, and a fullness value which ranges from 0 to 1.  Since we are adjusting some of the tubes automatically via a timer, we will put in a phase so we can offset the sine wave.

During the drawing phase we will remember key screen coordinates which will be needed during the tracking code execution.

```
record a_tube
	c_liquid : color
	fullness : num  //  height from 0..1
	phase    : Angle //  angle offset for sine function
	----- transient variables used for tracking
	thumb_y  
	thumb_top
	thumb_bot
```	

We then put in some reasonable defaults for the tubes:

```
var
	tubes : array of a_tube <=== [<
		fullness   phase    c_liquid
		0.10	0 deg		#e7b409
		0.10	10 deg		#E96413
		0.50	30 deg		#ec1241
		0.75	40 deg		#af1b76
		1		9 deg		#a541ac  
		>]
```

For tracking we will hae a few more variables we need, such as where the mouse was clicked at the start of the drag, so we can see how much we moved.  For the timer we keep a running value of the sine angle.

```
	tube_ctl : record  // transient values related to tracking the mouse and varying the data
		sine_angle  : Angle  // angle so we can vary values
		tracking_tx : num  //  which tube are we tracking?
		
		//  transient values used during tracking of the thumb
		drag_starty : num  //  Y coordinate of of where drag started
		drag_startf : num  //  fullness when we started the drag
```


#### Step 2 - initialize the program

The main_init code is executed once at the start of the program.
Here we set the starting angle to 0, and fire off the timer. Note that the first callback will happen immediately as we didn't specify a delay.

```
calc main_init
	tube_ctl.sine_angle = 0 deg
	loom_timer(update_tubes, reps:200, interval:0.3 sec)

```

On each timer callback, we will update our tubes:

```
calc update_tubes
	log "update tubes" on:TRACING
	15 deg +=> tube_ctl.sine_angle 
	loop across:tubes index:tx
		if tx <= N_ADJUSTABLE
			continue
		//  this is one of the automatic tracked variables
		tubes[tx].fullness = abs(sin(tube_ctl.sine_angle + tubes[tx].phase))
		log "  tube[{tx}]={tubes[tx].fullness}" on:TRACING
```



#### Step 3 - lay out the main screen by vertically slicing the total window

We skip a small margin at the top
then draw the program title "Tubes"
then we add the tube area
and a small margin at the bottom

```
vert slice main_draw
	background fill:C_DEAD
	skip 14 pt
	add 30 pt draw_str("Tubes", size:0.75, bold:Y, font:"Poppins, sans-serif")
	skip 14 pt
	add 10 al d_tubes
	skip 2 al
	skip 44 pt
```

The tube area is a horizontal split, and for the first 2 tubes we include the thumb control so you can adjust them.

```
==========================
horz slice d_tubes
	skip 30 al
	loop across:tubes index:tx
		if tx > 1
			skip 3 al
		if tx <= N_ADJUSTABLE
			//  only put a thumb for the first tube
			add 35 pt order:99 d_tube_thumb(tx)  //  note: must draw this after the tube!
		else
			skip 35 pt

		skip 2 pt	
		add 8 al d_tube(tx)
	skip 30 al
```

#### Step 4 - draw a single tube

The tube is a fairly complex set of rounded rectangles and ovals. We use the ability of the draw_rect function to support different radius in the X and Y directions. In this case we use a radius of half the width so that the bottom of rectangles forms an ellipse. We draw from the back to the front.

```
//  the bounding box is the same size as the entire tube, including the base
draw d_tube_thumb (
	tx
	)
	//var range_r <=== solve_rect(basis:bb, top:tubes[tx].thumb_top, bottom:tubes[tx].thumb_bot)
	//draw_rect(box:range_r, fill:GREEN, opacity:0.3)

	//  draw the triangle that has the Y coordinate equal to the center Y location of the fill ellipse
	var r <=== solve_rect(left:bb.left, width:bb.width, cy:tubes[tx].thumb_y, height:30 pt)
	
	var t_right:array of a_xy = [ {x:r.left,y:r.top}, {x:r.left,y:r.top+r.height}, {x:r.left+r.width,y:r.top+r.height*0.5}]
	var c_arrow : color = MEDIUM_VIOLET_RED if tube_ctl.tracking_tx == tx else MEDIUM_SEA_GREEN
	draw_polygon(t_right, fill:c_arrow)
-------------
track
	log "tracking evkind={e.evkind}" on:TRACING
	case e.evkind
	| EV_DRAG_BEGIN
		tube_ctl.drag_starty = e.global_y
		tube_ctl.drag_startf = tubes[tx].fullness
		tube_ctl.tracking_tx = tx
		cursor_set(CURS_HAND)

	| EV_DRAG_MOVE
		//  calculate the new fullness based on the mouse
		var delta_mouse = tube_ctl.drag_starty - e.global_y  //  moving downward will be negative

		//  use a gear reduction so that it takes 3 pixels to move 2 pixel of height so it is very precise.
		var tot_range = tubes[tx].thumb_bot - tubes[tx].thumb_top
		var delta = (delta_mouse/1.5)/tot_range  // how much we moved relative to start

		//  in the units we are moving, adjust the temperature change, relative to the 
		//  starting temp in the units we are using, such that the entire range of movement
		//  will yield a change equal to the difference between top and bot temp in that unit
		var newval = clamp(0, tube_ctl.drag_startf + delta, 1)

		log "delta_mouse={delta_mouse}, range={tot_range}, delta={delta}, newval={to_str(newval, dig:2)}" on:TRACING
		tubes[tx].fullness = newval
		return Y
		
	| EV_DRAG_END
		cursor_set(CURS_ARROW)
		tube_ctl.tracking_tx = U

	else
		//  wrong kind of event, don't absorb
		return N

	//  absorb the event
	return Y
```
#### Step 5 - draw and track the thumb

This is the hardest part of the program. We take the amount the mouse moves, and reduce it by a scaling factor so as to achieve a gear reduction, so the user moves 150 pixels to move the thumb 100 pixels, which makes the movements more precise.

During the drawing we had to remember 3 values for each tube so that we can track the thumb correctly. If you save just the right information, then the tracking code is much simpler.

```
//  the bounding box is the same size as the entire tube, including the base
draw d_tube_thumb (
	tx
	)
	//var range_r <=== solve_rect(basis:bb, top:tubes[tx].thumb_top, bottom:tubes[tx].thumb_bot)
	//draw_rect(box:range_r, fill:GREEN, opacity:0.3)

	//  draw the triangle that has the Y coordinate equal to the center Y location of the fill ellipse
	var r <=== solve_rect(left:bb.left, width:bb.width, cy:tubes[tx].thumb_y, height:30 pt)
	
	var t_right:array of a_xy = [ {x:r.left,y:r.top}, {x:r.left,y:r.top+r.height}, {x:r.left+r.width,y:r.top+r.height*0.5}]
	var c_arrow : color = MEDIUM_VIOLET_RED if tube_ctl.tracking_tx == tx else MEDIUM_SEA_GREEN
	draw_polygon(t_right, fill:c_arrow)
-------------
track
	log "tracking evkind={e.evkind}" on:TRACING
	case e.evkind
	| EV_DRAG_BEGIN
		tube_ctl.drag_starty = e.global_y
		tube_ctl.drag_startf = tubes[tx].fullness
		tube_ctl.tracking_tx = tx
		cursor_set(CURS_HAND)

	| EV_DRAG_MOVE
		//  calculate the new fullness based on the mouse
		var delta_mouse = tube_ctl.drag_starty - e.global_y  //  moving downward will be negative

		//  use a gear reduction so that it takes 3 pixels to move 2 pixel of height so it is very precise.
		var tot_range = tubes[tx].thumb_bot - tubes[tx].thumb_top
		var delta = (delta_mouse/1.5)/tot_range  // how much we moved relative to start

		//  in the units we are moving, adjust the temperature change, relative to the 
		//  starting temp in the units we are using, such that the entire range of movement
		//  will yield a change equal to the difference between top and bot temp in that unit
		var newval = clamp(0, tube_ctl.drag_startf + delta, 1)

		log "delta_mouse={delta_mouse}, range={tot_range}, delta={delta}, newval={to_str(newval, dig:2)}" on:TRACING
		tubes[tx].fullness = newval
		return Y
		
	| EV_DRAG_END
		cursor_set(CURS_ARROW)
		tube_ctl.tracking_tx = U

	else
		//  wrong kind of event, don't absorb
		return N

	//  absorb the event
	return Y
```



