// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications.

// So we're taking in an array, it may contain zeroes and positive and negative integers, duplicates are possible
// We'll be returning an integer, the maximum sum of three integers. Can I print to the console?
// For example, [3,2,6,8,2,3] would return 17
// [2,1,8,0,6,4,8,6,2,4] would return 18
// [-7,12,-7,29,-5,0,-7,0,0,29] would return 41
// I think I could solve this pretty easily using the Set object, .sort() and returning the sum of the first 3 elements in the array, not the most efficient but let's try:

const maxTriSum = function(numbers) {
    const uniqueNumsSorted = 
    [...new Set(numbers)]
        .sort((a, b) => b - a);
    return uniqueNumsSorted[0] + uniqueNumsSorted[1] + uniqueNumsSorted[2];
  }

// After looking at the solutions, I saw that you can use array destructuring to simplify the code (still inefficient tho) like this:

const maxTriplSum = function(numbers) {
    const [num1, num2, num3] = [...new Set(numbers)].sort((a, b) => b - a);
    return num1 + num2 + num3;
}