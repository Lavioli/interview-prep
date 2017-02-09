//What is the runtime for calculating the Nth Fibonacci number?

const fib = (n) => {
	if (n <= 0) return 0;
	else if (n == 1) return 1;
	return fib(n - 1) + fib (n-2);
}

/*
Answer: The runtime would be less than O(2^n). For recursive calls, we can use the O(branches^depth) pattern. Since there are 2 branches per call, and we go as deep as n, therefore, the runtime is O(2^n).
*/