// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// We'll be taking in an array with multiple sub arrays, all elements in subarrays are numbers or empty. Will we see duplicates, and does that matter?
// We'll be returning a new array with all the elements of all subarrays in a single array, and sorted in ascending order. Can I print to the console?
// Example: [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]] should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
// I know we can use .flat() for this, and .sort() of course

const flattenAndSort = array =>
    array.flat().sort((a, b) => a - b);

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))