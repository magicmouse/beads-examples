### Client / Server example program of a Counter

This program is a simple counter that is stored on a server,
and the client programs offer buttons to update the server side,
and the data is automatically transferred in the background to the clients via the publish/subscribe methodology.

![screenshot](http://beadslang.com/projects/node_counter/screenshot.gif)


To run the program

1) set mode to NODE (not default HTML) and compile the `counter_server` program.

2) set mode back to HTML, and compile the `counter_client` program.

3) go to your terminal console, and run node. if you are using Node 11 or earlier, you will need to include the --experimental-modules flags, however in Node 12 and later i believe it does this automatically.

	node  --experimental-flags my/path/to/counter_server.mjs
	
Note that the `.mjs` suffix is what the compiler emits when you are emitting Node.JS files, `.mjs` means module of javascript in the Node universe.

4) then run the client program.

5) click on the + and - buttons, and the counter will go between 0 and 10, and if it reaches a limit the color will turn red.  Multiple clients can run simultaneously, and as the umpire, the server will not allow the counter to go past the limits. 

This example is currently set to run on a web socket on the local host, but you can easily run this on a remote server.
