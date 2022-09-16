// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// We'll be taking in an array of integers with an even length, integers only
// We'll be returning the lowest value obtained from summing each two integers' product. Can I print to the console?
// Ex. [12,6,10,26,3,24] would return 342, [9,2,8,7,5,4,0,6] would return 74
// 1. I've realized that the product of the smallest and largest values in the array, when added together, will always return the lowest sum 2. I think there are several ways to target the smallest & largest values, but I came up with sorting the array 3. then using .shift() and .pop() 

const minSum = function(arr) {
    const sortedNums = arr.sort((a, b) => a - b);
    let smallestSum = 0;
    for (let i = 1; i <= arr.length / 2; i++) {
    smallestSum += sortedNums[i - 1] * sortedNums[arr.length - i]
    }
  return smallestSum;
};

// not a big fan of the solution, but it works! After looking at other solutions, found that the for loop can be replaced with a while loop, letting my .pop() .shift() idea to work, simply: while(arr.length) smallestSum += sortedNums.pop() * sortedNums.shift();