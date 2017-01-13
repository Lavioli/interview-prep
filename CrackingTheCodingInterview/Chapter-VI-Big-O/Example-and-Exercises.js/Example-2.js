//What is the runtime of the below code?
const printPairs = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			console.log(arr[i] + ", " + arr[j]);
		}
	}
}

printPairs([1,4,5]); 
/*OUTPUT: 
1, 1
1, 4
1, 5
4, 1
4, 4
4, 5
5, 1
5, 4
5, 5
*/

/*
Answer: This will take O(N^2) quadratic time, because this is a nest for loop, and both for loops has O(N) time. */