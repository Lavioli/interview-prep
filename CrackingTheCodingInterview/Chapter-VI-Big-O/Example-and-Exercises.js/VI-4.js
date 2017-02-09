//The following code performs integer division. What is its runtime (assume a and b are both positive)?
const div = (a, b) => {
	let count = 0;
	let sum = b;
	while (sum <= a) {
		sum += b;
		count ++;
	}
	return count;
}

//Answer: O(a/b), the variable count will eventually equal to a/b, the while loop iterates count times. Therefor, it iterates a/b times. 