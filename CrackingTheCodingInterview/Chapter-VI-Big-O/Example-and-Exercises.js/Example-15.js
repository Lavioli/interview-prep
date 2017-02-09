/*
The following code prints all Fibonacci numbers from 0 to n. However, this time, it stores (i.e. caches) previous computed values in an integer array. If it has already been computed, it just returns the cache. What is the runtime?
*/

const allFib = (n) => {
	let memo = [n + 1];
	for(let i = 0; i < n; i++) {
		console.log(i + ": " + fib(i, memo));
	}
}

const fib = (n, memo) => {
	if (n <= 0) return 0;
	else if (n == 1) return 1;
	else if (memo[n] > 0) return memo[n];
	memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
	return memo[n];
}

allFib(6);

/*
OUTPUT:
0: 0
1: 1
2: 1
3: 2
4: 3
5: 5

fib(0) -> return 0
fib(1) -> return 1
fib(2)
	fib(1) -> return 1
	fib(0) -> return 0
	store 1 at memo[2]
fib(3) 
	fib(2) -> lookup memo[2] -> return 1
	fib(1) -> return 1
	store 2 at memo[3]
fib(4)
	fib(3) -> lookup memo[3] -> return 2
	fib(2) -> lookup memo[2] -> return 1
	store 3 at memo[4]
fib(5)
	fib(4) -> lookup memo[4] -> return 3
	fib(3) -> lookup memo[3] -> return 2
	store 5 at memo[5]

At each call to fib(i), we have computed and stored the value of fib(i - 1) in fib(i-2). We look up the values, sum them, and then store the new result and then return. 

Answer: This will take O(n) time. This common technique is called memorization and is used to optimize exponential time recursive algoritms.
*/

