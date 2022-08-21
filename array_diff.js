// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// So we're taking in two arrays, each containing integers only.
// We should return an array containing only values from list a that are not present in list b. Will we ever see empty arrays, or elements that aren't integers? Can we print to the console?
// Ex. An input of ([1,2,2,2,3],[2])  would return [1,3]
// 1. I'm not super confident on how to approach this, but I think .filter() would work well here. Just not sure if it can take an array as a parameter

const array_diff = (a, b) =>
    a.filter(e => 
        !b.includes(e));