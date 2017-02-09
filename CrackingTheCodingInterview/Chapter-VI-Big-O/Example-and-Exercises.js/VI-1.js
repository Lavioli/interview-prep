//The following code computes the product of a and b. What is it's runtime?
const product = (a, b) => {
	let sum = 0;
	for (let i = 0; i < b; i++) {
		sum += a;
	}

	return sum;
}

//Answer: O(b), the loops runs on the length of b.