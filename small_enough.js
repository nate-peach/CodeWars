// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// So we're taking in an array and a single integer (representing a limiter). The array contains only integers.
// We'll be returning a boolean, whether all the integers in the array are less that or equal to the limit value. Can I print to the console?
// For example: [66, 101], 200) would return true, [78, 117, 110, 99, 104, 117, 107, 115], 100) would return false
// 1. One way to approach this would be to check each value with a loop and conditional

const smallEnough = function(a, limit) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] > limit) 
        return false;
        else if (i == a.length - 1 && a[i] <= limit) 
        return true;
    }
};