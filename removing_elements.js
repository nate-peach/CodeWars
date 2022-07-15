// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that

// So we'll take in an array of strings? Numbers? 
// We'll return an array with every other element removed. Can we print to the console?
// For example, [3, 6, 'nate', 1, 0] would return [3, 'nate', 0]
// 1. We can use map() or a loop to move through the array 2. think we can use indexOf() to select odd indices

function removeEveryOther(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 == 0) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }