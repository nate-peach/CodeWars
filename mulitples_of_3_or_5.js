// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// We're taking in a single integer. Could be negative or zero.
// We want to return the sum of all the multiples of 3 or 5 that exist below the input. If input is negative or zero, return 0. Just to reiterate, if a number is a multiple of both 3 and 5, only add it to the sum one time. Can I print to the console?
// For example, if the input is 12, we would return the number 47
// 1. Determine if a number is a multiple of 3 or 5  2. We then add that number to a running total, but only once 3. 

function solution(number){
    let sumOfMultiples = 0;
    for (let i = 0; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sumOfMultiples += i;
      }
    }
    return sumOfMultiples;
  }