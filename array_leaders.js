// An element is leader if it is greater than The Sum all the elements to its right side.

// Given an array/list [] of integers , Find all the LEADERS in the array.

// So we're taking in an array of integers, including positives, negatives, and zeroes
// We'll be returning an array including any element that's greater than the sum of all elements to its right. The output elements should be in the same order as they were in the input. Can I print to the console?
// For example, [16, 17, 4, 3, 5, 2] would return [17, 5, 2]  [1, 2, 3, 4, 0] would return [4]
// 1. I think I can use .reduce() to put the sum of the array in a variable 2. Then use a loop and conditional

const arrayLeaders = function(numbers) {
    let leaders = [];
    let numSum = numbers.reduce((a, b) => a + b);

    for (let i = 0; i < numbers.length; i++) {
        numSum -= numbers[i];
        if (numbers[i] > numSum) 
            leaders.push(numbers[i]);
    }

    return leaders;
  }