//The following code sums the digits in a number. What is its big O time?
const sumDigits = (n) => {
	let sum = 0;
	while (n > 0) {
		sum += n % 10;
		n /= 10;
	}
	return sum;
}

//Answer: O(log n), the runtime will be the number of digits in the number. A number with d digits can have a value up to 10^d. If n = 10^d, then d = log n. therefore, the runtime is O(log n).