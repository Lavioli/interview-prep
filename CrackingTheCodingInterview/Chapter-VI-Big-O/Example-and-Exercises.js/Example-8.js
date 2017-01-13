/*
Suppose we had an algorithm that took in an array of strings, sorted each string, and then sorted the full array. What would it be?

Let s be the length of the longest string
let a be the length of the array

1. Sorting each string would be O(s log s) - each string takes O(S), and sorting (probably with binary tree) takes O(log s) time.
2. And for every string that we have (there are a strings), we have to sort them as well, which is O(a*s log s).
3. Now we have to sort all the strings, which we gave take into account that we have to compare the strings. Each string comparison takes O(s) time. There are O(a log a) comparisons, therefore this will take O(a*s log a) time.

Adding the 2 parts will give O(a*s(log a + log s)) runtime.

*/