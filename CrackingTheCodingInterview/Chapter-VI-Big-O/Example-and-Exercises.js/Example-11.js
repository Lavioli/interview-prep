// The following code computers n!. What is its time complexity? 
const factorial = (n) => {
	if ( n < 0) {
		return -1;
	} else if (n == 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

// This will take O(n) linear time. This is a straight recursion that akes from n to n-1 to n-2 and then down to 1. 