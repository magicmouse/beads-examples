## Example - Real-time stock quote system


Here is a screenshot of our project:

![screenshot](http://beadslang.com/projects/realtime_stock/hoody_big.gif)


The client program can be [run here](http://beadslang.com/projects/realtime_stock/hoody_client.html)

(Assuming the server is up, you will be able to connect, and start receiving realtime price information).

##### Program difficulty: Medium


#### Step 1 -  Design the data structures

![design](http://beadslang.com/projects/realtime_stock/datastruct2crop.gif)

The top level global mutable state record will be called `g`, and it will have 2 sub-fields, `updated` and `ports`. `ports` is an array of records, which have subfields `label` and an array of `stocks`.  Each stock record has various fields and an array of `hist` records which store the price history.  Thus we have designed a 5 level tree that holds the state information for our pricing, which is what the client is going to subscribe to.  After making this diagram we can code going from the bottom up (it helps the compiler resolve records if they are defined lowest level first). 

Note that the `*` after the symbol name means that those symbols are exported by the module. 

```
record a_day_price*
	when    //  epoch time when price was set
	price 

record a_stock*
	symbol : str  // symbol like "AMD"
	avg     // avg price over last N periods
	high    // high price over last N periods
	low     // low price over last N periods
	range   //  used for generating random prices
	start   //  used for random 
	hist : array of a_day_price   // current price

record a_portfolio*
	label  : str   // label for this portfolio
	stocks : array of a_stock

record a_state*
	updated   //  epoch time we got the update for
	ports : array of a_portfolio  // our portfolio of stocks

var g* : a_state  //  our global state that we subscribe to from the server

```

#### Step 2 -  Generate test data

We will generate a two fake portfolios, so we can test drawing. Each portfolio will have a few fake stocks, which will have an array of prices we generate using a noise function.

```
calc fake_portfolio  //  create a fake portfolio for testing
	//  generate a portfolio
	g.ports[1] <=== { label:"Individual Account", updated:now }
	fake_stock(g.ports[1], "AMD")
	fake_stock(g.ports[1], "F")
	fake_stock(g.ports[1], "BRK")

	g.ports[2] <=== { label:"Retirement Account", updated:now }
	fake_stock(g.ports[2], "NVID")
	fake_stock(g.ports[2], "GM")
	fake_stock(g.ports[2], "NIO")
	g.updated = now

calc fake_stock (  //  fake a stock so we can test our drawing module
	pp : ptr to a_portfolio
	symbol : str
	)
	var stock : a_stock
	stock.symbol = symbol
	stock.range = random_int(25, 95)
	stock.start = random_int(-100, +100)

	// generate some prices
	var currprice = random_range(2, 50)
	var currdate = now - SECONDS_PER_MONTH
	loop from:1 to:40 index:ix
		0.1 +=>noise_tick
		stock.hist[ix].when = currdate
		stock.hist[ix].price = currprice

		//  get ready for next loop iteration
		SECONDS_PER_MIN +=> currdate
		currprice = jiggle_price(stock.range, stock.start)

	calc_stock_avg(stock)	
	append stock ===> pp.stocks  // add the stock to the portfolio

```

#### Step 3 -  Draw the data

We split the screen into several vertical slices.  The top slice is the status bar. We then have a row for picking the portfolio we want to display, and then the 3rd vertical section is the body of the graph.

```
vert slice main_draw
	under
		draw_rect(fill:C_DEAD)
		
	add 20 pt d_topbar
	skip 4 pt
	add 24 pt pick_portfolio
	skip 4 pt
	add 10 al d_body
```

The top bar shows the product version, and then we draw the connection state, which might be "Trying to connect" for example. The right hand side will be for the `Connect` button.

```
horz slice d_topbar
	under
		draw_rect(fill:C_TOPBAR_BACK)

	add 80 pt d_prodver
	skip 4 pt

	case conn.client_status
	| CSTATUS_CONNECTING
		add 10 al
			//  note that on Mac, 269B Atom Symbol draws as a color emoji
			draw_str("\u269B  Trying to connect  \u269B", size:0.7, color:WHITE)
		skip 80 pt

	| CSTATUS_DISCONNECTING
		add 10 al
			//  note that on Mac, 269B Atom Symbol draws as a color emoji
			draw_str("\u269B  Disconnecting  \u269B", size:0.7, color:WHITE)
		skip 80 pt

	| CSTATUS_CONNECTED
		add 10 al
			var ss : str = if g.updated == U then "--" else time_to_str("[iso time]", time:g.updated)
			draw_str("🍒  Connected, updated {ss}", size:0.6, color:WHITE)
			//  take this opportunity to reset the ticks, this will happen on each update from server
			intf.ticks = 0
		add 80 pt draw_oneshot("Disconnect", do_logout)

	| CSTATUS_NO_ANSWER
		add 10 al
			//  26D4 is no entry, 269C is the fleur du lis symbol
			draw_str("\u26D4  No answer  \u26D4", size:0.7, color:WHITE)
		add 80 pt draw_oneshot("Login", do_login)

	else
		//  U state means idle state
		add 10 al
			//  26D4 is no entry, 269C is the fleur du lis symbol
			draw_str("\u26D4  Idle  \u26D4", size:0.7, color:WHITE)
		add 80 pt draw_oneshot("Connect", do_login)
	skip 4 pt
```

The body of the code is just sliced for the stocks (to support a larger number we would use scrolling areas).  

```
vert slice d_body //  draw the portfolio data
	var pp : ptr to a_portfolio = adr g.ports[intf.portm.selectx]
	loop across:pp.stocks ptr:stockp
		skip 8 pt
		add 100 pt d_stock(stockp)
		
horz slice d_stock ( //  draw the stock data
	stockp : ptr to a_stock
	)
	skip 4 pt
	add 90 pt d_stock_name(stockp)
	add 10 al d_stock_graph(stockp)
	skip 4 pt
```

The left hand side of each stock has the stock symbol, and the current, average, high and low price.

```
vert slice d_stock_name ditto
	under
		draw_rect(fill:DARK_SLATE_BLUE, corner_tl:CORNER_STOCK pt, corner_bl:CORNER_STOCK pt)

	skip 5 al
	add 20 al
		draw_str(stockp.symbol, size:0.7, bold:Y, color:LIGHT_CYAN)
	skip 5 al
	add 18 al
		var lastx = tree_hi(stockp.hist)
		draw_str("Curr  {to_str(stockp.hist[lastx].price, dig:1, zero_drop:N)}", size:0.7, color:MISTY_ROSE, font:F1)
	skip 3 al
	add 18 al
		draw_str("Low  {to_str(stockp.low, dig:1, zero_drop:N)}", size:0.7, color:MISTY_ROSE font:F1)
	skip 3 al
	add 18 al
		draw_str("High {to_str(stockp.high, dig:1 zero_drop:N)}", size:0.7, color:MISTY_ROSE font:F1)
	skip 3 al
	add 18 al
		draw_str("Avg  {to_str(stockp.avg, dig:1 zero_drop:N)}", size:0.7, color:MISTY_ROSE font:F1)
	skip 5 al
```

But the big work is done by the body drawing code, which draws the grid lines for the stock price graph, and then the lines of the prices.

```
draw d_stock_graph ditto
	const 
		C_GRID = INDIAN_RED
		C_BACK = LIGHT_CORAL
		C_CHART = DARK_RED
		C_HIGH  = MEDIUM_VIOLET_RED
		C_LOW   = ROYAL_BLUE

	draw_rect(fill:C_BACK, corner_tr:CORNER_STOCK pt, corner_br:CORNER_STOCK pt)

	//  draw the grid lines
	const NVERT = 10
	const SPACING = bb.height / NVERT
	const RMARGIN = 24 pt
	const AVAILH = bb.width - RMARGIN
	const NHORZ = round_down(AVAILH / SPACING)
	const YTOP = bb.height*0.10
	const YBOT = bb.height*0.90

	var x
	var y
	var prevx
	var prevy
	var last_price
	var prevhi
	var prevlo
	var r : a_rect
	var ss : str

	//  grid lines
	loop from:1 to:NVERT-1 index:row
		y = interpolate(row, 0, NVERT, 0, bb.height)
		draw_line(x1:0, y1:y, x2:bb.width, y2:y, thick:1 pt, color:C_GRID)

	loop from:1 to:NHORZ index:col
		x = col*SPACING
		draw_line(x1:x, y1:0, x2:x, y2:bb.height, thick:1 pt, color:C_GRID)
	
	var limity = round_up(stockp.high, multiple:50)
	
	//  tick marks
	prevx = AVAILH - 6 pt
	x = AVAILH + 4 pt
	loop across:[YTOP, (YTOP+YBOT)/2, YBOT] val:y count:cx
		draw_line(x1:prevx, x2:x, y1:y, y2:y, thick:2 pt, color:GRAY8)
		r <=== solve_rect(left:x, width:20 pt, height:12 pt, cy:y)
		case cx
		| 1  //  100%
			ss = to_str(limity, dig:1)
		| 2  //  50%
			ss = to_str(limity/2, dig:1)
		| 3  //  0
			ss = " 0"

		draw_str(ss, box:r, size:9 pt, color:GRAY8, just:LEFT, indent:2 pt)

	log "draw_stock {stockp.symbol} lo={to_str(stockp.low, dig:2)}, hi={to_str(stockp.high, dig:2)}" on:TRACE_DRAW
	//  draw the prices. we start at the right edge and go backwards.
	//  once we reach steady state, we will cover the whole width
	loop across:stockp.hist reps:MAXHIST rev:Y ptr:histp count:hx
		//  skip the first price, it is the boundary
		//  calculate the coordinate of this price
		x = interpolate(hx, 1, MAXHIST, AVAILH, 0)
		
		//  make it so the limit of the price is at 90% of the height (10th tick mark)
		y = interpolate(histp.price, 0, limity, YBOT, YTOP)
		//log "  price {to_str(histp.price, dig:2)} diff={to_str(abs(histp.price - stockp.high), dig:2)}"
		//  if this is a high point, and we didn't just do that, mark it
		if abs(histp.price - stockp.high) < 0.001 and prevhi <> Y
			prevhi = Y
			draw_dot(x, y - 15 pt, bb.width, bb.height, "H", C_HIGH)
		else
			prevhi = N

		if abs(histp.price - stockp.low) < 0.001 and prevlo <> Y
			prevlo = Y
			draw_dot(x, y + 12 pt, bb.width, bb.height, "L", C_LOW)
		else
			prevlo = N

		if hx > 1
			draw_line(x1:x, y1:y, x2:prevx, y2:prevy, thick:2 pt, color:C_CHART)
	
		prevx = x
		prevy = y
	//..end loop
```
There is a little more drawing code not shown here, for drawing the dots for example, highlighting the low and high prices in the time period.


#### Step 4 -  Vary the data

Based on a timer, we will add another price history record. Since we only want to keep a certain number of prices around, once our price list grows larger than our limit we will delete the oldest price record.


```
calc tick_stock  //  update stock prices
	0.05 +=>noise_tick
	log "* tick_stock {to_str(noise_tick, dig:2)}" 

	loop across:g.ports ptr:portp
		loop across:portp.stocks ptr:stockp
			//  append another price
			var lastx = tree_hi(stockp.hist)
			append { when: stockp.hist[lastx].when + 10, price:jiggle_price(stockp.range, stockp.start) } ===> stockp.hist

			//  if we are past our limit, start truncating
			var n = tree_count(stockp.hist)
			loop while:n > MAXHIST
				var firstx = tree_lo(stockp.hist)
				log "  dropping {firstx}" on:TRACE_TICK
				clear stockp.hist[firstx]
				dec n

			calc_stock_avg(stockp)
			log "  append {stockp.symbol} at {lastx+1}" on:TRACE_TICK

calc jiggle_price (
	range
	start
	) : num  -- new price
	var newprice = perlin_noise(noise_tick + start)*range
	//log "jiggle tick {to_str(noise_tick, dig:2)}, newprice={to_str(newprice, dig:2)}"
	return newprice

```
#### Step 5 -  Split off the data generation to a server module

During testing, we put the code that generated the fake portfolio and prices in our main program so we could test drawing. Now we copy over that code to the server.

To help the compiler distinguish between importing from a regular module, and generating all the necessary constants that must be duplicated on the client side, we use the special `remote` keyword on the `import` statement to notify the compiler we are using symbols from a server-side module.

```
from remote hoody_server import TICKER_ID, SERVER_PORT, MAXHIST, a_state, a_stock, a_portfolio, a_day_price
```

![diagram](http://beadslang.com/projects/realtime_stock/codemove2.gif)


#### Step 6 -  Run the server

After compiling the `hoody_server.beads` file for `NODE` we will have a hoody_server.mjs file containing the JS with a small HTML wrapper that is the server code.  Assuming you have Node version 12, you will need to set the experimental-modules flag so that it knows how to handle `import` statements.

This starts up the server Node.JS process to listen on the port:
```
node --experimental-modules /beads/projects/robinhoody/hoody_server.mjs
```

#### Step 7 -  Run the client in the browser

We compile the client with `HTML` output mode, and run it. We should see the opening screen, and the chance to click the `Connect` button. Once we connect, we should see the prices animating.  Note that we put a time limit on the server mutating prices, so that it would stop after a short while.

![screenshot](http://beadslang.com/projects/realtime_stock/hoody_big.gif)

This is a brief introduction to how to make a client + server program in Beads. By using remote function calls you can control the server. The main approach is to make it easier to make client/server by making it almost the same as calling a local function in the same program.