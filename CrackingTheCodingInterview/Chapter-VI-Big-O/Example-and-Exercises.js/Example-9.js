/*
The following simple code sums the values of all the nodes in a balanced binary search tree. What is its runtime?
*/

const sum = (node) => {
	if(node == null) {
		return 0;
	}
	return sum(node.left) + node.value + sum(node.right);
}

/*Answer: This will take O(N) linear time.
The code touches each node in the tree once and does a constant time amount of work with each "touch", excluding recursive calls.
*/