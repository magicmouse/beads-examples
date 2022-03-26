#### Tolkien database SDK  (Note: this is not a Beads project)
##### version 1 by Edward de Jong  March 2022



The [the-one-api.dev](http://the-one-api.dev) service allows you to query a Tolkein book and film database.

### Installation

To use the service, first register at the host website above, and obtain an access key by email. The key will be a string like XYZ12345462.  You will need a valid key to access the database beyond checking for status. The queries are rate limited, so be careful sharing your key with others, else you may be locked out.

To use this SDK with JavaScript, download the `one.js` file, and include it in your project by doing:

```
import get_info from "./one.js"
```

The `one.js` file has no external dependencies. There is also available a `one.mjs` file for use with Node.JS

### Using the SDK

The SDK has only 1 function inside: `get_info`, which has 2 parameters: your access key, and the query string. The query string is very similar, but not identical, to MySQL query strings.  You first specify the `table` you want to get data from, and then give any search refinement criteria or sort requests.  See the appendix for a complete listing of all the options in railroad diagram format.

The `get_info` function is implemented as an async function using `await`, and will return when the service has responded.  

The following are the different types of queries you can make. The first parameter to `get_info` is your secret key supplied by host:

### Check the status of the server

```
var status = get_info(MYKEY, "status")
console.log(`status=${status}`)
```
The status string returned will be one of the following:

```
200 OK						-- system is up
408 Bad key					-- your access key is bad
503 Service unavailable		-- system is down (timed out)
508 Service busy 			-- you are being rate limited
```

By checking the first 3 characters you can create the appropriate error messages.  We recommend that you first test the status of the server before proceeding with your queries, because this unpaid service could disappear at any time.

### Get a list of all the books

Example query:

```
var booklist = get_info(MYKEY, "table books")
console.log(`first book named ${booklist[0].name} has second chapter named ${booklist[0].chapters[1]}`)
```

This will return an array of `book` objects, starting at index 0, which has the following structure:

	type book = record
		name : String
		chapters : array of String
	end

Example return value:

```
	[{ name: "The Fellowship Of The Ring",
		chapters:[ "A Long-expected Party", "The Shadow of the Past", .... ] },
		
	  { name: "The Two Towers", chapters:[ "....", ...] }
	... ]
```

### Get a subset of the books given search criteria

```
var booklist = get_info(MYKEY, "table books where name=Hobbit")
console.log(`book named ${booklist[0].name} has first chapter named ${booklist[0].chapters[0]}`)

```

The search criteria can involve only the name of the book. Matching patterns meta-characters can be added to make the search more selective, such as only matching the start of the book name:

```
name=hobbit		-- match any books that have hobbit somewhere (liberal method)
name=^hobbit	-- match books that start with "hobbit"
name=hobbit$	-- match books that ends with "hobbit"
name=^hobbit$	-- match books with a name that exactly matches "hobbit"
```

The return value is an array of `book` records as before.  Note that since the the book is called "The Hobbit", the search for `name=hobbit` will work, but a search for `name=^hobbit` will not work, because the book title begins "The Hobbit".  Note that all string matches are case insensitive
 

### Get a list of all the movies

Example query:

```
var movielist = get_info(MYKEY, "table movies")
console.log(`first movie name=${movielist[0].name}`)
```

This will return an array of `movie` objects, which has the following structure:

	type movie = record
		name : String   		-- movie name
		runtime : Number		-- runtune in minutes
		budget  : Number		-- budget in millions
		revenue : Number		-- box office in millions
		noms    : Number		-- Academy award nominations
		wins	: Number		-- Academy award wins
		rotten : Number 		-- Rotten Tomatoes critics score (0-100)
	end

Example return value:

```
	[{ name: "The Unexpected Journey",
		runtime:169, budget:200, revenue:1021, noms:3, wins:1, rotten:64 },
		
	... ]
```
### Get a subset of the movies given search criteria

```
var movielist = get_info(MYKEY, "table movies where revenue>1000")
console.table(movielist)

```

The search criteria for numerical quantities can have the usual comparison operators:

```
revenue > 1000		-- revenue greater than 1000
revenue >= 1000		-- revenue greater than or equal to 1000
revenue = 1000		-- revenue exactly equal to 1000
revenue != 1000		-- revenue not exactly equal to 1000
revenue <= 1000
revenue < 1000
```

The search criteria can be further narrowed with `and` and `or`.

```
var movielist = get_info(MYKEY, "table movies where revenue>1000 and wins > 1")
console.log(`Number of billion dollar films with an academy award is ${movielist.length}`)

```

The `and` operator makes the search narrower, while `or` makes it looser. `and` has higher priority than `or`.  Future editions will support parentheses to allow more complex queries.

### Get a list of all the movie quotes

Example query:

```
var quotes = get_info(MYKEY, "table quotes")
console.table(quotes)
```

This will return an array of `quote` objects, which has the following structure:

	type quote = record
		dialog : String		-- the quote text (e.g. "the eagles are coming!")
		movie : String   	-- name of movie where quote spoken
		char : String		-- character name
	end

The movieID and charID fields are useful getting traversing the relational database without a join. To obtain the character birth date, from a quote, you take the `charID` field and then do a query on the `character` table (described below).  

### Get a subset of the quotes given search criteria

```
var quotes = get_info(MYKEY, "table quotes where char=frodo")

```
### Get a list of the characters in the books and films

```
var chars = get_info(MYKEY, "table characters")
console.table(chars)
```

This will return an array of `character` objects, which has the following structure:

```
 	type character = record
 		name : String		-- the character name
		birth : String   	-- when character was born		death : String		-- when character dies
		spouse : String   	-- spouse of character
		race : String   	-- the race of the character
		gender : String
		realm : String
		hair : String  -- hair color
		wiki : String  -- the URL of a Wiki about this character
	end
```

Note that most of the fields for character are not populated in the database and will often be empty strings.


### The general syntax of the query string

In EBNF format:

```
query ::= 'status' | 'table' tablename ('where' criteria ('and' criteria)* ('or' criteria)* )? ('sort' fieldname 'desc'?)?

tablename ::= 'books' | 'movies' | 'quotes' | 'characters'
 
 criteria ::= fieldname ('=' | '!=' | '<' | '<=' | '>=' | '>') literal
 
 literal ::= '^'? string '$'?
```

### Railroad diagram of the syntax

![r1](http://beadslang.com/projects/tolkien_sdk/railroad_query2.gif)
![r2](http://beadslang.com/projects/tolkien_sdk/railroad_tablename.gif)
![r3](http://beadslang.com/projects/tolkien_sdk/railroad_criteria.gif)
![r4](http://beadslang.com/projects/tolkien_sdk/railroad_literal.gif)

### Implementation notes

*implementation note:  set timeout to 1 second so that status request is fast.*

*implementation note:  the raw database on the host has chapters as a separate table, so when a book is retrieved, the SDK will need to perform a further query to return the array of chapter names for each book.  Note also that the raw database structure of the book return data is as follows:*

*implementation note: there is some bad data in the host database, wherein, some of these fields have value of NaN, so one must convert any JSON data transmitted by the host into null strings.  Also note that raw DB field names are very long and obnoxious, so have been shortened for more convenient use*

*implementation note: when user submits a syntactically invalid query (bad field name, etc.), either emit console.log or an alert box to notify them that the query was malformed.*

*implementation note:  the raw database only holds the character ID string, so each quote we return must access the cached character ID table, which the SDK stores upon first quote request. The user will almost certainly need to know the character or movie name to make the quote presentable, so we eliminate the need for a second query in the common case.*

*implementation note: the raw database does not return the character name, so the query will need to be mapped to use the character ID instead.* 

*implementation note: if a regular query fails, we will return an empty array, and a gloal status variable in the module will be set that the user can reference.* 

*implementation note: although the underlying API offers pagination and limit features, given the tiny number of records in most tables, with a max of around 3200 records in quotes, the decision to eliminate such features was made. The additional complexity is not justified for either RAM or data transfer reasons. For a different application one would merely add a range operator to the query syntax so as to be able to subset selectively* 

Note that query results from host look like this:

```  "docs": [
    {
      "_id": "5cf5805fb53e011a64671582",
      "name": "The Fellowship Of The Ring"
    },
    {
      "_id": "5cf58077b53e011a64671583",
      "name": "The Two Towers"
    },
    {
      "_id": "5cf58080b53e011a64671584",
      "name": "The Return Of The King"
    }
  ],
```
