//The following function prints the powers of 2 from 1 through n (inclusive). For ex, if n is 4, it would print 1, 2, and 4. What is the runtime?

const powerOf2 = (n) => {
	if (n < 1) {
		return 0
	} else if (n == 1) {
		console.log(1);
		return 1;
	} else {
		let prev = powerOf2(n/2);
		let curr = prev * 2;
		console.log(curr);
		return curr;
	}
}

powerOf2(50)

/*
powersOf2(50)
	-> powersOf2(25)
		-> powersOf2(12)
			-> powersOf2(6)
				-> powersOf2(3)
					-> powersOf2(1)
						-> print & return 1
					-> print & return 2
				-> print & return 4
			-> print & return 8
		-> print & return 16
	-> print & return 32

Answer: The runtime is O(log n), because the number of times we can halve n until we get to 1 is O(log n).
*/