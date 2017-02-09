//The following code prints all the strings of length k, where the characters are in sorted order. It does this by generating all strings of length k and then checking if each is sorted. what is its runtime?
const sumDigits = (n) => {
	let sum = 0;
	while (n > 0) {
		sum += n % 10;
		n /= 10;
	}
	return sum;
}

//Answer: O(log n), the runtime will be the number of digits in the number. A number with d digits can have a value up to 10^d. If n = 10^d, then d = log n. therefore, the runtime is O(log n).