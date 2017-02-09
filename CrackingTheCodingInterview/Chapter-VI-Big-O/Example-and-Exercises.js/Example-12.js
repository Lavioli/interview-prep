//This code counts all permutation of a string
let permutation = (str, prefix) => {
	if(str.length == 0) {
		console.log(prefix);
	} else {
		for(let i = 0; i < str.length; i++) {
			let rem = str.substring(0, i) + str.substring(i + 1);
			permutation(rem, prefix + str.charAt(i));
		}
	}
}

let takePermutation = (str) => {
	permutation(str, "");
}

takePermutation("love");

/*
The amount of times permutation function is called in the base case would be O(n!) times. Each time a letter from the string gets called, the next available combination will be n-1 and keeps on going on until you reach 1.

Amount of times permutation is called before it's base case(line 6 - 8) which is mostly O(n) time, since for each letter, the subtring/charAt function is called, it should be O(n * n!) time.

The amount of time that each function will take will be O(n) time. O(n) for line 3, and also O(n) for line 7-8. Each node in the call tree will correspond to O(n) work.

The total runtime will not exceed O(n^2 * n!), since we are calling permutation O(n * n!) times, and each one call takes O(n) time. 

*/