// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// We're taking in an array, with only integers, where all values are the same except for a single item. The items appear in random order
// We're returning the single odd number out. Can we print to the console?
// For example, if we take in [4, 4, 4, 5, 4, 4, 4], we'd return 5
// 1. I think we can use .sort() 2. And we can use a conditional to return either the first or last item in the array

function stray(numbers) {
    numbers = numbers.sort();
    const lastNumber = numbers.length - 1;
    if (numbers[0] !== numbers[1]) {
      return numbers[0]
    }
    else if (numbers[1] !== numbers[lastNumber]) {
      return numbers[lastNumber]
    }
  }