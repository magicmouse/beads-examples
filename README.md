
# Programming examples

These are examples with specifications posted in our GitHub repository, and are included in the SDK which you can download at Beadslang.org 

Beads is a replacement for the entire JS + HTML + CSS + React + Framework stack. Using a single language for both client and server drastically simplifies web programming. A sync engine built into the runtime eliminates most of the message passing hassle and makes many client/server projects very easy. Beads is not a minor rehash of Python or JS. It is a clean sheet design, carefully crafted to catch as many errors at compile time as possible so you spend less time debugging. These examples barely scratch the surface of the full range of Beads features, such as:

1. automatic refresh of screen areas when the underlying model changes
2. protected arithmetic like Excel
3. units of measure like 3 m + 2 ft (even at runtime)
4. a proportional layout system that responds to size changes beautifully
5. greatly simplified regular expressions
6. a simple and flexible module system 
7. no make system needed for most projects


## Example: Color picker utility

A handy tool to pick colors. Click a swatch, and it copies the color in string format to the clipboard in 7 different notations,
which covers almost every language you can think of.  Repeatable, convenient, very useful for programmers.

<img src="https://github.com/magicmouse/beads-examples/assets/5481132/e08e59e9-ed6e-4f32-afdb-2a8b80162130" height="400" alt="screenshot color picker"/>

