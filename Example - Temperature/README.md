### Example - Temperature control

Program difficulty: Extremely simple

This simple example project draws a temperature control that shows the temp in both degrees Centigrade and Fahrenheit. If you move one control it drags the other along. This shows the automatic refresh capabilities of the Beads runtime, where any render that depends on a quantity that changes is re-rendered automatically.

#### Step 1 - The sketch

To build this product, you start with a sketch of the project

![sketch](http://beadslang.com/projects/temperature/sketch.jpg)

We will draw a label across the top. Then there are 2 temperature controls. Each control has a right pointing triangle thumb control, a gradient filled bar, and then a scale to the right showing max and min temperature for that control.

The sizes vertically and horizontally are not pixel or point dimensions, but aliquots, which is a relative share based on the sum total. So if the total is 1000 aliquots, then 200 aliquots is 20% or 1/5th of the total. this allows you to more flexibly tweak the relative sizes without having to constantly adjust sizes. It also makes the final product resolution independent, which means it will look good across a huge range of device sizes and screen densities.

#### Step 2 - design the data structures

This project has a trivial data structure; we store the current temperature. To make allowances for a future version that lets you set both min and max temperature, as many heating/cooling systems do, we will also store the lo setting, however it isn't used in the current version of the program. We leave it as an exercise to the reader to implement the second triangle slider control.  Since Beads has all the physical units implemented as a primitve data type, we will take advantage of the Temperature data type, which stores values in degrees Kelvin, but can be freely converted to Celsius or Fahrenheit.

```
var g : record
	hi_set : Temperature  // target temperature
	lo_set : Temperature  //  reserved for future
```

We are going to need to store the starting point of the mouse when we started tracking. This is so we can smoothly move the control with no rounding errors. We will use these variables during the mouse tracking of the triangle:

```
var	
	//  variables used during tracking
	g_drag_starty
	g_drag_temp : Temperature
```

The first chunk of code that is executed is called `main_init`, and for the purposes of this simulation, we will assign a default temperature. Note that the data type of Temperature has unit types of degF, degC, and degK.


```
calc main_init
	//  set our target temperature
	g.hi_set = 70 degF
	g.lo_set = 60 degF  
```

Now we start with the main drawing routine, which is always called `main_draw`. In this block we will slice the screen vertically into slices per our sketch, with a gap, the temperature label, a gap, the control area, then another gap

```
vert slice main_draw
	draw_rect(b.box, fill:DARK_SLATE_GRAY)

	skip 10 al
	add 20 al
		draw_str(b.box, "Temperature Control", size:0.7, color:GHOST_WHITE)
	skip 20 al
	add 100 al d_dual
	skip 40 al
```

The `d_dual` subarea has the dual controls. In this case we are subdividing the area horizontally into slices. It is very common in Beads to alternate between horizontal and vertical slices to get to subsets that you want.

```
horz slice d_dual
	skip 200 al
	add 200 al d_therm(LO_C, HI_C, enum degC)
	skip 60 al
	add 200 al d_therm(LO_F, HI_F, enum degF)
	skip 200 al
```
The thermometer control `d_therm` is split again horizontally into the triangle area, the bar, and the scale:

```
horz slice d_therm (  --- the thermometer control has arrows, bar, and scale
	lo
	hi
	units  // degF or degC
	)
	add 70 al d_arrow(lo, hi, units)
	add 30 al
		draw_rect(b.box, grad:GRAD1, corner:2 pt)
	add 70 al d_scale(lo, hi, units)
```

The scale to the right of the bar is just 3 vertical slices:

```
vert slice d_scale(  --- draw the temperature scale to the right like 10 degF
	lo
	hi
	units
	)
	add 10 al d_scale2(hi, units)
	skip 100 al
	add 10 al d_scale2(lo, units)
```

To share code we use a tiny subroutine that draws the scale given a numeric value, and the units that we want to see it in:

```
draw d_scale2 (  --- each scale mark
	value
	units
	)
	var suffix : str = " °F" if units == enum degF else " °C"
	draw_str(b.box, "{value}{suffix}", size:0.75, color:LIGHT_BLUE, just:LEFT, indent:4 pt)
```
The arrow side is where we draw the current temperature and the triangle. 

```
draw d_arrow (  --- controller arrow
	lo
	hi
	units 
	)
	var val = to_unit(g.hi_set, units) //  value in degF or degC
	var y = interpolate(val, lo, hi, b.box.height, 0, clamp:Y)
	log "val={val}, lo={lo}, hi={hi}, height={b.box.height}, y={y}" on:TRACING
	var r : a_rect <=== solve_rect(cy:y, left:0, width:b.box.width, height:b.box.height/12)
	draw_str(r, to_str(val, digits:1) & " ▶", size:0.75, color:CRIMSON, just:RIGHT, indent: 1 pt)
```

We now hit the key routine of the product, which is the tracking function that is associated with the arrow. There are 2 instances of the tracking function, one for each control, all specified by the parameters. Inside a tracking function, there is an implied variable `e : a_event` that holds the event information. In this case we are going to change the cursor as we move into the tracking region, and once we start a drag operation we will calculate how much the mouse has moved, and tweak the slider. To show a very nice touch, we are going to gear down the mouse movement, so that 30 pixels only yields 10 pixels of effective movement. In this way it will allow the user to specify to the tenth of a degree the setting. In many controls that users drag, it is very hard to hit a specific value when 1:1 tracking is employed, so this gives the user a more precise feel even if they have shaky hands.

On the DRAG_BEGIN event we are remembering the global coordinate of where we started. We also want to know the old temperature so we can make all measurements relative to it.

```
track
	case e.evkind
	| EV_HOVER
		//  we let the drag operation start anywhere in the arrow area
		//  in future versions we could tighten this
		cursor_set(CURS_FINGER)

	| EV_DRAG_BEGIN
		g_drag_starty = e.global_y
		g_drag_temp = g.hi_set

	| EV_DRAG_MOVE
		//  calculate the new temperature
		//  make the scale move not by mouse tracking but with a gear reduction
		//  so it is very precise.
		var delta_mouse = g_drag_starty - e.global_y

		//  put a 3:1 gear ratio on the slider so it is more precise
		var delta = delta_mouse/3*(hi-lo)/b.box.height 
		//  in the units we are moving, adjust the temperature change, relative to the 
		//  starting temp in the units we are using, such that the entire range of movement
		//  will yield a change equal to the difference between top and bot temp in that unit
		var newval = clamp(to_unit(g_drag_temp, units) + delta, lo, hi)
		log "delta_mouse={delta_mouse}, range={hi-lo}, height={b.box.height}, delta={delta}, newval={to_str(newval, digits:1)}" on:TRACING
		g.hi_set = to_meas(newval, units)  // this will trigger refresh of arrows
		return Y
		
	| EV_DRAG_END
		cursor_set(CURS_ARROW)

	else
		//  wrong kind of event, don't absorb
		return N

	//  absorb the event
	return Y
```

There are some constants at the beginning of the program that set up the parameters we wish to use, and also to set up the gradient which is used to draw the bar.

```
eads level 1 program temperature  // a simple temperature control

//  this program lets you show two synchronized temperature sliders
//  whatever you set in one, the other tracks it.
//  this shows how you update the underlying model and then refresh is automatic

const
	TRACING = N

	//  the scale markings to the side of each bar
	LO_C = 5
	HI_C = 40
	
	LO_F = 40
	HI_F = 100

	//  the gradient going from orange to blue
	GRAD1 : a_gradient = { grad_shape:LINEAR_GRADIENT, grad_angle:GRAD_TO_BOTTOM, 
		grad_stops:[ { stop_pos:0, stop_color:ORANGE_RED },
				     { stop_pos:20, stop_color:ORANGE },
					 { stop_pos:60, stop_color:LIGHT_BLUE },
					 { stop_pos:100, stop_color:MEDIUM_BLUE }] }
```

The whole program can be seen in the examples as temperature.beads, and can be [run here](http://beadslang.com/projects/temperature/temperature.html)

Here is a screenshot of our project:

![screenshot](http://beadslang.com/projects/temperature/screenshot.png)
