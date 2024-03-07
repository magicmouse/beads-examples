
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



### Example: Using HTTP to draw a wine list

![whitelist_screenshot](https://github.com/magicmouse/beads-examples/assets/5481132/dbe76749-e81d-4175-9d26-bbf3667ea2fe)


This example shows you how to retrieve a wine list from an external database, and adjust the display to fit the screen.

### Example: Realtime stock price graph

![hoody](https://github.com/magicmouse/beads-examples/assets/5481132/00def104-8c4b-4360-99ca-d3034333f699)


This is an example of a client + server program, showing how you can build both the client and the server in Beads. To develop this app, you start by first coding it as a standalone program, with fake data, and once you have the drawing part working well, you split off the data generation part into the server module. In this example you connect to the server (running the emitted JS code under Node.JS), and it will transmit to the client the prices. [run here](http://beadslang.com/projects/realtime_stock/hoody_client.html). Note that the server has to be running for the client to be able to connect. We don't run the server 24/7, mention it on the Discord group to fire it up.


### Example: Conway's game of life

![screenshot](https://github.com/magicmouse/beads-examples/assets/5481132/fd7e2bb3-1402-4d75-bf31-826a7c95fd03)


This shows how short and simple programs can be when written in Beads. It is impossible to write a shorter version that performs the same function (this version auto-adjusts to the screen size).


### Example: Neat looking liquid slider

![screenshot](http://beadslang.com/projects/temperature2/screenshot2.gif)

This is a rewrite of a CSS-mostly project from CodePen. Our version is interactive, and lets the user drag a control thumb to set the value, and it shows the dramatic difference between wrestling with the intricacies of CSS, and instead doing it in a straightforward imperative style that is much less tangled.

### Example: Recursive structures

This shows how you can build a simple tree structure with up/down expand/contract buttons.

![screenshot](https://github.com/magicmouse/beads-examples/assets/5481132/5d13a207-42de-48ff-862e-126898659754)


### Example: Sliding block puzzle

![puzzle](https://github.com/magicmouse/beads-examples/assets/5481132/de7cccad-d641-4dc6-9bb5-9cd61d8d9c53)


### Example: Translation tool

This is the handy graphical interactive localization utility for Beads. It allows you to visit Google translate to get your translation started, and lets you keep track of your translation progress, add new languages, etc.

Beads has a friendly and convenient localization methodology, by using suffixes in the source code after a string literal.

for a [video explanation of how to use it](https://youtu.be/xKQ9Uj8o_4w)

![localize_screenshot](https://github.com/magicmouse/beads-examples/assets/5481132/a2ec3cc6-d48f-4470-a0fb-a7c69a402c21)


### Example: Dijkstra's pathfinder algorithm

This Beads language sample program runs a simulation of Dijkstra's famous pathfinding algorithm.

You draw a wall with the mouse (right click to erase wall cells), and then you press ENTER and let the simulation run. You can also press SPACEBAR to go one step at a time. 

![pathfinder](https://github.com/magicmouse/beads-examples/assets/5481132/e2296487-2642-438a-b16c-cb75bad1200b)


### Example: Temperature control

This is a simple temperature control which demonstrates the physical units of measurement in Beads, and how you can have a dual control and either one will update the model and refresh the other version of the control that uses the same data, all without locks or conflicts arising.

![screenshot](https://github.com/magicmouse/beads-examples/assets/5481132/2a376a43-0f3e-476d-9b57-52584f26cb0b)


Here is a short video talking about it.

[Beads ep.005 video on YouTube](https://www.youtube.com/watch?v=GctjdVo8O7Y)

### Example: Cycler utility

This handy utility shows how you can run a program inside another program in Beads (by using the *monitor* keyword instead of program on the first line of code).

![screenshot](https://github.com/magicmouse/beads-examples/assets/5481132/0cae1bf0-ea0b-46a5-9356-8f69554e495e)


Here is a short video talking about it.

[video example on YouTube](https://www.youtube.com/watch?v=AoACdQSSsZM)


### Example: Heat transfer simulation

In this example we show how you can use the physical units of measure features in the Beads language, where you can easily switch between the different temperature scales. Beads includes all the basic units used in engineering and science, with the unit conversions built into the language.

![screenshot_300w](https://github.com/magicmouse/beads-examples/assets/5481132/4b5c1f9e-fc6e-432e-a785-17ed7000e4fa)


### Example: Animate1 -- Animation using the HTML Canvas

In this example we show how you can use the HTML canvas layer to achieve smooth animation effects.

![animate3](https://github.com/magicmouse/beads-examples/assets/5481132/8d9ab56a-9bbe-4823-bcc6-a9c565e2fae4)



### Example: Fishing game

This example shows the State-Action-Model pattern method of programming, which is the natural way to program in Beads. You have state variables which are used in a read-only manner by the drawing code, and only the event tracking code updates state.
![screenshot](https://github.com/magicmouse/beads-examples/assets/5481132/ff3cf081-41c6-4732-86a5-f9e1399bbd72)


### Example: Animate1 -- Animation program execution

In this example we show a prototype of a way of illustrating program execution, as we call and return from functions:

![example](https://github.com/magicmouse/beads-examples/assets/5481132/a18619ca-49e7-4ebf-8ebf-c890336de8b5)


### Example: Beads versus Python

In this short 200 word example we take an existing Python program and rewrite it in Beads. They Python version draws to the console as if we were in 1970's, while the Beads version runs in the browser (or could be emitted for Desktop or Mobile platforms), and resizes even while running without skipping a beat. 

The [Python version](https://github.com/engineer-man/youtube/tree/master/089) is slightly shorter, but imports 4 libraries, and uses about 15 external functions. Beads uses only 7 external functions, and they are the same ones used in every program. The Python version uses a complex multi-threaded scheme that requires semaphores and locking of critical sections. A rather advanced set of concepts. The Python version requires an external file to be read, because it doesn't have a powerful literal syntax.

![tree_blinking](https://github.com/magicmouse/beads-examples/assets/5481132/e3e59615-99e5-4f08-9635-7c80649b227f)


### Example: HTTP form that re-arranges its layout

It is very common to need to have input forms and collect user data. This example shows how beads can rearrange a form based on the pixel density and size of a screen. As you make the window larger or smaller it resizes all the elements. This is different than HTML Flex boxes, as it completely rearranges the form using IF statements and can accomodate a very wide range of display densities and sizes. This means your forms can work on mobile devices which can have pixel densities 5 times that of a desktop. Many desktop forms are unusable on mobile.  Complexity rating: 1200 words


![screenshot_wide](https://github.com/magicmouse/beads-examples/assets/5481132/7ab6bcc4-7b7a-47e8-80d5-b48c4fb9d76a)
![screenshot_very_narrow](https://github.com/magicmouse/beads-examples/assets/5481132/75234717-6aab-4d95-be74-3e2b21dc4ae2)
![screenshot_narrow](https://github.com/magicmouse/beads-examples/assets/5481132/67f625c8-ba4d-419c-be3f-135a80fe22c9)

### Example: Chess

The classic board game. Complexity rating: 1500 words

![chess](https://github.com/magicmouse/beads-examples/assets/5481132/95b0e913-b099-4cd4-ac36-2afcc40ab823)


### Example: Tic-tac-toe client/server version

The classic board game, but in multiplayer form, where you can play or watch 12 different pairs of people playing across the internet, using TCP sockets. We write both the client and the server in Beads. The server publishes the game state, and the client subscribe to the published shared mutable state. Each of the players receives without any message handling code the updated state of the game. The clients make their moves by invoking remote function calls. You code the program as a standalone, then split the code into two parts. Client/server has never been so easy. No messy API's for message handling, all encoding and decoding is done automatically, and packets are sent in binary not JSON for maxiumum compactness and performance. A complexity rating of 1500 words.

![screenshot](https://github.com/magicmouse/beads-examples/assets/5481132/c3275cd5-999f-4d58-92f4-48b9eeecb3d6)


### Example: Tic-tac-toe game standalone version

The classic children's game, two player (no AI). Complexity rating: 520 words

![tictactoe](https://github.com/magicmouse/beads-examples/assets/5481132/c28566da-4676-49a1-ac74-a25b04a594a0)


### Example: Color picker utility

A handy tool for programming; shows the HTML named colors, sorted in a convenient to use sort order. Approx. 1300 words.

![screenshot](https://github.com/magicmouse/beads-examples/assets/5481132/7a51fb38-f919-4f07-8314-292e6a4393f1)


### Example: Bearsweeper game

The classic Minesweeper game, recast with a Bear in the starring role. Complexity rating: 1000 words

![game1_small](https://github.com/magicmouse/beads-examples/assets/5481132/f2b59832-6e5f-421a-8d3a-9dc8d6ab9329)


### Example: Lumberjack game

A very simple wood chopping game, built for little kids. A rewrite of an existing React/TS game that is can be run [here](https://lumber-jack.netlify.com/). We compare the two implementations to see how it differs in word count, number of dependencies, memory usage. Complexity rating: 750 words

![lumberjack_screenshot](https://github.com/magicmouse/beads-examples/assets/5481132/db5a4a97-d01f-4813-a7cf-fcb61e7ac474)


### Example: Calculator

The classic Apple calculator program, except without the bugs that Apple has! Complexity rating: 500 words
![calculator](https://github.com/magicmouse/beads-examples/assets/5481132/3957fc04-e56d-4fbc-b8cf-85b401df9d05)



### Example: Snake game

The classic snake game as popularized by Nokia cellphones. Probably the most fun per line of code ever made. Program complexity rating: 500 words.

![snake_animated](https://github.com/magicmouse/beads-examples/assets/5481132/6e41971b-b97c-40c0-b5f5-ae5777979eaf)


### Example: FizzBuzz, graphical style

This is classic tiny program people write, where you take the numbers from 1 to 100, and draw either "Fizz", "Buzz" or the number, depending on the remainder when dividing by 3 and 5. This one is a bit fancier than normal, shows how you can store persistent data using cookies, and how auto refresh occurs.

![screenshot](https://github.com/magicmouse/beads-examples/assets/5481132/815ada40-23d7-4794-bf63-fd025f7de096)


### Example: Sort method contest

The classic bubble sorting algorithm is pitted against the just slightly more complicated but a zillion times faster Quicksort amethod. Watch the two side by side sort the same number list, and see why Quicksort is so much more clever, by moving things larger distances. The larger the sample size the more terrible the bubble sort works. Program complexity rating: 440 words.

![screenshot_bubble_400](https://github.com/magicmouse/beads-examples/assets/5481132/be1e1c90-c937-4204-aa61-f5043cc2a2b8)


### Example: Scrolling to a block

This very short program shows how you can control the browser to scroll to a particular block on the screen.

![screenshot](https://github.com/magicmouse/beads-examples/assets/5481132/0d69916e-6a66-4717-b9d2-5a958276372b)


### Example: Wristwatch simulation

This simple program simulates a wristwatch. Program complexity rating: 180 words.

![watch_example_animated](https://github.com/magicmouse/beads-examples/assets/5481132/27582130-43e5-474d-ab86-d1df2f911fdb)


### Example: Analog clock

This simple program will draw a clock on the screen. This is among the shortest possible graphical programs one can imagine. Program complexity rating: 150 words.

![clock_screenshot](https://github.com/magicmouse/beads-examples/assets/5481132/c1f873aa-70dd-4775-89d0-a1b91ac05541)


### Example: Fibonacci sequences

![screenshot](https://github.com/magicmouse/beads-examples/assets/5481132/29feb234-b4a2-448c-a246-967ec93cc956)


This example shows you how to calculate the famous Fibonacci sequence of numbers.