You can [run the color picker here](https://voicecarrier.com/lab/colors/colorchart.html)
<br><br>
  

## Example: Mortgage Calculator

A handy mortgage calculator, optimized for mobile devices. Operates with the fewest possible clicks by the user.

<img src="https://github.com/user-attachments/assets/a88f1765-990d-4d8f-b022-de41f6f4b71b" height="300" alt="screenshot mortgage"/>

You can [run the mortgage calculator here](https://voicecarrier.com/lab/calc/calc.html)
<br><br>


## Example: Using HTTP to draw a wine list

<img src="https://github.com/magicmouse/beads-examples/assets/5481132/247ee76a-18ff-48f5-8ce9-fa55e6454c4f" height="300" alt="screenshot winelist"/>

This example shows you how to retrieve a wine list from an external database, and adjust the display to fit the screen.
<br><br>

## Example: Realtime stock price graph

<img src="https://github.com/magicmouse/beads-examples/assets/5481132/9eae8822-90ca-48b0-95c4-28288a14f5e5" height="300" alt="screenshot stock price"/>

This is an example of a client + server program, showing how you can build both the client and the server in Beads. To develop this app, you start by first coding it as a standalone program, with fake data, and once you have the drawing part working well, you split off the data generation part into the server module. In this example you connect to the server (running the emitted JS code under Node.JS), and it will transmit to the client the prices. [run here](http://beadslang.com/projects/realtime_stock/hoody_client.html). Note that the server has to be running for the client to be able to connect. We don't run the server 24/7, mention it on the Discord group to fire it up.
<br><br>


## Example: Conway's game of life

<img src="https://github.com/magicmouse/beads-examples/assets/5481132/b5897a59-30e9-4603-a3b5-eed185a1f252" height="300" alt="screenshot game of life"/>
<br><br>


## Example: Neat looking liquid slider

<img src="https://github.com/magicmouse/beads-examples/assets/5481132/7a1239c1-4f9a-4ffb-80dc-2238cbc82ffc" alt="screenshot liquid slider"/>

This is a rewrite of a CSS-mostly project from CodePen. Our version is interactive, and lets the user drag a control thumb to set the value, and it shows the dramatic difference between wrestling with the intricacies of CSS, and instead doing it in a straightforward imperative style that is much less tangled.
<br><br>

## Example: Recursive structures

This shows how you can build a simple tree structure with up/down expand/contract buttons.

![screenshot](https://github.com/magicmouse/beads-examples/assets/5481132/e42fe869-0f40-481b-b99f-fd02e6a8a571)
<br><br>


## Example: Sliding block puzzle

![puzzle](https://github.com/magicmouse/beads-examples/assets/5481132/c5d201c0-921c-4d09-ae5d-b09c06d40f85)
<br><br>


## Example: Translation tool

This is the handy graphical interactive localization utility for Beads. It allows you to visit Google translate to get your translation started, and lets you keep track of your translation progress, add new languages, etc.

Beads has a wonderful localization methodology, that people will find user friendly and convenient.

for a [video explanation of how to use it](https://youtu.be/xKQ9Uj8o_4w)

<img src="https://github.com/magicmouse/beads-examples/assets/5481132/a88a24de-07b9-4f59-a2a8-6ef1e49c536f" height="400" alt="screenshot localization tool"/>
<br><br>


## Example: Dijkstra's pathfinder algorithm

This Beads language sample program runs a simulation of Dijkstra's famous pathfinding algorithm.

You draw a wall with the mouse (right click to erase wall cells), and then you press ENTER and let the simulation run. You can also press SPACEBAR to go one step at a time. 

![pathfinder](https://github.com/magicmouse/beads-examples/assets/5481132/02c16dc0-31c3-40d4-aaa2-7105d8448259)
<br><br>


## Example: Temperature control

This is a simple temperature control which demonstrates the physical units of measurement in Beads, and how you can have a dual control and either one will update the model and refresh the other version of the control that uses the same data, all without locks or conflicts arising.

<img src="https://github.com/magicmouse/beads-examples/assets/5481132/53001a9d-79d9-4ae6-8689-06ea997d87d7" height="300" alt="screenshot temperature control"/>

Here is a short video talking about it.

[Beads ep.005 video on YouTube](https://www.youtube.com/watch?v=GctjdVo8O7Y)
<br><br>

## Example: Cycler utility

This handy utility shows how you can run a program inside another program in Beads (by using the *monitor* keyword instead of program on the first line of code).

<img src="https://github.com/magicmouse/beads-examples/assets/5481132/ea2e23be-3ab1-48e0-b5d0-35b72686413a" height="400" alt="screenshot cycler utility"/>

Here is a short video talking about it.

[video example on YouTube](https://www.youtube.com/watch?v=AoACdQSSsZM)
<br><br>


## Example: Heat transfer simulation

In this example we show how you can use the physical units of measure features in the Beads language, where you can easily switch between the different temperature scales. Beads includes all the basic units used in engineering and science, with the unit conversions built into the language.

![screenshot_300w](https://github.com/magicmouse/beads-examples/assets/5481132/1d7ba94a-fac7-4df1-8439-eadfa3005b99)
<br><br>


## Example: Animate3 -- Animation using the HTML Canvas

In this example we show how you can use the HTML canvas layer to achieve smooth animation effects.

![animate3](https://github.com/magicmouse/beads-examples/assets/5481132/0d492895-0516-4c25-8b34-4722147f784a)
<br><br>


### Example: Fishing game

This example shows the State-Action-Model pattern method of programming, which is the natural way to program in Beads. You have state variables which are used in a read-only manner by the drawing code, and only the event tracking code updates state.

![screenshot](https://github.com/magicmouse/beads-examples/assets/5481132/c98f07da-7a33-4919-bb39-567a28372b39)
<br><br>


## Example: Animate1 -- Animation program execution

In this example we show a prototype of a way of illustrating program execution, as we call and return from functions:

![example](https://github.com/magicmouse/beads-examples/assets/5481132/c85e0139-6684-4aca-90c4-dcead6323eaf)
<br><br>


## Example: Beads versus Python

In this short 200 word example we take an existing Python program and rewrite it in Beads. They Python version draws to the console as if we were in 1970's, while the Beads version runs in the browser (or could be emitted for Desktop or Mobile platforms), and resizes even while running without skipping a beat. 

The [Python version](https://github.com/engineer-man/youtube/tree/master/089) is slightly shorter, but imports 4 libraries, and uses about 15 external functions. Beads uses only 7 external functions, and they are the same ones used in every program. The Python version uses a complex multi-threated scheme that requires semaphores and locking of critical sections. A rather advanced set of concepts. The Python version requires an external file to be read, because it doesn't have a powerful literal syntax.

<img src="https://github.com/magicmouse/beads-examples/assets/5481132/b794e92e-2bdf-416a-a84a-fe48bffc5524" height="200" alt="blinking xmas tree"/>
<br><br>


## Example: HTTP form that re-arranges its layout

It is very common to need to have input forms and collect user data. This example shows how beads can rearrange a form based on the pixel density and size of a screen. As you make the window larger or smaller it resizes all the elements. This is different than HTML Flex boxes, as it completely rearranges the form using IF statements and can accomodate a very wide range of display densities and sizes. This means your forms can work on mobile devices which can have pixel densities 5 times that of a desktop. Many desktop forms are unusable on mobile.  Complexity rating: 1200 words

![screenshot_very_narrow](https://github.com/magicmouse/beads-examples/assets/5481132/09c67bf2-6682-4959-b97a-b368f54e7428)
![screenshot_narrow](https://github.com/magicmouse/beads-examples/assets/5481132/2518ee4f-9e53-4231-b116-10c1f036cd16)
![screenshot_wide](https://github.com/magicmouse/beads-examples/assets/5481132/d0179d1c-f880-43b6-a9b7-cbcfddcd7d62)
<br><br>


## Example: Chess

The classic board game. Complexity rating: 1500 words

<img src="https://github.com/magicmouse/beads-examples/assets/5481132/7f8385cb-c3b1-4651-8d6d-2b264342b690" height="400" alt="screenshot chess"/>
<br><br>


## Example: Tic-tac-toe client/server version

The classic board game, but in multiplayer form, where you can play or watch 12 different pairs of people playing across the internet, using TCP sockets. We write both the client and the server in Beads. The server publishes the game state, and the client subscribe to the published shared mutable state. Each of the players receives without any message handling code the updated state of the game. The clients make their moves by invoking remote function calls. You code the program as a standalone, then split the code into two parts. Client/server has never been so easy. No messy API's for message handling, all encoding and decoding is done automatically, and packets are sent in binary not JSON for maxiumum compactness and performance. A complexity rating of 1500 words.

![screenshot](https://github.com/magicmouse/beads-examples/assets/5481132/97da228f-b472-4f5c-a95a-171b31c54d7a)
<br><br>


## Example: Tic-tac-toe game standalone version

The classic children's game, two player (no AI). Complexity rating: 520 words

<img src="https://github.com/magicmouse/beads-examples/assets/5481132/9348b328-649a-4a50-bf79-571860e78bf4" height="300" alt="screenshot tic-tac-toe"/>
<br><br>


## Example: Bearsweeper game

The classic Minesweeper game, recast with a Bear in the starring role. Complexity rating: 1000 words

![game1_small](https://github.com/magicmouse/beads-examples/assets/5481132/a520dd14-2f24-4999-ba71-9c4a0d3d925b)
<br><br>


## Example: Lumberjack game

A very simple wood chopping game, built for little kids. A rewrite of an existing React/TS game that is can be run [here](https://lumber-jack.netlify.com/). We compare the two implementations to see how it differs in word count, number of dependencies, memory usage. Complexity rating: 750 words

![lumberjack_screenshot](https://github.com/magicmouse/beads-examples/assets/5481132/524d2de5-19ef-44e6-8535-e467938f90f6)
<br><br>


## Example: Calculator

The classic Apple calculator program, except without the bugs that Apple has! Complexity rating: 500 words

<img src="https://github.com/magicmouse/beads-examples/assets/5481132/4cd38681-6d47-42db-b011-bdcf92a41aa8" height="200" alt="snake game animation"/>


## Example: Snake game

The classic snake game as popularized by Nokia cellphones. Probably the most fun per line of code ever made. Program complexity rating: 500 words.

<img src="https://github.com/magicmouse/beads-examples/assets/5481132/367e2f5e-d3f7-4741-b09f-6e52de50f6f0" height="300" alt="snake game animation"/>
<br><br>


## Example: Sort method contest

The classic bubble sorting algorithm is pitted against the just slightly more complicated but a zillion times faster Quicksort amethod. Watch the two side by side sort the same number list, and see why Quicksort is so much more clever, by moving things larger distances. The larger the sample size the more terrible the bubble sort works. Program complexity rating: 440 words.

![screenshot_bubble_400](https://github.com/magicmouse/beads-examples/assets/5481132/4f0bc21d-c28c-4974-a049-3d9eb6eceaf7)
<br><br>


## Example: Wristwatch simulation

This simple program simulates a wristwatch. Program complexity rating: 180 words.

<img src="https://github.com/magicmouse/beads-examples/assets/5481132/d1b657c7-a651-4b66-9950-d29dcbf84c38" height="200" alt="wristwatch"/>
<br><br>


## Example: Fibonacci sequences

![screenshot](https://github.com/magicmouse/beads-examples/assets/5481132/aa96ecbb-d572-46cd-abcf-295d908b77c7)

This example shows you how to calculate the famous Fibonacci sequence of numbers.
<br><br>

