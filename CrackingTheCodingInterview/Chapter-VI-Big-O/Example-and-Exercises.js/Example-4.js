//What is the runtime of the below code?
const printUnorderedPairs = (arrA, arrB) => {
	for(let i = 0; i < arrA.length; i++) {
		for(let j = 0; j < arrB.length; j++) {
			if(arrA[i] < arrB[j]) {
				console.log(arrA[i] + ", " + arrB[j])
			}
		}
	}
}

printUnorderedPairs([1,4,5], [1, 2, 3]); 

/*OUTPUT: 
1, 2
1, 3
*/

/*
Answer: This will take O(ab) quadratic time.
This is because the if statement is a O(1) runtime. Therefore, each of the for loop is unique on it's own. So arrA will be O(a) runtime, and arrB will be O(b) runtime. So the total runtime would be O(a * b * 1), which is O(ab).

Common mistake to think this is a O(N^2) but it's not due to for each element in arrA, the inner for loop goes through b iterations, where b = arrB.length and a=arrA.length.
 */