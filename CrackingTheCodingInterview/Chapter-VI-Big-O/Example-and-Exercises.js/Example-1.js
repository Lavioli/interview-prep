//What is the runtime of the below code?
const foo = (arr) => {
	let sum = 0;
	let product = 1;
	
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	for (let i = 0; i < arr.length; i++) {
		product *= arr[i];
	}

	return sum + ", " + product;
}

foo([1,4,5]); //OUTPUT: 0, 20

/*
Answer: This will take O(2N) -> O(N) linear time, drop the constants. It doesn't matter that there are two arrays, but they finished after one another.
*/