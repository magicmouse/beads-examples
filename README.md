
## Programming examples

These are examples with specifications posted in our GitHub repository, and are included in the SDK which you can download at Beadslang.org 

Beads is not a minor rehash of Python or JS. It is a clean sheet design, carefully crafted to catch as many errors at compile time as possible so you spend less time debugging. These examples barely scratch the surface of the full range of Beads features, such as:

1. can run in reverse (AKA time-travel-debugging) 
2. automatic refresh of screen areas when the underlying model changes
3. protected arithmetic like Excel
4. units of measure like 3 m + 2 ft (even at runtime)
5. a proportional layout system that responds to size changes beautifully
6. greatly simplified regular expressions
7. a simple and flexible module system 
8. no make system needed for most projects

### Example: Realtime stock price graph


![screenshot](http://beadslang.com/projects/realtime_stock/hoody.gif)

This is an example of a client + server program, showing how you can build both the client and the server in Beads. To develop this app, you start by first coding it as a standalone program, with fake data, and once you have the drawing part working well, you split off the data generation part into the server module. In this example you connect to the server (running the emitted JS code under Node.JS), and it will transmit to the client the prices. [run here](http://beadslang.com/projects/realtime_stock/hoody_client.html). Note that the server has to be running for the client to be able to connect. We don't run the server 24/7, mention it on the Discord group to fire it up.

### Example: Conway's game of life

![screenshot](http://beadslang.com/projects/game_of_life/screenshot.gif)

This shows how short and simple programs can be when written in Beads. It is impossible to write a shorter version that performs the same function (this version auto-adjusts to the screen size).


### Example: Neat looking liquid slider

![screenshot](http://beadslang.com/projects/temperature2/screenshot.gif)

This is a rewrite of a CSS-mostly project from CodePen. Our version is interactive, and lets the user drag a control thumb to set the value, and it shows the dramatic difference between wrestling with the intricacies of CSS, and instead doing it in a straightforward imperative style that is much less tangled.

### Example: Recursive structures

This shows how you can build a simple tree structure with up/down expand/contract buttons.

![screenshot](http://beadslang.com/projects/recursive/screenshot.gif)

The disclosure triangle tree example can be [run here](http://beadslang.com/projects/recursive/cats.html)


### Example: Sliding block puzzle


![screenshot](http://beadslang.com/projects/sliding_puzzle/puzzle.gif)

The puzzle can be [run here](http://beadslang.com/projects/sliding_puzzle/puzzle.html)


### Example: Translation tool

This is the handy graphical interactive localization utility for Beads. It allows you to visit Google translate to get your translation started, and lets you keep track of your translation progress, add new languages, etc.

Beads has a wonderful localization methodology, that people will find user friend and convenient.

for a [video explanation of how to use it](https://youtu.be/xKQ9Uj8o_4w)

![screenshot](https://beadslang.com/examples/localize/screenshot.gif)


### Example: Dijkstra's pathfinder algorithm

This Beads language sample program runs a simulation of Dijkstra's famous pathfinding algorithm.

You draw a wall with the mouse (right click to erase wall cells), and then you press ENTER and let the simulation run. You can also press SPACEBAR to go one step at a time. 

![snake example](http://beadslang.com/apps/pathfinder/pathfinder.gif)

### Example: Temperature control

This is a simple temperature control which demonstrates the physical units of measurement in Beads, and how you can have a dual control and either one will update the model and refresh the other version of the control that uses the same data, all without locks or conflicts arising.

![screenshot](https://beadslang.com/projects/temperature/screenshot.png)

Here is a short video talking about it.

[Beads ep.005 video on YouTube](https://www.youtube.com/watch?v=GctjdVo8O7Y)

### Example: Cycler utility

This handy utility shows how you can run a program inside another program in Beads (by using the *monitor* keyword instead of program on the first line of code).

![screenshot](https://beadslang.com/examples/cycler/screenshot.jpg)

Here is a short video talking about it.

[video example on YouTube](https://www.youtube.com/watch?v=AoACdQSSsZM)


### Example: Heat transfer simulation

In this example we show how you can use the physical units of measure features in the Beads language, where you can easily switch between the different temperature scales. Beads includes all the basic units used in engineering and science, with the unit conversions built into the language.

![heat](http://beadslang.com/examples/heat/screenshot_300w.gif)

### Example: Animate1 -- Animation using the HTML Canvas

In this example we show how you can use the HTML canvas layer to achieve smooth animation effects.

![constellation](http://beadslang.com/examples/animate3/animate3.gif)


### Example: Fishing game

This example shows the State-Action-Model pattern method of programming, which is the natural way to program in Beads. You have state variables which are used in a read-only manner by the drawing code, and only the event tracking code updates state.

![screenshot](http://beadslang.com/projects/fishing/screenshot.gif)

The game can be [run here](http://beadslang.com/projects/fishing/fishing.html)

### Example: Animate1 -- Animation program execution

In this example we show a prototype of a way of illustrating program execution, as we call and return from functions:

![constellation](http://beadslang.com/examples/animate1/example.gif)

### Example: Beads versus Python

In this short 200 word example we take an existing Python program and rewrite it in Beads. They Python version draws to the console as if we were in 1970's, while the Beads version runs in the browser (or could be emitted for Desktop or Mobile platforms), and resizes even while running without skipping a beat. 

The [Python version](https://github.com/engineer-man/youtube/tree/master/089) is slightly shorter, but imports 4 libraries, and uses about 15 external functions. Beads uses only 7 external functions, and they are the same ones used in every program. The Python version uses a complex multi-threated scheme that requires semaphores and locking of critical sections. A rather advanced set of concepts. The Python version requires an external file to be read, because it doesn't have a powerful literal syntax.

![tree](http://beadslang.com/projects/xmas_tree/docs/tree_blinking.gif)


### Example: HTTP form that re-arranges its layout

It is very common to need to have input forms and collect user data. This example shows how beads can rearrange a form based on the pixel density and size of a screen. As you make the window larger or smaller it resizes all the elements. This is different than HTML Flex boxes, as it completely rearranges the form using IF statements and can accomodate a very wide range of display densities and sizes. This means your forms can work on mobile devices which can have pixel densities 5 times that of a desktop. Many desktop forms are unusable on mobile.  Complexity rating: 1200 words

![form1A](http://beadslang.com/projects/form1/docs/screenshot_very_narrow.png)
![form1B](http://beadslang.com/projects/form1/docs/screenshot_narrow.png)
![form1C](http://beadslang.com/projects/form1/docs/screenshot_wide.png)


### Example: Chess

The classic board game. Complexity rating: 1500 words

![chess example](http://beadslang.com/projects/chess/screenshots/chess.png)

### Example: Tic-tac-toe client/server version

The classic board game, but in multiplayer form, where you can play or watch 12 different pairs of people playing across the internet, using TCP sockets. We write both the client and the server in Beads. The server publishes the game state, and the client subscribe to the published shared mutable state. Each of the players receives without any message handling code the updated state of the game. The clients make their moves by invoking remote function calls. You code the program as a standalone, then split the code into two parts. Client/server has never been so easy. No messy API's for message handling, all encoding and decoding is done automatically, and packets are sent in binary not JSON for maxiumum compactness and performance. A complexity rating of 1500 words.

![tictactoe example](http://beadslang.com/projects/tictactoe_net/docs/screenshot.png)

### Example: Tic-tac-toe game standalone version

The classic children's game, two player (no AI). Complexity rating: 520 words

![tictactoe example](http://beadslang.com/examples/TicTacToe/tictactoe.gif)

### Example: Color picker utility

A handy tool for programming; shows the HTML named colors, sorted in a convenient to use sort order. Approx. 1300 words.

![color picker](http://beadslang.com/examples/colorchart/docs/screenshot1.png)

### Example: Bearsweeper game

The classic Minesweeper game, recast with a Bear in the starring role. Complexity rating: 1000 words

![bearsweeper example](http://beadslang.com/examples/bearsweeper/game1_small.png)

### Example: Lumberjack game

A very simple wood chopping game, built for little kids. A rewrite of an existing React/TS game that is can be run [here](https://lumber-jack.netlify.com/). We compare the two implementations to see how it differs in word count, number of dependencies, memory usage. Complexity rating: 750 words

![lumberjack example](http://beadslang.com/examples/lumberjack/lumberjack_screenshot.jpg)

### Example: Calculator

The classic Apple calculator program, except without the bugs that Apple has! Complexity rating: 500 words

![calculator example](http://beadslang.com/examples/calculator/calculator.gif)

### Example: Snake game

The classic snake game as popularized by Nokia cellphones. Probably the most fun per line of code ever made. Program complexity rating: 500 words.

![snake example](http://beadslang.com/examples/snake/snake_animated.gif)

### Example: FizzBuzz, graphical style

This is classic tiny program people write, where you take the numbers from 1 to 100, and draw either "Fizz", "Buzz" or the number, depending on the remainder when dividing by 3 and 5. This one is a bit fancier than normal, shows how you can store persistent data using cookies, and how auto refresh occurs.

![screenshot](https://beadslang.com/projects/fizzbuzz/screenshot.gif)

### Example: Sort method contest

The classic bubble sorting algorithm is pitted against the just slightly more complicated but a zillion times faster Quicksort amethod. Watch the two side by side sort the same number list, and see why Quicksort is so much more clever, by moving things larger distances. The larger the sample size the more terrible the bubble sort works. Program complexity rating: 440 words.

![sort example](http://beadslang.com/examples/sort_contest/screenshot_bubble_400.png)

### Example: Wristwatch simulation

This simple program simulates a wristwatch. Program complexity rating: 180 words.

![watch example](http://beadslang.com/projects/watch/watch_example_animated.gif)

### Example: Analog clock

This simple program will draw a clock on the screen. This is among the shortest possible graphical programs one can imagine. Program complexity rating: 150 words.

![clock example](http://beadslang.com/examples/clock/clock_screenshot_anim.gif)

