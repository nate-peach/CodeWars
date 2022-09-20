// Given an array of integers, create a function that iterates through the array, returning the product of each element EXECPT the element that's being iterated over. Output should be an array.

// So we'll be taking in an array of positive integers, some may repeat.
// We'll be returning an array, can I print to the console?
// For example, [12,20] would return [20,12]
//  [1,5,2] would return [10,2,5]
//  [10,3,5,6,2] return would [180,600,360,300,900]
// I want to try a .map() and .reduce() solution, but not sure how to invoke .reduce() in that way. Going to start with a for loop approach

const productArray = numbers => numbers
    .map(num => numbers
        .reduce((a, b) => 
        a * b) / num
    );

// Decided to look at the solution for this one, was really overthinking it. I was on the right track with map and reduce, just didn't think to divide