// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

// !! So, for parameters, the program will be taking in array. Will it always be an array? Will the array ever only contain string elements? Should I account for 0, NaN, null?
// !! And we want to return an index, plus the 'found the needle at' string?
// !! For example, in the array ['passport', 'blanket', 'needle'], we would expect to see "Found the needle at position 3", correct?
// !! 1. Need to search the array 2. Need to find the string "needle" specifically 3. Need to return an index

function findNeedle(haystack) {
    return `found the needle at position ${haystack.findIndex('needle')}`;
  }