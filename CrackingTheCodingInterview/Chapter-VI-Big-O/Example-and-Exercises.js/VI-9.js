//The appendToNew method appends a value to an array by creating a new, longer array and returning this longer array. You've used the appendToNew method to create a copyArray function that repeatedly calls appendToNew. How long does copying an array take?
const appendToNew = (arr, val) => {
	//copy all elements over to new array
	let bigger = [arr.length + 1];
	for ( let i = 0; i < arr.length; i++) {
		bigger[i] = arr[i];
	}

	bigger[bigger.length - 1] = val;
	return bigger;
}

const copyArray = (arr) => {
	let copy = arr;
	arr.forEach((val) => {
		copy = appendToNew(copy, val);
	})
	return copy;
}

console.log(copyArray([1, 3, 4]));

//Answer: O(n^2), where n is the number of elements in the array. The first call to appendToNew takes 1 copy. The second call takes 2 copies. The third call takes 3 copies. And so on. The total time will be the sum of 1 through n, which is O(n^2). Another way to look at it is a nested for loop, where each loop is dependent on the length of arr, and the copy of the arr.