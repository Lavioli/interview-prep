//What is the time complexity for the algorithm that prints all Fibonacci numbers from 0 - n?

const allFib = (n) => {
	for (let i = 0; i < n; i++) {
		console.log(i + ": " + fib(i));
	}

	const fib = (n) => {
		if (n <= 0) return 0;
		else if (n == 1) return 1;
		return fib(n - 1) + fib(n - 2);
	}
}

/*
Answer: The total runtime would only be O(2^n). This is because we have to consider what value of n is. When we walk through each call in the recursion:

fib(1) -> 2^1 steps
fib(2) -> 2^2 steps
fib(3) -> 2^3 steps
...
fib(n) -> 2^n steps

The total amount of work would be 2^1 + 2^2 + 2^3 ... + 2^n.
The runtime to compute the first n Fibonacci numbers is still O(2^n).
*/