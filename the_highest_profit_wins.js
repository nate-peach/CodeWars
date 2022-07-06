// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

// !! So the input will always be an array? Will it ever be anything other than an array? Would it ever be zero / null / undefined? Will the array ever get an array with an element other than a number?
// !! And we want the program to return two numbers?
// !! For example, if the function returnsMinAndMaxNumbers([5, 4, 8, 10, 1]), we would expect our function to return [1, 10]?
// !! 1. We need to search the array. We need to determine the lowerst and highest value numbers in the array, compared to the other numbers. 3. We need to create a new array with the two numbers and return it.

function minMax(arr){
    const sortedArr = arr.sort((a, b) => a - b);
    let highestAndLowestNums = [];
    if (sortedArr.length === 1) {
    highestAndLowestNums.push(sortedArr[0]);
    highestAndLowestNums.push(sortedArr[0]);
      return highestAndLowestNums
    }
    else{
    highestAndLowestNums.push(sortedArr.shift());
    highestAndLowestNums.push(sortedArr.pop());
    return highestAndLowestNums;
      }
  }