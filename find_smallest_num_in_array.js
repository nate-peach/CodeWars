// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// !! So, our function will only be taking in an array? And the array will never be empty and will only ever have integers?
// !! And we want to be returning a number? Could that number be printed to console or just returned?
// !! For example, say I call this function returnsSmallestInteger([45, -3, 0, 6, 1]), I would want to see -3 returned?
// !! So first 1. The program will need to search the array 2. Determine how large a number is based on other numbers in the array. 3. Return the smallest number

function returnsSmallestInteger(intArray) {
   intArray.sort(function(a, b) {
       return a - b } );
       return intArray[0];
   
}
