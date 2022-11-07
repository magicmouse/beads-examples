
## The Winelist search utility

This program shows you access remote data and images via HTTP GET protocol. In this case we access a public wine database, and let the user filter the resulting wines by entering part of the winery name.

![screenshot](https://beadslang.com/projects/http_winelist/screenshot.jpg)

You can [run the program](https://beadslang.com/projects/http_winelist/winelist.html) in your browser.


### Section 1: Declarations

```
beads 1 program winelist
//  demo program to read from https://api.sampleapis.com/wines/reds database
//  and then filter winery info
//  red wine database is an array of JSON records with the structure:
//     	"winery" : str
//		"wine" : str
//		"rating": { "average": "4.9", "reviews":"88 ratings" }
//		"location":"Italy\n.\nAmarona"
//		"image": str
//		"id":num

var
	db : tree  //  our red wine database index, an array of tree structures, indexed
	filtered  : array of num  //  array of indices into our master database that match our list
	db_images : array of image  // uses the index in the main database
	input     : a_input_field
	last_input : str = "\u0001"  //  force it to rebuild
	response  : a_http_response

	intf : record
		nfound : num  //  number of filtered cells
		nskipped : num

	//  these transient values are defined at the start of refresh
	//  they are not tracked as they isolated values not in a tree
	CELLH
	CELLV
	GAP
	N_COLS
	N_ROWS

const
	TRACE_DECODE = N
	TRACE_FILTER = N

	MAX_NFOUND = 100  // limit the number of drawn items if user doesn't enter any criteria
	DUMMY_DATA = N

	C_CELL_BACK = #693D51  // wine color
	C_CELL_TEXT = WHITE
	C_CELL_DIM = #DABCC7
	C_STARS = #FE6526

	SERVER_URL = "https://api.sampleapis.com/wines/reds"
	STARS : array of str = ["☆☆☆☆☆", "★☆☆☆☆", "★★☆☆☆", "★★★☆☆", "★★★★☆", "★★★★★"]
```

### Section 2: Initialization

The one time initialization code is always called `main_init`:

```
====================
calc main_init
	//  set up our input field
	input.in_label = "i_name"
	input.in_tip = "Search criteria"
	input.in_maxlen = 30
	input.in_on_change = do_filtering
	input.in_value = ""

	if DUMMY_DATA
		const INPUT = '''[{"winery":"Maselva","wine":"Emporda 2012","rating":{"average":"1.9","reviews":"88 ratings"},"location":"Spain\n·\nEmpordà","image":"https://images.vivino.com/thumbs/ApnIiXjcT5Kc33OHgNb9dA_375x500.jpg","id":1},{"winery":"Ernesto Ruffo","wine":"Amarone della Valpolicella Riserva N.V.","rating":{"average":"4.9","reviews":"75 ratings"},"location":"Italy\n·\nAmarone della Valpolicella","image":"https://images.vivino.com/thumbs/nC9V6L2mQQSq0s-wZLcaxw_pb_x300.png","id":2},]'''
		var ss = json_to_tree(INPUT, db)
		log "JSON err=[{ss}]"
		do_filtering(input)
	else
		//  read in the database (about 700 rows of data)
		http_request(SERVER_URL, decode_winelist, timeout:5, response:adr response)
```
### Section 3: HTTP decoding

We convert the JSON buffer we get into a Beads tree structure. So it will end up as an array of records in the first subscript, and then each field will be access via string subscripts.

```
====================
calc decode_winelist  // completion function when HTTP get of winelist is finished
	log "decoding wine list, phase={response.http_phase}, status={response.http_status}" on:TRACE_DECODE
	//  note that the download could have failed
	if response.http_status == 200
		//  list succeeded
		json_to_tree(response.http_body, db)
		intf.nfound = tree_count(db)

		if TRACE_DECODE
			loop across:db ptr:p index:ix
				log "list[{ix}] winery={p['winery']}, wine={p['wine']}, rating={p['rating', 'average']}"

		do_filtering(input)  // this will show all the items
	else
		intf.nfound = ERR

====================
calc do_filtering (  //  this will be called on each keystroke
	field : a_input_field
	)

	log "do_filtering, old=[{last_input}] new=[{input.in_value}]" on:TRACE_FILTER
	if input.in_value <> last_input
		//  regenerate the filter
		trunc filtered
		intf.nfound = 0
		intf.nskipped = 0

		//  if the field is empty, set the filtered list to the full set
		if input.in_value == ""
			log "..show all" on:TRACE_FILTER
			//  empty field, show all items
			loop across:db index:ix
				if ix <= MAX_NFOUND
					append ix => filtered
					inc intf.nfound
				else
					inc intf.nskipped

		else
			//  check each db item against the regexp
			loop across:db ptr:p index:ix
				if str_pos(p['winery'], input.in_value) <> U
					if intf.nfound <= MAX_NFOUND
						append ix => filtered
						inc intf.nfound
					else
						inc intf.nskipped

		log "..end filter, nfound={intf.nfound}, nskip={intf.nskipped}" on:TRACE_FILTER
```

### Section 4: Drawing the display

We calculate how many cells can fit across the current window width, and then we calculate how many rows it will take.

```
====================
vert scroll main_draw
	background fill:SEASHELL

	skip 20 pt
	add 14 pt draw_str("Wine Search Utility", bold:Y, size:14 pt)
	skip 20 pt
	add 24 pt d_input
	skip 15 pt

	//  loop through all the found set of records
	if intf.nfound == ERR
		//  list not read in yet
		add 24 pt draw_str("⚠️️  HTTP GET failed with status {response.http_status}, please check url:", size:0.6)
		add 24 pt draw_str(SERVER_URL, size:0.7)

	elif intf.nfound == U
		//  list not read in yet
		add 24 pt draw_str("⌛   WAITING FOR SERVER  ⌛", size:0.6)

	elif intf.nfound == 0
		//  filter so strong no wines match
		add 24 pt draw_str("😟  Sorry, no matching wineries, please adjust your search criteria.", size:0.6)

	else
		//  we have a list.  calculate how many rows we can fit
		CELLH = 220 pt
		CELLV = 95 pt
		GAP = 12 pt
		N_COLS = max(1, (bb.width - GAP) /. (CELLH+GAP))
		N_ROWS = round_up(intf.nfound / N_COLS)

		//  draw the first one
		//log "drawing intf.nfound={intf.nfound}, N_COLS={N_COLS}, nrows={N_ROWS}"

		loop reps:N_ROWS count:rowx
			skip GAP pt
			add CELLV pt d_cell_row(rowx)

		//  add a trailing row
		if intf.nskipped > 0
			skip 12 pt
			add 14 pt draw_str("({intf.nskipped} wines not shown)", size:13 pt, color:CHOCOLATE)
		skip 12 pt  //  breathing room at end of scroll
		add 1 pt draw_str("")
```

### Section 5: Drawing the row of wine cells

We slice the screen rows into as many columns as we previously calculated, and each cell we draw the body, and that is split into two parts, the left side for the photo, and the right side for the info.


```
====================
horz slice d_cell_row (
	rowx
	)
	skip 10 al
	loop reps:N_COLS count:colx
		skip GAP pt
		var cellx = (rowx-1)*N_COLS + colx
		//log "  cell, box={bb}, cellx={cellx}"
		add CELLH pt d_cell_body(cellx) on:cellx <= intf.nfound
	skip GAP pt
	skip 10 al
	skip SCROLLBAR_WIDTH px

====================
vert slice d_cell_body (  // put a margin above and below
	cellx
	)
	under
		draw_rect(fill:C_CELL_BACK, corner:10 pt)	

	skip 2 al
	add 18 al d_cell_body2(filtered[cellx])
	skip 2 al

====================
horz slice d_cell_body2 (
	dbx : num  //  index in our master database
	)
	skip 8 pt
	add 15 al
		if db_images[dbx] == U
			// load the image
			var url = db[dbx, 'image']
			//log "loading dbx={dbx}, url={url}"
			db_images[dbx] = image_load(url)
		draw_image(db_images[dbx])
	skip 6 pt
	add 80 al d_info(dbx)
	skip 2 pt

====================
vert slice d_info ditto  //  info to the side of the wine picture
	var data:ptr = adr db[dbx]  //  a shortcut to our data
	add 14 pt draw_str(data['wine'], just:LEFT, size:14 pt, bold:Y, color:C_CELL_TEXT)
	skip 4 pt
	add 14 pt draw_str("Winery: " & (data['winery'] as str), just:LEFT, size:13 pt, color:C_CELL_DIM)
	skip 10 al
	add 14 pt draw_str(data['rating', 'reviews'], just:LEFT, size:13 pt, color:C_CELL_DIM)
	skip 4 pt
	var nstars = to_num(data['rating', 'average'])
	add 14 pt draw_str(STARS[interpolate(nstars, 0, 5, 1, 6, round:Y, clamp:Y)], just:LEFT, size:13 pt, color:C_STARS)
	skip 6 pt

		
====================
horz slice d_input
	skip 10 al
	add 200 pt draw_str("Winery name (partial):", just:RIGHT, indent:3 pt, size:0.6)
	add 200 pt draw_input(input, fill:WHITE, size:13 pt, indent:2 pt)
	skip 10 al

```


