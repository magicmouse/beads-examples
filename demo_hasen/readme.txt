This demo is a re-implmentation of Hasen Judi's work at https://github.com/hasenj/HandCraftedForum/blob/EP002/app.go

Instead of using TypeScript, these examples are in Beads

Advantages:

1) no extraneous files, just one file for server, one for client
2) no build files needed, just run the compiler on the server for node output, and then compile the client.

The only setup you need to perform is to run a local webserver. I am using "Simple Web Server" app, which is a free download,
and that publishes a folder via port 8887 so you can get around the annoying restriction in Chrome whereby you cannot load
local files.
