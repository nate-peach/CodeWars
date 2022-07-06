// Your task is to write function findSum.
// Up to and including n, this function will return the sum of all multiples of 3 and 5.

// So we are taking in an integer. Only integers? Zero? Undefined / NaN / null?
// We're returning an integer, the sum of all multiples of 3 and 5 up to input integer. Can I print to the console?
// For example, if we input 10, we would output 33
// 1. We must determine if a number is a multiple of 3 / 5  2. We must add the number to a running total

function findSum(n) {
    let multiples = 0;
      for (let i = 0; i <= n; i++){
        if(i % 3 == 0 || i % 5 == 0) {
          multiples += i;
        }
      }
     return multiples;
  }