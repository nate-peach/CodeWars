// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// So we'll be taking in an array of numbers (integers). Will we ever see anything other than integers?
// We'll be returning the element that contains the most digits. Can I print to the console?
// For example, [9000, 8, 800] would return 9000
// Not totally sure, but I think Math.max() would work here (won't work since )

function findLongest(array){
    return array.sort((a, b) => a + b)[0];
  };

console.log(findLongest([9000, 8, 800]))