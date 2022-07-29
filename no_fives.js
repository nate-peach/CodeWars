// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// We're taking in two integers. Only integers? Negatives? Will the first number always be less than the second?
// We're returning all integers between the two inputs, except for any numbers with 5. Can we print to the console?
// Ex. 1, 10 would return 1, 2, 3, 4, 6, 7, 8, 9, 10
// 1. We need to return many numbers 2. We need to exclude all 5s

function dontGiveMeFive(start, end) {
    let numCount = 0;
    for (let i = start; i <= end; i++) {
        if (`${i}`.split('').includes('5') == false)  {
          numCount++;
        }
    }
    return numCount;
  }