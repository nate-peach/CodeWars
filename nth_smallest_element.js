// Given an array/list [] of integers , Find the Nth smallest element in this array of integers

// We'll be taking in an array of at least 3 elements, may include positive & negative integers, and zero. We'll also be inputting a single integer, representing which number in the array to return
// We'll be returning an integer, which integer will depend on the second parameter of our function. Can I print to the console?
// For example: ([3,1,2], 2) would return 2
//   ([15,20,7,10,4,3], 3) would return 7
//   ([2,169,13,-5,0,-1], 4) would return 2 
//   ([177,225,243,-169,-12,-5,2,92], 5) would return 92
// A simple, yet inefficient solution would be to use .sort() and then just return the item in the nth index - 1

const nthSmallest = (arr, pos) =>
    arr.sort((a, b) => a - b)[pos - 1];

function ithSmallest(arr, pos){
    const a = arr;
    let n;
    // for (let i = 0 ; i<pos; i++) {
    //   n = Math.min(...a)
    //   a[a.indexOf(n)] = Number.MAX_SAFE_INTEGER;
    // }
    return a.splice(2, 1);
  }

console.log(ithSmallest([177,225,243,-169,-12,-5,2,92], 5))