//The following code computes the [integer] square root of a number. If the number is not a perfect square (there is no integer square root), then it returns -1. It does this by successive guessing. If n is 100, it first guesses 50. Too high? Try something lower - halfway between 1 and 50. What's it's runtime?
const sqrt = (n) => {
	return sqrt_helper(n, 1, n);
}

const sqrt_helper = (n, min, max) => {
	if(max < min) return -1; //no square root

	let guess = (min + max) / 2;
	if (guess * guess == n) {  //found it!
		return guess;
	} else if (guess * guess < n) { //too low
		return sqrt_helper(n, guess + 1, max); //try higher
	} else {
		return sqrt_helper(n, min, guess - 1); //try lower
	}
}

//Answer: O(log n), it halves it's n until it reaches target, it is a Binary search.