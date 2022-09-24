// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

// We'll be inputting an array AND an integer. The array will contain only positive nums, duplicates are possible.
// We'll be returning the number of times you must add the two smallest numbers in the array to equal the input integer. Can I print to the console?
//   For example, ([1, 10, 12, 9, 2, 3], 6)  would return 2
//   ([8 , 9, 4, 2], 23)  would return 3
//   ([19,98,69,28,75,45,17,98,67], 464)  would return 8
// Should be pretty simple to solve with .sort() and a loop I think

const minimumSteps = function(numbers, value) {
    const sortedNums = numbers.sort((a, b) => a - b);
    let sumOfSmallestNums = 0;
    for (var i = 0; sumOfSmallestNums < value; i++) {
        sumOfSmallestNums += sortedNums[i];
    }
    return i - 1;
  }
  console.log(minimumSteps([1, 10, 12, 9, 2, 3], 6));