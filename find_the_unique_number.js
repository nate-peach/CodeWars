// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// It’s guaranteed that the array will contain at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// We'll be taking in an array, the array will only contain numbers, no strings. May contain floats. Will always have at least 3 numbers.
// We'll be returning the single unique number in the array. Can I print to the console?
// For example: [ 1, 1, 1, 2, 1, 1 ] should return 2, [ 0, 0, 0.55, 0, 0 ] should return 0.55
// 1. Need to think of a way to find the single unique number, can use the .indexOf() and .lastIndexOf() combo, and a loop + conditional

const findUniq = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i]))
            return arr[i];
    }
  };

// Could also use .find() in this challenge:

// const findUniq = arr =>
//   arr.find(number => 
//     arr.indexOf(number) == 
//     arr.lastIndexOf(number)
// );