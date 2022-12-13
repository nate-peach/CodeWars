// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// input is array of integers, ever anything else? only single digits? what is input size?
// return is boolean, false if elements are unique, true otherwise. Print to console?
// will try Set approach first, then hash map

const containsDuplicate = nums => {
    return new Set(nums) != nums;
}

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
// containsDuplicate([1, 3, 8, 2, 0, 7, 12]))
// containsDuplicate([1,2,3,4]))