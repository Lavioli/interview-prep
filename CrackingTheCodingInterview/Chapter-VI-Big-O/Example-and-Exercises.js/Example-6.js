//What is the runtime of the below code?
const reverse = (arr) => {
	for (var i = 0; i < arr.length/2; i++) {
		let other= arr.length - i - 1;
		let temp = arr[i];
		arr[i] = arr[other];
		arr[other] = temp;
	}
}

/*
Answer: This will take O(N) linear time.
This is because the third for loop statement only goes through half the array, and doesn't affect big O time.
 */