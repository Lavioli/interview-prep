//The following code computes a % b. What is it's runtime?
const mod = (a, b) => {
	if (b <= 0) {
		return -1;
	} 
	let div = a / b;
	return a - div * b;
}

//Answer: O(1), constant amount of work.