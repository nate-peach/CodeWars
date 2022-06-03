// Create a function that takes 2 integers in form of a string as an input, and outputs the sum 
// (also as a string)

// !! We are going to take in 2 integers in string format
// !! We're going to return a single integer in string format
// !! For example, if we pass in '8' and '3', we would return '11'
// !! 1. We need to add the two integers together as numbers 2. We need to keep them as strings during the process, or turn them into from string > number > string and return that string

const sumOfStrings = (num1, num2) => String(Number(num1) + Number(num2));