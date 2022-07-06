// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// !! We'll be taking in an array of numbers. Each number will be unique and in ascending order
// !! We'll be returning null squared if the whole array is consecutive, but we'll return the first non-consecutive number if otherwise.
// !! For example, for [1, 2, 3, 4] we'd return null squared. For [1, 2, 6] we'd return 6.
// !! 1. We need a way to determine if a number is consecutive or not 2. We need to do that with each number in the array 3. We need to figure out how to return null squared, and a non-consecutive number.

function firstNonConsecutive (arr) {
    for (let i = 0; i <= arr.length; i++) {
      if (i === arr.length - 1) {
        return null;
      }
      else if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1];
      }
    }
  };