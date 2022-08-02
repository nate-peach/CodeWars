// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// So we're taking in two numbers, integers? Is there a max number?
// We'll be returning a number, the sum of the two inputs, converted to binary. Can we print to the console?
// For example, 8 & 6 would return '0110'
// 1. The formula for determining a binary number is num / 2, rounded down, mark the remainder, and continue until num rounded down = 0 2. Put our formula in the body of a loop 3. Use modulus and a variable to store our remainders

function addBinary(a, b) {
    let binaryString = '';
    for (let i = a + b;
         i > 0; 
         i = Math.floor(i / 2)) {
         binaryString = (i % 2) + binaryString;
      }
    return binaryString;
  }