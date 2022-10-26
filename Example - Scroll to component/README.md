### Example - Scrolling to a component

Program difficulty: Simple

This simple example project shows how you can scroll to a particular block on the screen.  This a translation of the React code that was presented in a training video by the excellent internet eacer Ania Kubów at https://www.youtube.com/watch?v=vIA10kmNXwU

![sketch](http://beadslang.com/projects/scroll_to/screenshot.gif)

You can [run the program](http://beadslang.com/projects/scroll_to/hello4.html)


#### Step 1 - Data structures

We have the required first line naming our pogram. We create an array of 4 distinct colors so we can tell that we are scrolling.  We set the number of blocks and create an array keeping track of which block has been clicked on. The browser uses DOM element ID's to control scrolling
 and a mapping table to go from block index (1..10) back to the block name ("myblock_11" or whatever it is). 
 
```
beads 1 program hello4

const COLORS = [DARK_SEA_GREEN, LIGHT_GREEN, MEDIUM_SEA_GREEN, MEDIUM_AQUAMARINE] 
const NBLOCKS = 10

var clicked : array of yesno
var blockname_to_id : array of str  
```	

#### Step 2 - Draw the blocks

We draw our set of blocks on the screen.  If the block has been clicked on, we draw that inside the block

```
vert scroll main_draw
	loop from:1 to:NBLOCKS index:ix
		add 350 px d_block(ix)
		skip 20 px 

draw d_block (
	ix
	)
	blockname_to_id[ix] = b.bname  // remember ID of this block for later
	draw_rect(fill:COLORS[mod(ix, 4, one:Y)], corner:25 pt)
	var ss = "{ix} Has been clicked" if clicked[ix] else "{ix}"
	draw_str(ss, size:40 pt, color:WHITE)

```

#### Step 3 - Handle mouse clicks/taps

WOn each block we handle the TAP event which is the same as a mouse click on desktop computers. We turn on the clicked flag for the block, and then look for the first unclicked block and ask the browser to bring that block into view. The `scroll_into_view` function is in the std library, and controls to the browser; it will scroll in either direction so that that element is visible. It has various options like TO_START, the default is to move nearest.

```
track EV_TAP
	clicked[ix] = Y

	//  find lowest unclicked block
	loop from:1 to:NBLOCKS index:j
		if clicked[j] <> Y
			scroll_into_view(blockname_to_id[j], vert_align:TO_START)
			exit

```
