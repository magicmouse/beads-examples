## Example / A wristwatch simulation

This example of the Beads language will draw a simulation of a wristwatch. It is similar to the clock example, but shows how much prettier a program can be when it uses bitmap resources instead of vector artwork. With apologies to Patek Philippe.

![watch example](http://magicmouse.com/beads/examples/watch_example_animated.gif)


The first line of each Beads source file must be the `#beads` declaration that states the name of the module, and the level of the language.

```
#beads level 1 module watch
```

You have the ability to embed multimedia resources from the local file system for packaging into the final application. You can import sets of resources by specifying a folder, with a matching pattern and naming convention. In this case we only need 5 bitmap resources, but you can import fonts, sounds, videos, and still images. The label of the resource is the name that will be used to refer to it later in the program.

```
resource
	file: "/code/ClockPatek/art/patek_cleaned_750v.jpg" label: watch_background
	file: "/code/ClockPatek/art/hand_day.png" label: day_hand
	file: "/code/ClockPatek/art/hand_min.png" label: minute_hand
	file: "/code/ClockPatek/art/hand_hour.png" label: hour_hand
	file: "/code/ClockPatek/art/hand_sec.png" label: second_hand
```

Many simple program will have just one global state variable. In this case we declare `g` as a record of type `a_date`, which is defined in the standard library. It holds the parts of a date/time record.

```
var g : a_date //  our global state variable
```

We declare some constants that will be used later. In the wristwatch simulation, we have a day display that shows 31 days, and these constants make the program more readable.

```
const
	DEG_PER_DAY  = 360/31
	DEG_PER_SEC  = 360/60  // also used for hour
	DEG_PER_HOUR = 360/12

	CENTER_X = 485  // center coordinates in background
	CENTER_Y = 380
```

The runtime will call the `main_init` function to perform one-time initialization. This function sets up a repeating callback to the `do_tick` function, at an interval of 1 per second.

```
-----------------
calc main_init `main init procedure`
-----------------
	//  set up a callback to 'do_tick' every second, starting immediately
	loom_callback (do_tick, delay:0, interval:1, reps:10000)
```

The do_tick function will be called once per second, and it will get the date from the computer, and copy it into the variable `g`. The operator with `===>` means copy an array (or subtree) of values from the left to the right. The `merge` operation means copy the values form the source, and merge them into the destination. 

```
-----------------
calc do_tick `is called once a second`
-----------------
	//  set our state variable g which will cause redraw to happen automatically
	merge now_date() ===> g 
```

By default the sytem will call the `main_draw` function to draw the screen. The Beads drawing system automatically determines by looking at the possible code paths what variables could be referenced, and if any of those varaibles changes, then the draw block is automatically scheduled for redraw. Eliminating redraw errors is a big feature of Beads.

In this simple example, the drawing function will first draw the bitmap image of the background. Each draw block has an automatically set record `b` that contains the critical information about the block. In this case we use the `b.box` field, which is the bounding box of the area.  

Since Beads has physical units of measurement, and `Angle` is a built-in unit family containing unit types of Radian and Degree (abbreviated `deg`), you can specify angles in whatever units are more convenient. No need to remember what units the library function operates in (which varies among languages). All of the commonly used physical units are built into Beads such as length, area, mass, energy, etc.

```	
----------------
draw main_draw `main drawing procedure` 
----------------
	draw_image (watch_background, box:b.box)
```

There are 4 moving parts drawn in the watch simulation: the day of the month, hour, minute and second hands. You specify the origin point in the bitmap, and then specify the xy coordinate of where that attachment point should be drawn. We have the hour hand gently moving but have the minute and second hands jumping.

```
	var angle = g.date_day*DEG_PER_DAY - 90  // day angle
	draw_image (day_hand, x:486, y:512, originx:11, originy:11, angle:angle deg)

	angle = (g.date_hour + g.date_minute/60)*DEG_PER_HOUR - 90  //  hour angle
	draw_image (hour_hand, x:CENTER_X, y:CENTER_Y, originx:11, originy:18, angle:angle deg)
	
	angle = g.date_minute*DEG_PER_SEC - 90  //  minute angle
	draw_image (minute_hand, x:CENTER_X, y:CENTER_Y, originx:11, originy:12, angle:angle deg)

	angle = g.date_second*DEG_PER_SEC - 90  // sec angle
	draw_image (second_hand, x:CENTER_X, y:CENTER_Y, originx:18, originy:17, angle:angle deg)
```
