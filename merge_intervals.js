// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

/**
 * input is array of subarrays that contain ints. ints will be positive. sorted smallest - largest? Only truthy inputs?
 * output is array of subarrays, overlapping intervals merged. returning all intervals that cover the input. print to the console?
 * merge([[1,3],[2,6],[5,10],[15,18]]) => 
 * check if i[1] > i + 1[0]
 * traditional for loop
 * current int = i[0], i + 1[1]
 */
var merge = function(intervals) {
    
    let result = [];
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    for (const curInterval of intervals){
        
        if ( (result.length == 0) ||
        (result[result.length-1][1] < curInterval[0]) ) { 
            result.push( curInterval );
        }
        else {
            result[result.length-1][1] = 
            Math.max( result[result.length-1][1], curInterval[1] );
        }
    }
    
    return result;
};

/** 
Ran out of time solving this one, but was headed in the right direction. needed to: 
start loop and i = 1 and check overlaps at prev index 
add another variable in the loop (prev)
reassign intervals[i] differently
*/