//What is the runtime of the below code?
const printUnorderedPairs = (arrA, arrB) => {
	for(let i = 0; i < arrA.length; i++) {
		for(let j = 0; j < arrB.length; j++) {
			for(let k = 0; k < 100000; k++) {
				console.log(arrA[i] + ", " + arrB[j]);
			}
		}
	}
}

/*
Answer: This will take O(ab) quadratic time.
This is because the third for loop statement is a O(1) constant runtime, since it is still 100,000 units of work. For arrA and arrB, each of the for loop is unique on it's own. So arrA will be O(a) runtime, and arrB will be O(b) runtime. So the total runtime would be O(a * b * 1), which is O(ab).

Common mistake to think this is a O(N^2) but it's not due to for each element in arrA, the inner for loop goes through b iterations, where b = arrB.length and a=arrA.length.
 */