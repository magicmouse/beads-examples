## Example / the FizzBuzz program

#### screenshot:

![fizz example](http://beadslang.com/projects/fizzbuzz/screenshot.gif)

This simple program will draw 120 cells on the screen. The content of each cell is based on the classic FizzBuzz problem (more accurately the Fizz Buzz Jazz problem), which is if the cell number is divisible by 3, you put in "Fizz", if by 5, "Buzz", if by 7 "Fuzz", otherwise the cell number is drawn.

In this example the word list, and prime factors are table driven.

This version allows you to select a cell by clicking on it. And it will be remembered in the browser for a day via a cookie.

It shows how the automatic refresh works in Beads; once you change the mutable state variable (my_state.selected), whichever cells were affected by the change are redrawn automatically.

The ability to handle refresh without under or over-refreshing is a great timesaver, and bug avoider.

It also shows how you can build graphical interactive products without having to learn a framework or database system.  Provided your state can fit in 1kbytes, you can just use a cookie for persistence.


##### program complexity rating: 120 words
