// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// So we're taking in an array of integers, may contain positives, negatives, and zero
// We'll be returning an integer, the largest product that can be obtained from multiplaying two adjacent numbers. Can I print to the console?
// Examples: [1, 2, 3] would  return 6
//   [9, 5, 10, 2, 24, -1, -48] would  return 50
//   [-23, 4, -5, 99, -27, 329, -2, 7, -921] would return -14
// Going to try using a variation of .reduce() I used in solution for a different kata

const adjacentElementsProduct = array => array
    .reduce((previousValue, currentValue, index) => {
        let product = currentValue * array[index + 1];
        if (product > previousValue)
            previousValue = product;
    return previousValue;
    }, -Infinity);