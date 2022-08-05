// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// We're taking in a string of multiple words seperated by spaces. 
// We'll be returning the same string of words, but the order of the letters appear should be reversed. Should the string be mutated or should I return a new string? Can I print to the console?
// For example: "double  spaces" would return "elbuod  secaps"
// 1. I think we can use a combination of .map() and .reverse() 2. Maybe .join(" ") will insert the spaces? (seems pretty simple by combining the methods)

const reverseWords = str =>
  str.split(' ')
     .map(a => 
          a.split('')
           .reverse()
           .join(''))
     .join(' ');