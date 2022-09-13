// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// So we're taking in two parameters, one is an array of integers in random order, the other is an integer.
// We'll be returning an array of two integers, the indices of the two numbers in the input array that when added together equal the input integer. Will there ever be more than two integers whose sum equals the input? Are the inputs random? Can I print to the console?
// For example, ([2,2,3], 4) would return [0, 1] & ([1, 2, 3], 4) returns [0, 2]
// 1. I think the way that I'll approach this is to select one integer in the array and add it to each following integer, using a conditional to check if the sum equals the input at each iteration. I think I can use two loops and a variable for this

const twoSum = function(numbers, target) {
    let indices = [];
    for (let i = 0; i < numbers.length && indices.length < 2; i++) {
        for (let j = i + 1; j < numbers.length && indices.length < 2; j++) {
            if (numbers[i] + numbers[j] == target) {
                indices.push(i, j);
            }
        }
    }
    return indices;
  }