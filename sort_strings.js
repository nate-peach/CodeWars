// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// Our parameter will be an array, containing strings only it sounds like. 
// We will return an array containing these strings, but sorted.
// For example, if we took in ['big', 'small', 'medium', 'telephone', 'glasses'] we would expect to return ['big'...]
// 1. We need to create a set of instructions 2. We need to repeat these instructions for each element 3. We need to return an array

const sortStrings = str => str.sort((a,b) => a.length - b.length);