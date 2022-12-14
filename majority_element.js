// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// input is array of integers, no other data types? anything other than array / falsy values?
// output is integer, the element that appears more than array.length / 2. will there be more than one majority elements? print to console ok?
// majorityElement([1, 2, 3, 4, 1, 1, 1])
// majorityElement([5, 4, 5, 4, 5, 1, 2, 4])
// majorityElement([9, 12, 43, 9, 43, 12, 9, 9, 9])
// could find solutions with Set perhaps, but object solution seems easier. 1) create empty obj  2) set up key / values  3) return value that's > numArray.length / 2

const majorityElement = numArray => {
    let numObj = {};

    for (const num of numArray) {
        if (numObj[num])
            numObj[num]++;
        else
            numObj[num] = 1;
        numObj[num] > numArray.length / 2
    }

    return Object.keys(numObj)[0];
}

console.log(majorityElement([5, 4, 5, 4, 5, 1, 2, 4]))