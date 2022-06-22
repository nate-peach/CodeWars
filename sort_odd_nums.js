// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// !! So we'll be taking in an array of integers. I'd want to ask, will the array only contain integers? Would we see zero or negative numbers? Are they placed randomly in the array? Would the array ever be empty?
// !! We'll be returning an array. That array will have all the original integers, but be sorted in a different way.
// !! For example, [8, 5, 1, 7, 13] would we expect to see [8, 1, 5, 7, 13]
// !! 1. To interact with only odd nums, we could use numArray[i] % 2 == 1  2. I feel like sort() will help us move the odds around

function sortArray(array) {
    let odds = [];
    
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0) {
        odds.push(array[i]);
      }
    }
    
    odds.sort((a, b) => a - b);
    
    for (let j = 0; j < array.length; j++) {
      if (array[j] % 2 !== 0) {
        array[j] = odds.shift();
      }
    }
   return array;
  }