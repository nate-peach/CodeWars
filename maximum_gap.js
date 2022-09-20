// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

// So we're taking in an array of positive and negative integers, zero, will contain at least 3 elements.
// We'll be returning the maximum difference between successive elements after array is sorted. Can I print to the console?
// For example [13,10,5,2,9] would return (4)
// maxGap [-3,-27,-4,-2] would return (23)
// maxGap [-7,-42,-809,-14,-12] would return (767)
// So I'm thinking that I can use .sort() .map() and Math.max() to solve this one let's see


const maxGap = function(numbers) {
    const sortedNums = numbers.sort((a, b) => b - a);
    const differences = sortedNums.map((num, index, array) => 
        num - array[index + 1])
        .slice(0, -1);
    
    return Math.max(...differences);
  };

// Worked pretty well, but had to use .slice() to remove the last element, not the prettiest. More simplified code I saw on another user's solution:

const maximumGap = numbers =>
  numbers.sort((a, b) => b - a)
    .reduce((previousValue, currentValue, index) => {
        let difference = currentValue - numbers[index + 1];
        if (difference > previousValue)
            previousValue = difference;
        return previousValue;
    }, 0);