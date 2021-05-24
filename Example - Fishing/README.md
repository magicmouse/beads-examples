## Example / A fishing game

#### screenshot:

![xample](http://beadslang.com/projects/fishing/screenshot.gif)

This simple game shows the SAM (State-Action-Model) pattern, expressed in Beads. For more information on SAM, visit [sam.js.org](http://sam.js.org)

The program has a mutable state consisting of an array of fish, that are hidden inside a pond. The user has to find the fish by dragging out a rectangle represeting a net, but the user can only catch one fish at a time, so they have to be smart about how much area they drag.  Once the user catches all 10 fish, they have won the game. 

The code shows how you de-couple the drawing from the state management. The drawing code only references the state variables. On during user event tracking does the state change.

To play the game, go to [fishing game](http://beadslang.com/projects/fishing/fishing.html)

##### program complexity rating: 500 words
