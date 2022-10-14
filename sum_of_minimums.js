// Given a two dimensional array, return the sum of the minimum values of each sub array.

// Input will be an array of sub arrays. will we ever see an empty input or nested arrays containing other primitives? 
// We'll be returning an integer. Sum of minimum values of each array
// For example [[3, 6, 1, 8], [5, 9, 0, 1, 4], [13, 11, 10, 15, 9]] (1 + 0 + 9)
// 1. Set up variable for sum 2. Create for loop to go through input arr 3. Use Math.min to find lowest value

function minimumSum(subArrays) {
    let sumTracker = 0;
    for (let sub of subArrays) {
        sumTracker += Math.min(...sub);
    }
    return sumTracker;
}
console.log(minimumSum([[3, 6, 2, 8], [5, 9, 2, 3, 4], [13, 11, 10, 15, 9]]))