// Complete the solution so that it reverses all of the words within the string passed in. 

// We are taking in a string. String contains multiples words. Will we ever see special chars or digits?
// We're returning a string. It'll contain the original data, but reversed. Can we print to the console?
// For example, 'the quick brown fox' returns 'xof nworb kciuq eht'
// 1. We have to select words 2. We have to reverse them

const reverseWords = str => 
  str.split(' ')
  .reverse()
   .join(' ');