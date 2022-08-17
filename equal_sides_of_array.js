// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// So we're taking in an array, it will contain only integers (positive or negative), the length will be > 0 and < 1000
// We'll be returning a single integer, the index where the sum of the left side is equal to the sum of the right side. Can I print to the console?
// For example, [1,2,3,4,3,2,1] would return 3 because at the 3rd position of the array, the sum of the left side of the array (1,2,3) and the sum of the right side (3,2,1) both equal 6. [1,100,50,-51,1,1] would return 1, and [20,10,-80,10,10,15,35] would return 0.
// Difficult for me to think of a way to solve this, but right now the only thing I can think of is to have two loops that start adding numbers at opposite ends of the array, and meet at some point

