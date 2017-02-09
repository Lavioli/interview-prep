//The following code computes a^b. What is it's runtime?
const power = (a, b) => {
	if (b < a) {
		return 0;
	} else if (b == 0) {
		return 1;
	} else {
		return a * power(a, b - 1);
	}
}

//Answer: O(b), the recursion iterates through b calls, and subtracts 1 at each level.