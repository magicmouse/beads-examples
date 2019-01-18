## Example / A simple analog clock

Welcome to the Beads language. Please note that this document is in markdown format. To view a nicely rendered markdown file, you can use the free [MacDown program](https://github.com/MacDownApp/macdown/releases/download/v0.7.1/MacDown.app.zip) for macintosh, or you can use [Markdown Pad](http://markdownpad.com/download.html) for Windows.

This simple program will draw a clock on the screen, using a green circle with a dark green outline, and 3 hands for hour, minute, and second. This is among the shortest possible graphical programs one can imagine.


![clock example](http://magicmouse.com/beads/examples/clock_screenshot_anim.gif)

Beads is designed to generate Mac and Windows desktop programs, iOS apps, Android Apps *(via the Adobe AIR runtime)*, and websites *(via Javascript output)*. You can download the [executable version](http://magicmouse.com/beads/examples/Clock.air) of the clock program which will require Adobe AIR to run *(available free at Adobe.com)*

The first line of every Beads program must declare the level of the language. This allows future generations to take code from decades before and forward convert it automatically. Not being able to use previously debugged code is like burning books!

```
#beads level 1 module clock
```

Many Beads programs will have a single global mutable state variable. In the case of this clock program, the only state information we need to track can be accomodated in one of the built-in record types, which is `a_date`, defined in the standard library, and contains the fields: `date_hour, date_minute, date_second`.  We will update once a second this state variable by means of a timer callback, and the system will automatically calculate which drawing code needs to be executed. Because the drawing system is built into the Beads runtime, it is possiblefor the computer to automatically calculate refresh dependencies, and saves innumerable phantom bugs in interactive graphical programs. This is an invisible, but essential feature of Beads.   

```
var g : a_date	//  the current time as reported by system clock
```

After the declaration section of the program, you enter the function section, where you have have a set of function blocks, which are indented one level. There are several kinds of functions, depending on the purpose of the function. A function that performs only calculations is prefixed with `calc`. A block of code that draws on the screen is prefixed with `draw`. There are other kinds of blocks such as `grid`, `table, etc.
  
By default any module that has a block named `main_init`, that block will be called before any drawing occurs. In this block we set the time scale for the program so that we can see things run faster than normal. This is very useful for debugging timer based programs where waiting for some timed event like chimes at midnight to happen is tedious. In this case we speed up the time by a factor of 360 which means that in 10 seconds we span 10 hours. The time scale can be controlled both programmatically and in the user interface, so that you can also see things in slow motion, which is essential for debugging animations.  

In this function we set up a callback to the `do_tick` function, using a standard built-in function called `loom_callback`. The loom is a very fundamental concept in Beads. Each atomic event in the system, which could be an external event like a mouse click, a finger tap, an internet packet, a change to a state variable, or a refresh of the screen is logged like a Bead strung on a loom. Most of the time events originate from the user, but in this clock example we are setting up an infinite repeat callback to the `do_tick` function at an interval of 1 second.
 
```
calc main_init
	runtime.time_scale = 360  //  spin the clock 360x speed
	loom_callback(do_tick, interval:1, reps:INFINITY)
```

This is the callback function that is called once per second. All we do is call the standard library function `now_date` which returns the current computer time, and copy that record to the state variable `g`. Beads encourages the programmer to write their code in a left-to-right manner, so that it is easier to read. A single value assignment is  `a => b` which copies the single value of `a` into `b`. In this code block we are using the record copy operator `===>` which has a unicode synonym `⭆` to copy all the fields in the record returned by `now_date` into the variable `g`. All records are stored in Beads as a tree, which is the fundamental structure that subsumes concepts in other languages like lists, arrays, dictionaries, linked-lists, queues, sets, bags, etc.   


```
calc do_tick  // is called once a second
	now_date() ===> g
```

A block of code that is going to draw in an unstructured manner is prefixed with the keyword `draw`. By default the runtime system will use the `main_draw` block as the top-level draw block, which in turn draws all other blocks. In our case the `main_draw` function references the variable `g`, which implies that when `g` changes, then `main_draw` must be redrawn. This automatic redrawing by means of deduction based on accessing of dependent variables is a very powerful feature, and the more complex the program in terms of the number of graphical elements the more powerful it becomes. This type of deduction was first found in PROLOG from decades ago, and is also present in Excel, and i believe it is one of the fundamental reasons why Excel is the most used programming language in the world *(if you agree with me that the definition of a programming language is any system where you spend time debugging)*.

```
draw main_draw // main drawing procedure
```
Inside each draw block there is an implied drawing context variable called `b` that contains information about the block, like the bounding box in local coordinates which is a sub-field referenced by `b.box`. We fill the entire screen with a solid color of beige, using the rectangle drawing function `draw_rect`. There are the obvious functions to draw circles, ellipses, lines, etc. 

```
	draw_rect(b.box, color:BEIGE)
```

Whether we are running on a desktop or on a cellphone we want to draw our clock in a square area, so we now need to calculate the usable area of the screen, so we take 80% of the smaller of the total width and height to calculate the diameter of the clock.

```
	var diameter = 0.8*min(b.box.width, b.box.height)
```

It is an very common task in graphics programming to need to calculate a rectangle based on various constraints. In most API's like those of Apple and Microsoft, there are dozens of rectangle solving functions, but Beads rolls all these functions into one intelligent rectangle solving function called `solve_rect` which is part of the standard library, where you specify sufficient information for it to be able to solve for the resulting rectangle. In this case we start with a larger outer rectangle (which is used as the starting point (or `basis`), specify a pin point (using the Adobe Systems standard 9 point grid, where the top left corner is point 1, the center point is 5, etc.), a width and a height. The unique rectangle that meets those requirements is returned, and copied using the record copy operator, which in this case is being defined as the variable `area`. 

```
	var area : a_rect <=== solve_rect(basis:b.box, pin:5, width:diameter, height:diameter)
```

It is very common to want to draw into a rectangular subset of the current block, and the `layer` statement which is available inside a draw block allows you to take a subset rectangle, and apply a new coordinate system inside the area. In this case we are setting the `pin` point to 5 which has the effect of making the coordinate origin point (0,0) be located in the center of the rectangle. Beads automatically recalculates complex nested coordinate transformations, and allows the programmer to not have to think too much about this very trouble-prone area of graphics programming.

```
	layer area:area, pin:5
```

We now draw our clock background, which is a solid green circle

```
		draw_circle(x:0, y:0, diam:diameter, color:GREEN, stroke:DARK_GREEN, width:4 pt)
```

The block has an hour, minute and second hand. Each hour of time moves the hour hand 30 degrees. The line drawing function is flexible and you can specify the beginning and ending points or you can specify the starting point and an angle. Most of the drawing functions have many parameters so that instead of having 5 different line drawing functions you have just one flexible one, which reduces the memory load for the programmer. Even sophisticated programs can use only a few dozen total API functions. The main problem with modern systems is the vast number of API functions one must interact with. It is estimated that the full HTML/CSS/JS/MySQL/etc. stack requires over 10,000 pages of documentation to fully understand. Beads uses a minimal set of flexible functions to achieve similar results with the least amount of "human RAM" needed.

The angle parameter of the line drawing function is declared of type `Angle`, which is one of the 20 fundamental physical units built into Beads. Not only can Beads automatically convert between units of the same family, like meters, feet, inches, miles, etc. it carries the units at execution time. Mistakes in physical units of measurement is a very common mistake in programming and historically caused financial losses in the hundreds of millions of dollars. In some programming languages, angles are calculated in degrees, which is the commonly referred to unit of angle, but in mathematics one typically uses radians, which is a very awkward unit for humans to think in. By adding a unit suffix to a value, like `deg` or `rad` you can specify an angle in either unit of measurement. Beads is the first language to carry physical units around at runtime, so that if you multiply a length with another length you now have length to the second power (a unit of area), and the Beads compiler can check at compile time that your units are consistent in a calculation. Comparing exponents of units to check reasonableness of a calculation was invented by Fermat in the 1800's and is finally being incorporated into a programming language. 

Beads uses the same protected arithmetic so beloved in Excel, where a variable can be undefined `(U)` or in error (`ERR`). Beads makes every attempt to protect the programmer against unreproducible problems, which is by the far the most difficult aspect of programming. Many of the innovations of Beads are 'under the hood', and only by the absence of difficulties can one tell the difference between Beads and its predecessors.

```
		draw_line( x1:0, y1:0, angle:(g.date_hour + g.date_minute/60)*30 - 90 deg, len:diameter*0.30, color:BROWN, width:8 pt)  
		draw_line( x1:0, y1:0, angle:g.date_minute*6 - 90 deg, len:diameter*0.40, color:ORANGE, width:6 pt) 
		draw_line( x1:0, y1:0, angle:g.date_second*6 - 90 deg, len:diameter*0.45, color:BLUE, width:4 pt)
```

The complete clock programm as it would be typically written in a text editor:

````
#beads level 1 module clock

var g : a_date	//  the current time as reported by system clock

-----------------
calc main_init // main init procedure
-----------------
	//  speed up time
	runtime.time_scale = 360  //  move an hour in 10 seconds

	//  set up a never ending callback to 'do_tick' every second
	loom_callback(do_tick, delay:0, interval:1, reps:INFINITY)

-----------------
calc do_tick // is called once a second
-----------------
	//  set our state variable g which will cause redraw to happen automatically
	now_date() ===> g  // now_date() returns a_date
	
----------------
draw main_draw // main drawing procedure
----------------
	//  fill the screen with a color
	draw_rect(b.box, color:BEIGE)

	//  calculate the size of the clock box, by taking 80% of the smaller of the total width and height
	var diameter = 0.8*min(b.box.width, b.box.height)

	//  calculate a square centered on the screen
	var area : a_rect <=== solve_rect(basis:b.box, pin:5, width:diameter, height:diameter)
	
	//  indent from the total screen size, set coordinate origin at the middle of the box
	layer area:area, pin:5
		draw_circle(x:0, y:0, diam:diameter, color:GREEN, stroke:DARK_GREEN, width:4 pt)
		draw_line( x1:0, y1:0, angle:(g.date_hour + g.date_minute/60)*30 - 90 deg, len:diameter*0.30, color:BROWN, width:8 pt)
		draw_line( x1:0, y1:0, angle:g.date_minute*6 - 90 deg, len:diameter*0.40, color:ORANGE, width:6 pt)
		draw_line( x1:0, y1:0, angle:g.date_second*6 - 90 deg, len:diameter*0.45, color:BLUE, width:4 pt)
````
