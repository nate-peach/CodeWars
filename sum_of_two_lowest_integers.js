// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// !! For the parameter, it will always be an array? It will never be zero? will the array ever have anything other than integers?
// !! And returns, we want to return a single integer? A direct return or console.log?
// !! As an example, if the array [2, 5, 8, 1, 0] is inputted, then we would see the number 1 returned?
// !! 1. We must search the parameter somehow 2. Determine the two lowest nums 3. Add the two together

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];
  }