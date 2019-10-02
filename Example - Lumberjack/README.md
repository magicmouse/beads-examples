### Comparison between a Beads project and a React/Typescript implementation of a Lumberjack game


### The Lumberjack game

This simple game is designed for little kids. They move the mouse wuich is represented as an axe over the trees, and chop them down for firewood. This game is a copy of an original game by Koen van Gilst, by trying to clone the [original React/Typescript code](https://github.com/vnglst/lumber-jack)

The game has 8 levels, and gets progressively harder. In the first levels it only takes one chop to cut the tree, but as the levels progress, it takes more chops. The reset button starts the game over. After cutting all the trees, there is a door icon you click to advance to the next level. 

#### screenshot:

![clock example](http://magicmouse.com/beads/examples/lumberjack/lumberjack_screenshot.jpg)

The Beads language is designed to replace Java and Javascript for making graphical interactive software. More information is available at beadslang.org and other example programs are available on this Github repository. If you would like to join the beta test, please send an email to beads@magicmouse.com and we will set you up.

The task was to take an existing working web app that was made with React, React-pose, Mobx-React, etc., and convert it to Beads. After reaching a 99% level of clone, I am ready to present the final statistics comparing the two implementations.

#### Overall program code measurements

The Beads program is about 750 words, the React implementation is about 1000 words, so they are both fairly brief, no significant difference there. The Beads program has a higher percentage of declarative code. Declarative code is superior to executable code, because declarations typically have very few errors.
	
Ignoring the sound effect and artwork asset files which are identical for the two projects, the React implementation requires 14 different source code files, while Beads only needs 1 source code file. It is a clear advantage to have a single short file for the source code. It is easier to manage and read.

#### Total number of function calls / API's used

The Beads language has the features that are most commonly needed built into the language and standard libraries, so there are significantly fewer API's referenced in a Beads program. The standard library functions used were:

	dots_to_pt  -- convert from a pixel to device points
	draw_image  -- draw an SVG or bitmap image
	draw_rect  -- draw a rectangle
	draw_str   -- draw a text string
	sound_play  -- play a sound
	launch_url  -- jump to a web page
	loom_timer  -- set a timer
	cursor_custom  -- draw a custom cursor
	str_subset  -- substring function
	
These functions are very frequently used, and easily learned.

In comparison, the React version has the following modules listed inside the Chrome developer tools listing:

	@emotion
	@popmotion
	framesync
	hey-listen
	howler
	mobx-react
	mobx-react-lite
	mobx
	object-assign
	popmotion-pose
	popmotion
	pose-core
	process
	react
	react-dom
	react-pose
	schedule
	setimmediate
	style-values-types
	stylefire
	times
	tslib
	webpack
		
There are so many subtle dependencies, I cannot identify which of these modules is used for what purpose. Each of these modules has dozens of available functions, and the net result means hundreds if not thousands of API functions one has to learn in order to build something with this toolchain. To use these modules, it requires a mishmash of magical tags in the source code like <PoseGroup>, <Container>, <Provider>, <>, and knowing how to interact with the various modules, each of which has a different method of controlling the interactions. Unfortunately these 6 modules have dependencies themselves, with the final result that the `yarn.lock` file, which contains the list of all dependencies in a project, is over 10,000 lines long, consisting of 1345 different dependencies. This file is 445kb, compared to the approximately 10kb source code. Thus the dependency chart is 44 times larger than the code. This indicates to me that this simple project is built on top of a monster of complexity, and that it would be difficult to understand the React version at a very deep level.

#### Memory consumption in the browser

The Beads system is more memory intensive, as it contains even in production versions a time travel debugging system built into the system. And it carries more symbolic information to facilitate debugging. The only major difference is the larger number of system objects. 

| Category | React | Beads |
| --- | --- | --- |
| Code | 301 | 425 |
| Strings | 292 | 338 |
| JS Arrays | 212 | 281 |
| Typed Arrays | 20 | 14 |
| System Objects | 742 | 2858 |

Note that the Beads runtime is presently non-minified, so the code is significantly larger than it will be in a production minified version. React is clearly more efficient at conserving memory.

### Conclusion

The Beads program is slightly shorter, but far easier to read by more than 5:1 in terms of how many things one has to learn in order to understand the operation of the program. One file, of which 1/3rd is not even executable code, instead of over a dozen is another big advantage for Beads.

More examples are needed to fully demonstrate the differences between conventional JS programming techniques versus Beads, but so far it is very promising from an overall simplicity standpoint. Being able to build products out of perhaps two dozen total functions makes it very easy to learn and use.


	



