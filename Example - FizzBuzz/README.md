## Example / the FizzBuzz program

#### screenshot:

![fizz example](http://beadslang.com/projects/fizzbuzz/screenshot.gif)

This simple program will draw 100 cells on the screen. The content of each cell is based on the classic FizzBuzz problem, which is if the cell number is divisible by 3, you put in "Fizz", if by 5, "Buzz", and if neither, then the cell number is drawn.

This version allows you to select a cell by clicking on it. And it will be remembered in the browser for a day via a cookie.

It shows how the automatic refresh works in Beads; once you change the mutable state variable (my_state.selected), whichever cells were affected by the change are redrawn automatically.

The ability to handle refresh without under or over-refreshing is a great timesaver, and bug avoider.

It also shows how you can build graphical interactive products without having to learn a framework or database system.  Provided your state can fit in 1kbytes, you can just use a cookie for persistence.


##### program complexity rating: 120 words
