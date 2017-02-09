//The following code computes the [integer] square root of a number. If the number is not a perfect square (there is no integer square root), then it returns -1. It does this by trying increasingly large numbers until it finds the right balues (or is too high. What's it's runtime?
const sqrt = (n) => {
	for (let guess = 1; guess * guess <= n; guess ++) {
		if (guess * guess == n) {
			return guess;
		}
	}
	return -1;
}



//Answer: O(√n), It is a loop that stops when guess * guess > n, or √n = guess. 