
### Example: Cloning NoiseCraft

Instead of wasting 60 hours doing the Advent of Code puzzles, I thought it would be more fun to try and copy a fairly sophisticated synthesizer program called [Noisecraft](http://noisecraft.app).

Here is the beads version: 
 [run here](http://beadslang.com/projects/noisecraft/noisecraft.html). 
 
The goal of the project was to see how much of NoiseCraft could be built in a short amount of time, and could the original be improved upon during the cloning process.

This is an excellent reference project for drawing multi-planar UI's, and showing how one builds something complicated in Beads. 

The Beads program is about 4000 words.

![screenshot](http://beadslang.com/projects/noisecraft/screenshot.gif)

The following improvements were made:

1) make menubar toggle visiblity

2) show UNDO/REDO, Duplicate/Delete as buttons so you don't have to remember keyboard shortcuts. 

3) the Dup/Del buttons hide if there is no selected block

4) make it clearer which part of the node block is for dragging (the header), versus the body, so as to prevent unintended moving

5) round the corners slightly to make for less eyestrain

6) make the color of the wires not a hash of the node kind and number, but instead make the color coding by output port kind, so it has some semantic meaning that can be unconsciously learned

7) emit click sound for snap operation, doink for when you cancel a node wire.  Sound effects would be toggleable in preferences

8) make the PLAY button change color when it becomes STOP so it is more obvious which mode you are in

9) when moving the mouse around, as you get within the hit test area of a port on a node, it highlights the port with a little outer box; have increased the hit test area.

10) when you select a port you get the sound effect of click, and the color changes from orange to green.

11) the overall system font was changed to proportional Atkinson Hyperlegible.  

12) the left side node kinds replace the modal dialog box, which was obtrusive, and now you just drag and release the node where you want it. It is easier to get the node in the target spot this way, and it is compatible with iPad

13) when dragging out a wire, we put the drag wire in a special yellow color, and put it on the topmost layer, so as to allow you to see where the wire is more clearly. The original Noisecraft is hiding all wires behind nodes, even during dragging.

note that the toolbar on the left will try to adapt to the size of the screen you are on, and if you shorten the height of your window, it will squish them. It is not designed for teeny windows, but if you wanted you could make a UI compatible with the iPhone. It would be rather cumbersome, not sure it is worth it.


Future improvements possible:

1) we can make the UI compatible with iPad by allowing drag and drop on the wiring. instead of using mouse movement, you could click--drag--release to achieve wiring.

2) Instead of using words for the node kinds, some of the node kinds can have icon forms, esp. for waveforms like sine and sawtooth, etc., which will be clearer than the words, and more compact.

3) some nodes like the ADSR would be better represented as having 4 dials inside, and if an input is presented, then that dial disappears. it seems most of the time in usage, you have 4 knob nodes nearby, and it would be more legible and compact to put 4 knobs together into one ADSR node.

4) the node kinds can be clustered into functional groups so that it is easier to find the one you want. I see several obvious groupings: 1) signal generators (saw, sine, etc.),  2) filters,  3) arithmetic, etc.