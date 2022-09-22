// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). 

// So we're taking in an array containing only positive integers
// We'll be returning an integer, the smallest possible combination of unique numbers taken from the input. Can I print to the console?
// For example, [3, 4, 3, 6, 1, 11, 3] should return 134611
// I'm thinking we can use .sort() and Set, convert to strings and then use .join() let's see

const minValue = values =>
    Number(
      [...new Set(values)]
      .sort((a, b) => a - b)
      .join('')
    );