
### Example: Conway's game of life


This is an example of a program that implements the famous Game of Life invented by Conway

The `START`/`STOP` button starts/stops the simulation. While it is stopped, you can clear the screen, and with your mouse or finger, clicking on a cell in the active area will toggle the dot. The `CLEAR` button will zap the screen, and the `RANDOM` button will fill it with a random pattern.

 [run here](http://beadslang.com/projects/game_of_life/life.html). 
 
 The code shows how you can skip testing for array limits, as it is perfectly valid to reference values outside of an array's bounds, you just get the value of U, which is not "truthy".
 
![screenshot](http://beadslang.com/projects/game_of_life/screenshot.gif)
