// Your task is to make a function that can take any non-negative integer as an argument 
// and return it with its digits in descending order. Essentially, rearrange the digits to 
// create the highest possible number.

// So we're taking in an integer. This is a number object? No strings or special characters? Any null, NaN, or undefined?
// We're returning an integer? This is the same digits, but the order is rearranged? Can we print to the console?
// For example, if we input 19577, we'd return 97751?
// 1. Turn input into string 2. Sort the number into descending order 3. Turn back into a number 

const descendingOrder = n =>
  Number(
    n.toString()
      .split('')
        .sort()
          .reverse()
            .join(''));