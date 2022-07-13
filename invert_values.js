// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// We're taking in an array of numbers. Each is an integer. No strings or special chars? Zero?
// We'll be returning an unmutated array of numbers, inverted from negative / positive. Print to the console?
// ex - [2, 5, 0, 1] would return [-2, -5, 0, -1]
// 1. I think we can use map() to iterate through the array 2. We can use conditionals to specify negative or positive 3. We can place a - symbol in front of each array element

const invert = array =>
  array
  .map(a => 
       -a)