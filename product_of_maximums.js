// Given an array/list [] of integers , Find the product of the k maximal numbers.

// So we're taking two inputs 1 - an array, which will contain positive and negative integers, and possibly zero. Numbers may repeat. 2 - an integer, which represents how many numbers in the array to multiply
// We'll be returning the largest product possible with k numbers in the array. Can I print to the console?
// For example, ([8, 10 , 9, 7], 3) would return 720, ([-4, -27, -15, -6, -1], 2) would return 4
// I think .sort() is a must here, and then use a loop that runs k times

const maxProduct = function(numbers, size) {
    const sortedNums = numbers.sort((a, b) => b - a);
    let product = 1;
    for (let i = 0; i < size; i++) {
        product *= sortedNums[i];
    }
    return product;
  }