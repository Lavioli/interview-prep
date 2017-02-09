#DEFINITION
Big O is a language used to describe efficiency/time complexity of data structure algorithms. It can be used to predict if an algorithm is fast or slow at best, average, and worst cases.

#Types of Time Complexity or runtime#

##O(1) Constant
Constant time complexity with respect to the size or number of items. 
Ex: It will take the same amount time to send a large or small chunk of files over to someone. It will take the same amount of time to manipulate an array with 100,000 elements or 10 elements.

##O(n) Linear
Linear time complexity with respect to the size or number of items.
Ex: It will take double the amount of time to manipulate twice amount of information.

*Regardless of how big the constant is or how slow the linear is, O(n)'s slope will surpass constant, in which more information will take more time to process in the O(n) case compared to O(1).

##O(log(n)) Logarithmic
Logarithmic time complexity with respect to size or number of items. 
There isn't much of a difference in time as size increases, time increases in a non-linear, and much slower/steader rate towards the end(almost like a constant and linear). 
Ex: Binary Search Trees are used in this matter (see "Log N Runtimes" below)

##More Big O Examples
* O(1) - Determining if a number is even or odd; using a constant-size lookup table or hash table

* O(log n) - Finding an item in a sorted array with a binary search (finding a name in a telephone book since it's sorted - binary search)

* O(n) - Finding an item in an unsorted list; adding two n-digit numbers (finding a name in a telephone book iteratively given a phone number). Memorization and is used to optimize exponential time recursive algoritms (see example 15)

* O(n^2) - Multiplying two n-digit numbers by a simple algorithm; adding two n×n matrices; bubble sort or insertion sort

* O(n^3) - Multiplying two n×n matrices by simple algorithm

* O(c^n) - Finding the (exact) solution to the traveling salesman problem using dynamic programming; determining if two logical statements are equivalent using brute force. Multiple recursive calls are usually exponential runtime.

* O(n!) - Solving the traveling salesman problem via brute-force search

* O(n^n) - Often used instead of O(n!) to derive simpler formulas for asymptotic complexity

#Space Complexity
Similar to Time Complexity, it evaluates how much space or memory is required by an algorithm.
Ex: An array with size of n will require O(n) of space, where as a two-dimensional array of size nxn will require O(n^2) space.

#Runtime/SpaceTime Comparisons
##Drop the Constants
    * Dropping the Constants when comparing O(N) and above runtimes. 
    * When comparing a single for loop vs. nested for loop, O(N) is not always better than O(N^2)
##Drop the Non-Dominant Terms
    * In O(N^2 + N), drop the non-dominant N, so that it becomes O(N^2).
    * O(N + log N) becomes O(N).
    * O(5*2^N + 1000N^100) becomes O(2^N).
    * Runtime Hierarchy (from best to worst): 
        ** O(log x)
        ** O(x)
        ** O(x log x)
        ** O(x^2)
        ** O(2^x)
        ** O(x!)
        ** O(x^x)
        ** O(2^x * x!)
##When to ADD or MULTIPLY runtimes?
    * __ADD__ when the algorithm is "do this, then, when you're all done, do that".
    * __MULTIPLY__ when the algorithm is "do this for each time you do that"


##Amortized Time O(n)+
    * Happens when execution time if not guaranteed. Amortized means "average time taken per operation, if you do many operations". It does not have to be constant, and can have linear and logarithmic amortized time etc.
    
    Ex: In ArrayLists, or dynamic resizing array, where array can contain N elements, and then inserting a new element will take O(N) time. When it's full, you will have to create a new array with size 2N and copy N elements over, which will take O(N) time. However, this happens rarely, so the majority of the time, the insertion would be O(1) instead. Therefore, in the long term, the total time taken for the insertion would be O(x), and amortized time (e.g. time per insertion) would be O(1).

##Log N Runtimes
    * When number of elements in the problem space gets halved each time, it will be a O(log N) time. This is due to the total run time is a matter of how many steps we take until it is down to the one element that we are looking for.
    *In __Binary Search Trees__, the runtime is O(log N) because we comepare x to the midpoint of an array, and then we go either left or right. When we half the nodes on each side, we cut the problem space in half. 

##Recursive Runtimes
    * A recursive function that makes multiple calls will have a runtime where the branches is the number of times each recursive call branches out, which would be O(2^n).
    * The space complexity in Recursive Runtimes would be O(N), due to only O(N) nodes exists at a given time in a O(2N) nodes tree.



