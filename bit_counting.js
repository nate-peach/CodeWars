// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// So we're taking in a non-negative integer. got it
// We'll return an integer, the number of '1s' in the binary representation of the input. Can I print to the console?
// For example, an input of 1234 is 10011010010 in binary, so we'd return 5
// 1. i think first we have to convert the input to binary 2. then we should be able to use .reduce() to determine the number of '1s'

var countBits = function(n) {
    let binaryNumber = [];

    for (let i = n; i > 0; i = Math.floor(i / 2)) {
         binaryNumber.unshift(i % 2);
      }
      
    return n == 0 ? 0 : 
    binaryNumber.reduce((sum, count) => 
    sum + count);
  };