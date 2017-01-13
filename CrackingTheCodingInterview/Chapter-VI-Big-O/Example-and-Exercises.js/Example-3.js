//What is the runtime of the below code?
const printUnorderedPairs = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			console.log(arr[i] + ', ' + arr[j]);
		}
	}
}

printUnorderedPairs([1,4,5]); 

/*OUTPUT: 
1, 4
1, 5
4, 5
*/

/*
Answer: This will take O(N^2) quadratic time.
The for loop iterates through each pair of values for (i, j where j is bigger than i. There are N^2 total pairs, and roughly half of those will have i < j and the other half will have i > j). The total runtime is roughly N^2/2, so it does O(N^2) work.

In terms of visualization:
The code iterates through the following (i, j) pairs when N = 3.
(0, 1) (0, 2) (0, 3)
	   (1, 2) (1, 3)
	   		  (2, 3) 
This looks like half of a N x N matrix, which has a size of roughly N2/2, therefore it takes O(N^2) work.

For average work:
The outer loop runs N times, and the inner loop will be half of N, which is N/2. Becasue if is a nested for loop, the total run time would be N * N/2, which is N^2/2, which is O(N^2).
 */