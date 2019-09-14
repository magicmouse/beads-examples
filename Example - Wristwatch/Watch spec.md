## Example / A Wristwatch Simulation

This program draws a simulation of a wristwatch. It is similar to the clock example, but shows how much prettier a program can be when it uses bitmap resources instead of vector artwork. With apologies to Patek Philippe.

![watch example](http://magicmouse.com/beads/examples/watch/watch_example_animated.gif)

The specification:

 * Open a window that is exactly 1000 x 750 pixels
 * draw the `image patek_cleaned_750v.jpg` at the upper left corner
 * draw day hand (`hand_day.png`), rotated such that the 0th day is pointing upwards, with target point at (486, 512), with rotation origin in the bitmap of (11,11)
 * draw hour hand (`hand_hour.png`), with target point (485,380), with rotation origin in the bitmap of (11, 18)
 * draw minute hand  (`hand_min.png`) at same target point with rotation origin of (11,12)
 * draw second hand (`hand_sec.png`) with rotation origin if (18,17)
 * the hour and minute hands should sweep, not jump
 * update the clock every second. Stop after 100 seconds.

 #### program size estimate: 180 words
 