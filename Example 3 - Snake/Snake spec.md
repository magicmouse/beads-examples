## Example / A Snake Game

The classic snake game as popularized by Nokia cellphones. Probably the most fun per line of code ever devised. Program complexity rating: 500 words.

![snake example](http://magicmouse.com/beads/examples/snake/snake_animated.gif)

### The specification:

 * Calculate a square size for the playing grid, such that the basic cell size is such that at least 10 cells can fit in both vertical and horizontal directions, but increase the number of cells if they would be larger than 42 pts.

 * The background is solid black

 * The Apple is drawn as a red circle.
 
 * The Snake is drawn as rounded rectangles of alternating shades of green, with the head more rounded than the body cells, and stroked in a slightly darker color to help distinguish it slightly.

 * At the start of the game, the Snake is only 1 cell long, but has a maximum length of 5 cells. It starts out moving in the southern direction. The Apple is placed at [6,6]. The High score is set to 1.

 * When the snake head crosses the Apple's location, the CRUNCH sound is played, and the maximum length grows by one cell. The Apple is immediately placed at a new cell. The Apple will never be placed on top of the Snake's head position, all other cells are acceptable.
 
 * The game runs at 6 frames per second, and the snake moves in its current direction 1 cell per frame. When the game is paused, the snake stops moving.

 * The arrow keys can change the direction of the head; however only sideways movements are allowed; pressing the arrow key in the direction you are going, or the opposite direction, has no effect.
 
 * If the snake head crosses over any part of the body of the snake, the BEEP sound is played, and the snake's length is truncated to the point where it crossed itself.
 
 * There is a status line at the top of the screen, drawn on top of the playing board, showing the current length of the snake and the high score. The box for the high score is 1/8th the height of the screen, and the font size is 85% the box height, at 40% opacity.

 * If the device does not have a keyboard (such as a mobile phone) display a soft keyboard at the bottom, showing 4 directional arrows and a pause button in the center in lieu of a keyboard. To draw the directional arrows use the Unicode characters \u2582 (upward triangle), \u25C0 (left triangle), \u25B6 (right triangle), and \u25BC (down triangle). The Pause button in the center is drawn as the string "PAUSE". 
 
 * Since the user can type ahead of the snake's movements, a queue of the pending snake movements is maintained and on each frame, the next valid move is removed from the queue. Invalid movement commands in the queue such as going in the same direction you are heading are discarded, and do not use up the time slot. Thus the user can do up/right/down.
 
 * In the event the playing window is resized (on a desktop computer for example), if after recalculating the size of the playing grid, and any part of the snake that is now off-screen is repositioned to the edge of the screen, and as the snake moves along any overlapping cells will effectively accordian out.  If the Apple is offscreen, it will be repositioned inside the limits of the playing grid.
 
