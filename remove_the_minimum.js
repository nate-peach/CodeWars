// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// We're taking in an array of integers. Only positive? Random order?
// We're returning a new array with the lowest number removed, keeping all the other numbers in their original positions. Can I print to the console?
// For example, [50, 4, 2, 5] would return [50, 4, 5]
// 1. I think we can use Math.min() 2. And in combination with ... (spread) syntax, should be able to select just the smallest value

function removeSmallest(numbers) {
    let newArray = [];
    for (let i = 0; i < numbers.length; i++) {
      if (i !== numbers.indexOf(
        Math.min(...numbers)
    )) {
        newArray.push(numbers[i]);
      }
    }
    return newArray;
  }
    
// Ended up approching a bit differently, used a variable, conditional, and a loop as well. Was getting an undefined value when trying to use .map()