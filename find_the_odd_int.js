// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// So we're taking in an array, which contains only integers, and one integer out of all of them will appear an odd number of times
// We're returning an integer, the one that appears an odd number of times. Can we print to the console?
// For example, [0,1,0,1,0] should return 0, because it occurs 3 times
// 1. We need a way to find how many times a value appears, which we might be able to do with .length(), but I think we need something less brute force

function findOdd(A) {
    let numCount = 1;
    A = A.sort();
    for (let i = 0; i < A.length; i++, numCount++) {
      if (A[i] !== A[i + 1] && numCount % 2 !== 0) {
        return A[i];
      }
      else if (A[i] !== A[i + 1] && numCount % 2 == 0) {
        numCount = 0;
      }
    }
  }