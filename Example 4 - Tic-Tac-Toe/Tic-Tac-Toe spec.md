## Example / Tic-Tac-Toe (standalone version)

The classic Tic-Tac-Toe game played by children. Program complexity rating: 510 words.

![tictactoe example](http://magicmouse.com/beads/examples/TicTacToe/tictactoe.gif)

### The specification:

 * Look at the screen or windows size, and determine if the screen has a width more than 1.25 times the height (landscape mode), or a height more than 1.25 times the width (portrait mode), else is in square mode.
 * In Landscape mode, the playing board is on the left, and the message window is on the right.
 * In Portrait mode, the message window is at the top
 * In square mode, there is no message window space.

 * In the status area, if the game is in progress, you announce whose turn it is by saying "X's turn" or "O's turn" in black. If the game is over, and there is a winner, you say "O has won". If a stalemate, then say "Nobody has won" in crimson. The button is 12/14ths of the width of the status area, and has an indent on the left and right of 1/14th of the width of the area.

 * I the case of game being finished, show a green button box, with the dark green label inside of "NEW GAME". The button should be filled light green, with an 8 pt corner radius, 2 pt stroke of dark green.

 * tapping the new game button resets the game to the starting position.

 * for testing purposes, a SCAFFOLDING flag can set on or off, and when scaffolding is on, the game starts the first time out mid-way, with an X in cell 1, O in cell 2, X in cell 5, O in cell 3, with X's turn. The scaffolding only applies to the first game.

 * When it is someone's turn, if they click in one of the available cells, that cell is marked with their symbol in crimson. If the user clicks on dead space, play the BEEP sound.

 * In the case where the player has created a three in a row, the game is over. The cells that made three in a row are redrawn with a light pink background color instead of the normal pale blue. Note that it is possible in Tic-Tac-Toe to have two 3 in a row at once, so it is possible that 5 cells will be highlighted in pink.

* After the 9th move, the grid will be full, and if no winning move has occurred, the game is stalemated.

* A a courtesty to the user, if the game is over, clicking anywhere, not just the new game button, will initiate a new game.
* 
 