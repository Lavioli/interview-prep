#Arrays

    * Definition: A data stucture that can store elements of the same type. It is usually identified in **indexes**, which are containers for the elements in the array. In javascript, arrays are resizable arrays. 

    * Usage:
```
        let myArr = ["first", "second"];
        myArr[2] = "third";
        //myArr = [["first", "second"], "third"]
```

##Big O Notation
    * An element of an array can be accessed in constant time O(1).

##Resizable Array
    * It is O(1) or constant time in terms of indexing, due to the length of the array is constant.
    * It is also resizable, meaning it can also grow when necessary.
    * The con is that it is slow, but it is rare to hit capacity.

