// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// input is array of integers, no other data types
// return is single integer, max sum possible with sequential ints
// Ex: nums = [1] => 1
//     nums = [5,4,-1,7,8] => 23
//     nums = [-2,1,-3,4,-1,2,1,-5,4] => 6 (4,-1,2,1)
// Had to look this one up, O(n) solution is something called Kadane's alg. Set up two variables, both to track a sum. First tracks max sum, starts at -Infinity. Second tracks sum of iterable, starts at 0. Set up loop, each iteration add current int to variable - if that variable is greater than max sum variable, reassign max sum to value of sum, then if sum falls below zero, reassign sum to 0. At the end return max sum variable.

const maxSubArray = nums => {
    let maxSum = nums[0];
    let sum = 0;

    for (const int of nums) {
        sum += int;
        if (sum > maxSum)
            maxSum = sum;
        if (sum < 0)
            sum = 0;
    }
    return maxSum;
};