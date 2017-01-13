//Which of the following are equivalent to O(N)? Why?

/*
1. O(N + P), where P < N/2
2. O(2N)
3. O(N + log N)
4. O(N + M)
*/


/*
Answer: 
1. O(N), because it is same as O(N + N/2), which is still O(N) overall becasue we drop the non-dominant term.
2. O(N) because we drop the constant.
3. O(N) because O(N) dominates O(log N), so we drop the non-dominant term.
4. O(N + M), since there is no established relationship (such as what M is interms of N?) between both variables. 
 */