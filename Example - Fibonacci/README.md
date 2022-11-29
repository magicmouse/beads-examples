
## The Fibonacci sequence

This program shows how to calculate Fibonacci numbers

![screenshot](https://beadslang.com/projects/fibonacci/screenshot.gif)


### Section 1: Declarations

Every Beads program declars the level of the language it was intended to be compiled against. That way in the future, older code can be automatically upgraded.

```
beads 1 program fibonacci	// a fast fib calculator
```

### Section 2: The crucial fibonacci function

We could have easily made code use recursion, but the function is defined as a sequence starting with the 3rd number as the sum of the previous 2, which are 1 and 1. 

```
calc fib (
	n 
	) : num
	if n <= 0
		return 0
	
	if n <= 2  // 1st and 2nd numbers are 1
		return 1

	var prev1 = 1
	var prev2 = 1
	var sum

	//  the 3rd fibonacci number is 2
	loop reps:n-2
		sum = prev1 + prev2
		prev1 = prev2
		prev2 = sum
	return sum
```

### Section 3: Drawing

We slice the screen into rows, and show the first 24 numbers of the sequence.

```
vert slice main_draw
	background fill:#670029
	skip 10 al
	loop from:0 to:32 index:ix
		add 14 pt draw_str("{ix}: {to_str(fib(ix), thou:Y)}", size:0.7, color:WHITE)
	skip 10 al
```
