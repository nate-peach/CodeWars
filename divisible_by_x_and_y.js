// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// We're taking in 3 numbers, as mentioned, positive, non-zero. Are they integers?
// We're returning a boolean, if the first number is divisible by both the 2nd and 3rd numbers. Can I print to the console?
// For example: if we input 10, 5, 2 we would return true. 4, 9, 1 would return false I believe.
// 1. We need a conditional that uses modulus

const isDivisible = function(n, x, y) {
    if (n % x == 0 && 
        n % y == 0) {
      return true;
    }
    else {
      return false;
    }
  }