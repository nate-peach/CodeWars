/**
 * input - array of integers. pos/neg/zero. May contain duplicates, and dupes will be considered unique. Only truthy values?
 * output - array or array of subarrays with 3 integers, pos/neg/zero. Any 3 unique sNums with sum of 0. Ok to print to console?
 * Ex - threeSum([2, -2, 0, 3, 1, -4]) => [[2, -2, 0], [3, 1, -4]]
 ** loop
 ** conditional checking for sum of 0
 ** .push() within / at the end of loop
 */
 var threeSum = function(nums, target = 0) {
    const result = [];
    
    if (nums.length < 3) {
        return result;
    }
    
    let sNums = nums.sort((a,b) => a - b );
    
    // well use i as our anchor as we move through the array
    // we stop at sNums.length - 2 to prevent undefined for k
    for (let i = 0; i < sNums.length - 2; i++) {
	
        // because we sorted the array already
        // we can stop here if the current iterator is greater than the target value
        if (sNums[i] > target) {
            break;
        }
        // if our iterator is the same as the previous value
        // skip it to prevent duplicate results
        if (i > 0 && sNums[i] === sNums[i - 1]) {
            continue;
        }
        // start j at i + 1
        let j = i + 1;
        // start k at end of array
        let k = sNums.length - 1;
        
        // walking j and k towards each other to find all possible values
        // with i as our anchor value
        while (j < k) {
            let sum = sNums[i] + sNums[j] + sNums[k];
            if (sum === target) {
                result.push([sNums[i], sNums[j], sNums[k]]);
                
                // skip duplicate values of j and k
                while (sNums[j] === sNums[j + 1]) j++;
                while (sNums[k] === sNums[k - 1]) k--;
                
                // move j and k inward
                j++;
                k--;
                continue;
            }
            if (sum < target) {
                j++;
                continue;
            }
            if (sum > target) {
                k--;
                continue;
            }
        }
    }
    return result;
};

// ran out of time on solving this one too, feelsbadman, but I understand the solution - seems like there's no faster way to solve other than O(n*n)? Anyway, will study this one.

console.log(threeSum([2, -2, 0, 3, 1, -4]))