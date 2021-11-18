### A color picker utility

The Beads language is designed to replace Java and Javascript for making graphical interactive software. More information is available at [beadslang.org](beadslang.org) and other example programs are available on this Github repository. If you would like to join the beta test, please visit [beadslang.com](beadslang.com) and see the signup form.

This simple tool is designed to give a programmer a way to pick colors easily. It shows the HTML named colors, and by clicking on a color chip it will copy the color name to the clipboard so you can paste it into your code. You can switch the mode by clicking the little button in the upper left corner, and then it will show Hex colors and copy those. It will draw the color names if the window is large enough but you can shrink the window down to super small size and then it is just color chips.

To run the program please visit:  [picker running on a server](https://beadslang.com/projects/colorchart/colorchart.html)

#### screenshot:

Regular mode:

![example](http://beadslang.com/examples/colorchart/docs/screenshot.jpg)


In this example, we will use the following standard library routines:

```
• color_to_hsv  -- convert color from RGB to HSV format
• color_to_hex  -- convert color into Hex string format
• dots_to_pt  -- convert screen dots into physical points (1/72inch)
• draw_rect  -- draw a rectangle
• draw_str   -- draw a string
• os_to_clipboard  -- copy onto the system clipboard
• rem  -- remainder (modulo function)
• round_down  -- round down to nearest integer
• round_up  -- round up to nearest integer
• round  -- round to nearest integer
• solve_rect -- solve for a rectangle
• sound_play  -- play a sound
• sqrt  -- square root
• tree_count  -- count the number of elements in an array
```

#### The picker code: 

```
beads 1 program picker  //  color picker
//  written by edj october 2019
//  copyright waived
//  lets you pick a HTML color, copies the name or hex value to the clipboard
//  complexity rating: 1150 words

assets local:"./art/" remote:"http://beadslang.com/beads/projects/color_picker/art/"
	file:"click.mp3" label:CLICK
	file:"beep.mp3" label:BEEP

const
	TRACE_COLORS = N
	TRACE_FUDGE = N
	TRACE_SIZING = N
	TRACE_PALETTE = N

record a_slot
	name  : str   //  color name
	color : color //  rgb color 
	//  the sort key
	key1  // color category  1:color band  98:low sat, 99:gray ramp
	key2  // value band
	key3  //  hue
```

The first line identifies the language version, and names the program.  The `assets` statement imports audiovisual resources.  The console logging is currently off. Beads uses `Y` for yes and `N` for No instead of the historic `true` and `false` of JS.  It is less typing.

We define a record type that we will be using later with the fields that are relevant for the sort. We will sort by a 3 level key, one for the category of the color, then key2 and key3 to give them a nice sort order. 

```var SET1 : array of a_slot <=== [ {name:"button", color:0 },
	{name:"ALICE_BLUE", color:ALICE_BLUE}, 
	{name:"ANTIQUE_WHITE", color:ANTIQUE_WHITE},
	{name:"AQUA", color:AQUA},
	{name:"AQUAMARINE", color:AQUAMARINE},
	{name:"AZURE", color:AZURE}, 
	{name:"BEIGE", color:BEIGE},
	{name:"BISQUE", color:BISQUE},
	{name:"BLANCHED_ALMOND", color:BLANCHED_ALMOND},
	{name:"BLUE", color:BLUE},
	....
```

We then define the named HTML colors. The standard library of Beads has the colors defined as constants. Note that HTML uses CamelCase for their names, but as Beads has the convention of all capital letters for constants, we renamed them.

```
onst SET2 : array of a_slot <=== [ {name:"WHITE", color:WHITE},
	{name:"GRAY1", color:GRAY1},
	{name:"GRAY2", color:GRAY2},
	{name:"GRAY3", color:GRAY3},
	{name:"GRAY4", color:GRAY4},
	{name:"GRAY5", color:GRAY5}, 
	{name:"GRAY6", color:GRAY6},
	{name:"GRAY7", color:GRAY7},
	{name:"GRAY8", color:GRAY8},
	{name:"GRAY9", color:GRAY9},
	{name:"BLACK", color:BLACK}]
```

Because HTML named colors don't have a nice gray ramp, we move black into this second set, which we will sort at the end.

```
const hue_fudge = 150  // break the HSV wheel not at 0/359 which is in the middle of red
const AREA_THRESHOLD = 140000  // below this screen area in points we switch to compact form
const TARG_WIDTH = 100

//  these functions as constants after the resize event is processed, which calculates basic geometry
var NCOLS
var NROWS
var NCELLS
var BARV

var slotlist : array of path  //  our sorted array of pointers

const
	C_DEAD = DARK_SLATE_GRAY
	C_TEXT = SNOW

	MODE_COLORS = 1
	MODE_GRADS = 2

record a_choice_set  //  mutually exclusive choice control
	enabled  : yesno  //  if N then hide
	is_open  : yesno  //  used by pulldown menu
	selx_ptr : ptr to num  //  if present, use a pointer instead of a value
	selx 	  // which item we selected 1=first
	nrows	  // number of rows, U means 1
	label_list : array of str
	label_func : array of draw(a_rect)
	val_list   : array of num
	choice_func : calc () //  function to call after selection has changed

record a_tabset  //  a set of tabs
	selx 
	label_list : array of str
	action : calc()

record a_state
	htmlchip_selx  // which color slot is currently selected
	ferrari_selx  //  which chip is selected in the ferrari palette
	sel_color : color
	prior_color : color

	format  : (FORMAT_BEADS, FORMAT_HTML, FORMAT_HEX, FORMAT_RGB)
	sizing  : (COMPACT_SIZE, FULL_SIZE)
	mode_grid : a_choice_set

var g : a_state  //  our tracked mutable state
```

The HSV color space is very intuitive, but it has a flaw in that the red range is split down the middle. Hue 0 and Hue 359 are very closely related colors, and if you start a color ramp at hue 0 it will put the reds far apart. We shift the hue some degrees to find a nicer place to split the color wheel. 

We define variables that are set at resizing time to remember how many columns and rows there are in the grid.  The `slotlist` array is an array of pointers to our slots. In Beads we use the datatype `path` to mean a pointer to a record. 

The state of the program is pretty simple. We might have a selected color, and the format of the screen will either show named colors (`FORMAT_BEADS`), or hex colors (`FORMAT_HEX`).  We are either in super compact form or full size form where we draw the names. 

The program has been designed to also edit gradients, which will be added in a later revision

```
=================================
calc main_init
=================================
	//  pass 1 - compute the sort keys for the colors
	log "-- rebuilding with fudge {hue_fudge}" on:TRACE_FUDGE

	var hsv:a_hsv
	loop array:SET1 path:p index:ix
		//  hue 0..360, saturation 0..100, value 0..100
		hsv <=== color_to_hsv(p.color)

		//  fudge the hue because splitting inside red is very bad
		//  a mistake in the design of HSV
		var hue2 = rem(hsv.hue + hue_fudge, 360)

		if ix == 1
			//  force our first slot which is for the mode button to sort first
			p.key1 = 0
			p.key2 = 0
			p.key3 = 0
		elif hsv.saturation <= 10
			//  low saturation color, sort at end
			p.key1 = 90  //  low saturation, sort near end
			p.key2 = hue2
			p.key3 = hsv.value
		elif hsv.saturation >= 90
			p.key1 = 10  //  high saturation, first band
			p.key2 = hue2
			p.key3 = hsv.value
		else
			//  a regular color, not faint or bold
			p.key1 = 50  //  medium saturation
			p.key2 = hue2 // round_down(hsv.value/100*NRAMPS)
			p.key3 = hsv.saturation // // hsv.hue
		//log "{ix}: {p.name}, keys=[{p.key1},{p.key2},{p.key3}], rgb=[{color_r(p.color)},{color_g(p.color)},{color_b(p.color)}], hsv=[{hsv.hue},{hsv.saturation},{hsv.value}]" on:TRACE_COLORS
	//..end loop

	//  pass 2 - now loop through the set in sort order
	//           and build an array of pointers to these values
	loop array:SET1 path:p sort:func compare_slots index:ix count:cx
		append p => slotlist
		log "  {cx}: sorted traversal ix={ix}, name={p.name}" on:TRACE_COLORS

	//  add the grays, which are already sorted in the order we want
	loop array:SET2 path:p
		append p => slotlist

	if TRACE_COLORS
		log "----- after sort ------"
		loop array:slotlist val:p index:ix
			log "{ix}: {p.name}, keys=[{p.key1},{p.key2},{p.key3}], color={p.color}"

	g.mode_grid.selx = MODE_COLORS
	g.mode_grid.label_list <=== ["Colors", "Gradients"]

	g.format = FORMAT_BEADS	
	NCELLS = tree_count(slotlist)

```

The first code chunk executed is called `main_init`. In this chunk we build our sorted color list. So this is where all the tricky logic happens; the rest of the program is about drawing the color chips. We loop across the array of input colors (`SET1`), calculate the HSV value of the color, and calculate which ramp it is in (`key1`).  After building the sort keys, we loop across the array in order order. The ability to iterate across an array in sort order saves a lot of extra housekeeping work compared to other languages. Since we wanted the gray ramp to appear at the end, we add that to the slotlist array after the sorted colors.

```
=================================
vert slice main_draw
=================================
	under
		draw_rect(fill:C_DEAD)
	add BARV px d_modebar
	skip 6 pt
	case g.mode_grid.selx 
	| MODE_COLORS
		add 16 al d_html_palette
		skip 8 pt
		//  since the ferrari palette is in 7 rows make it a nice multiple of 7 pixels
		//var v = round(bb.height*10/24, multiple:7)
		add 10 al d_ferrari_palette
		skip 4 pt
	| MODE_GRADS
		add 10 al d_grad_designer

```

The main_draw block is simple subdividing the screen into two parts, one for the modebar, and the other for the color chart.

There is a special event `EV_RESIZE` that is sent to the main_draw block after `main_init` but before `main_draw` executes that gives your program a chance to calculate item sizes. As the window is expanded or shunk, resize events will be sent to give us a chance to calculate the `NCOLS` and `NROWS` values, as well as whether we are in super compact mode or regular mode.

```
-------
track EV_RESIZE  //  this sets global BARV, NCOLS, NROWS
	//  when we resize (or before first draw) this event is sent
	BARV = max(14 pt, min(20 pt, b.box.height/17))
	var h_pts = dots_to_pt(b.box.width)
	var v_pts = dots_to_pt(b.box.height-BARV)
	var area = h_pts * v_pts
	log "-- resize, h={h_pts}, v={v_pts}, area={area}, thresh={AREA_THRESHOLD}" on:TRACE_SIZING

	if area >= AREA_THRESHOLD
		log "-- full size mode" on:TRACE_SIZING
		//  full size mode, show name
		g.sizing = FULL_SIZE
		NCOLS = round_down(h_pts/TARG_WIDTH)
	else
		log "-- compact mode" on:TRACE_SIZING
		g.sizing = COMPACT_SIZE
		//  calculate the approx. area per cell we are going to have
		var cell_area = round_down(area / NCELLS)
		
		//  now calculate the size so we have a 3:1 aspect ratio
		var cell_height = sqrt(cell_area/3)
		var cell_width = cell_area/cell_height
		NCOLS = round(h_pts/cell_width)
		
	NROWS = round_up(NCELLS/NCOLS)
	log "-- end resize, NCELLS={NCELLS}, NCOLS={NCOLS}, NROWS={NROWS}, BARV={BARV}" on:TRACE_SIZING

=================================
draw d_grad_designer
=================================
	draw_rect(fill:OLIVE_DRAB)
	draw_str("not yet", size:40 pt, color:C_TEXT)

=================================
horz slice d_modebar
=================================
	add 30 al 
		draw_str(b.box, "Colorchart v.{runtime.app_version}", size:b.box.height*0.6, indent:6 pt)
	add 55 al d_format_selector
	add 80 al
		draw_str(b.box, "Click on the color chip or name to copy to the clipboard", size:b.box.height*0.7, indent:14 pt)
	add 40 al d_made_with
	skip 8 pt

=================================
horz slice d_format_selector  //  show the format selector (mutually exclusive button)
=================================
	add 10 al d_choice(FORMAT_BEADS, "Beads name", "Beads")
	add 10 al d_choice(FORMAT_HTML, "HTML name", "HTML")
	add 10 al d_choice(FORMAT_HEX, "Hex name", "Hex")
	add 10 al d_choice(FORMAT_RGB, "rgb call", "rgb()")

=================================
draw d_choice(  //  show a format choice button
=================================
	formx : num
	long_label : str
	short_label : str
	) -------
	var fill:color = if formx == g.format then TOMATO else OLD_LACE
	draw_rect(b.box, fill:fill, thick:1 pt, color:BLACK)
	var label:str = if b.box.width > 70 pt then long_label else short_label
	draw_str(b.box, label, size:b.box.height*0.60, indent:3 pt)
track EV_TAP
	g.format = formx
track EV_HOVER
	cursor_set(CURS_FINGER)

=================================
draw d_made_with  //  show the "made with" button
=================================
	draw_str(b.box, "Made with Beads", size:b.box.height*0.65, just:RIGHT)
track EV_TAP
	//  go to the beads home page
	html_redirect("http://beadslang.com", newtab:Y)
track EV_HOVER
	cursor_set(CURS_FINGER)

=================================
grid chart_draw order:TBLR
=================================
	horz slice
		skip 10 al
		loop reps:NCOLS count:col
			if col > 1 and g.sizing == FULL_SIZE
				skip 10 al
			add 250 al
		skip 10 al		

	vert slice
		skip 5 al
		loop reps:NROWS count:row
			if row > 1 and g.sizing == FULL_SIZE
				skip 5 al
			add 80 al
		skip 5 al
```

The `main_draw` function is the main drawing function that is called when the screen needs refreshing. In this case we are drawing two slices. One of them is the command/status bar, and the other is the color grid. We want the command bar to be of a reasonable size; we estimate it at 1/17th of the total height, but keep it inside a range of a reasonable height so we devote maximum space to the color grid. The color grid, which is first broken down into columns in the `horz slice` section, where we are using aliquots (proportional measurements) to create the columns.  Then we subdivide the screen into vertical slices in the `vert slice` section. 

```	cell
		// inside: b.box, b.cell_seq, b.cell.x/y, b.cell_id.x/y
		//  note that the first sequential cell correponds to slot 0
		//  and the sequential 2 means slot 1 because of the extra slot we used
		if b.cell_seq == 1
			//  button
			d_mode_button
		elif b.cell_seq <= NCELLS
			var slotx = b.cell_seq
			d_cell(slotlist[slotx]^^, slotx)
		//  ignore cells at the end due to partial last row fill
```

The cell section draws the color chips. We reserve slot #1 for the mode button to change between hex and named colors.

```
	over
		//  draw the sizing square in the corner
		var r : a_rect <=== solve_rect(basis:b.box, pin:BOT_RIGHT, width:12 pt, height:12 pt)
		draw_rect(r, fill:PINK, corner_tl:4 pt)
		draw_str(r, "\u2921", size: 10 pt)  //  NW-SE arrow
```

The `over` section is an overlay on top of the grid cells. In this case we are drawing a little pink square with a diagonal arrow in it to remind the user the window can be resized.

```
-----------------------
track EV_TAP
	//  make a sound effect 
	if b.cell_seq == U or b.cell_seq > NCELLS
		//  bad selection, clicked on dead space, a gap or past end of list
		sound_play(BEEP)
		g.selectedx = U  // deselect
	elif b.cell_seq == 1
		//  first cell is not a color, but a format switcher
		sound_play(CLICK)
		//  second click changes the display, cycle between the modes
		if g.format == FORMAT_BEADS
			g.format = FORMAT_HEX
		else
			g.format = FORMAT_BEADS
	else
		//  color choice
		sound_play(CLICK)
		g.selectedx = b.cell_seq
		//log "tapped on color {slotlist[g.selectedx]^^.name}"
		os_to_clipboard(calc_slot_str(slotlist[g.selectedx]^^))
```

The track block allows us to respond to mouse clicks. Beads assumes a future universe of touch screens, so the click is mapped to the EV_TAP event type. If the user clicks on dead space between cells, we beep and ignore the click. If the user clicks on cell #1, that is our mode switcher. Otherwise the clicks will select that color slot, and we copy the string to the clipboard.


```
=================================
horz slice d_cell(  //  inside each cell we draw the color and the name
=================================
	myslot : a_slot
	slotx
	)
	add 50 al
		draw_rect(b.box, fill:myslot.color, corner:3 pt)
		//if myslot.frame
		if slotx == g.selectedx
			draw_rect(b.box, color:FIREBRICK, thick:4 pt, corner:3 pt)
		else
			draw_rect(b.box, color:BLACK, thick:1 pt, corner:3 pt)
	if g.sizing == FULL_SIZE
		//  add the name or hex value
		add 140 al
			//  get rid of the underscores
			//var name : str = str_replace(myslot.name, xxxx)
			if slotx == g.selectedx
				var radius = b.box.height/6
				draw_rect(b.box, fill:PEACH_PUFF, corner_tr:radius, corner_br:radius)

			var ss : str = calc_slot_str(myslot)

			//  if this is a hex format, we can make it 1/8th the width, else 1/12th
			case g.format
			| FORMAT_BEADS
				//  show the name
				draw_str(b.box, ss, just:LEFT, indent:4 pt, size:b.box.width/11)
			| FORMAT_HEX
				//  show the hex value in slightly larger type
				draw_str(b.box, ss, just:LEFT, indent:4 pt, size:b.box.width/8, font:"_typewriter")
```

This code draws the color chip. We allow 50 units of horizontal spaces for the color chip, and 140 units for the name. We skip the name if we are in compact format. 

```
=================================
calc compare_slots(  -- compare sort keys of the color records, in ascending order
=================================
	a : a_slot  //  ptr to a_slot
	b : a_slot  //  ptr to a_slot
	) : num  // -1, a less than b

	//  implement a simple 3 level sort key
	if a.key1 < b.key1
		return -1
	elif a.key1 > b.key1
		return +1

	if a.key2 < b.key2
		return -1
	elif a.key2 > b.key2
		return +1

	if a.key3 < b.key3
		return -1
	elif a.key3 > b.key3
		return +1

	return 0  // slots are equal 
```

This is our comparison function that we use when we are traversing the `slotlist` array which points to the list of colors.  It either returns -1, 0 or +1.

```
======================
calc calc_slot_str ( -- calculate the string for the slot
======================
	slot : a_slot
	) : str
	case g.format
	| FORMAT_BEADS
		return slot.name
	| FORMAT_HEX
		return color_to_hex(slot.color)
```

This function is used twice, once for drawing, and once for copying to the clipboard.

Notice how much of the total code is declarative in nature, and the low level of nesting; the peak level of indenting is 4, which is very low. These are all good characteristics of a well-designed language.