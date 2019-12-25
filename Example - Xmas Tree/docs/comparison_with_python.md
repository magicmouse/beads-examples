## Beads vs. Python

In this short language comparison study we take an existing Python program that draws a blinking tree, and rewrite it in Beads. 

The Python version draws like this:

![python](http://beadslang.com/projects/xmas_tree/docs/python_version.png)

The Beads version draws like this:

![tree](http://beadslang.com/projects/xmas_tree/docs/tree_blinking.gif)

Beads is language in development that is designed a sequel to Python. It uses the same indendtation syntax that Python uses, but has a built-in graph database, graphical and event model. 

The Python version draws to the console as if we were in 1970's, while the Beads version runs in the browser (or could be emitted for Desktop or Mobile platforms), and resizes even while running without skipping a beat. 

The [Python version](https://github.com/engineer-man/youtube/tree/master/089) is slightly shorter, but imports 4 libraries, and uses about 15 external functions. The Python version uses a complex multi-threated scheme that requires semaphores and locking of critical sections. A rather advanced set of concepts. The Python version requires an external file to be read, because it doesn't have a powerful literal syntax. There is a [YouTube training video](https://www.youtube.com/watch?time_continue=280&v=lbbNoCFSBV4&feature=emb_logo) showing coding of the Python version

By comparsion, the Beads version uses only 7 external functions, and they are the same ones used in every program. The Beads version resizes automatically to the shape of the screen and is a little prettier as expected, as the terminal console has many limitations.

It is difficult to measure complexity in languages, but this very subjective table gives what I consider a reasonable estimate of the difficulty of each of the language and library features used in the program:

###Python

| Feature      | Complexity |
| ----------- | ----------- |
| Multithreading creation, start, join  | 30 |
| Mutex .acquire, .release | 20 |
| File mgt: .open, .read  | 10       |
| Cursor positioning in terminal via esc sequences | 10 |
| Timer.Sleep | 5 |
| Random number gen (random_uniform) | 2 |
| String stripping (.rstrip) | 2 |
| &nbsp;&nbsp;&nbsp;&nbsp;*TOTAL*   | 81  |

###Beads

| Feature      | Complexity |
| ----------- | ----------- |
| Tree literal definitions  | 10  |
| Draw rectangle, text (draw_rect, draw_str) | 10  |
| Sub-Layer creation | 10  |
| Gradient definition | 5 |
| Timer callbacks (loom_timer)  | 5  |
| Rectangle solving (solve_rect)  | 5  |
| String manipulation (subset)  | 2  |
| Number rounding (round, round_int)  | 2  |
| Random number gen (random_int) | 2  | 
| &nbsp;&nbsp;&nbsp;&nbsp;*TOTAL*  | 51  |

Beads produces a better looking result with fewer API calls needed. One third of the source code file is static definitions, where bugs are nearly impossible. 

The [Beads code](https://github.com/magicmouse/beads-examples/tree/master/Example%20-%20Xmas%20Tree) requires of course a compiler, which is available for free download at [Beads HQ](http://beadslang.com). The SDK has other examples and a reference manual.

