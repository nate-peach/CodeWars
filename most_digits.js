// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

// So we'll be taking in an array of numbers (integers). Will we ever see anything other than integers?
// We'll be returning the element that contains the most digits. Can I print to the console?
// For example, [9000, 8, 800] would return 9000
// Not totally sure, but I think Math.max() would work here (won't work since we need the longest element that appears *first*). Seems to be a trend of mine, this ended up being more difficult than I thought. Wanted to use .length in a loop, but it wasn't working (still not sure why). Ended up doing some googling to find that .length can be used inside of a .sort() method, which is how I ended up solving the challenge. Doesn't seem super efficient though, as I have to convert each array element into a string first.

const findLongest = function(array) {
    const strArray = array
        .map(a => a.toString())
            .sort((a, b) => 
                b.length - a.length);
    
    return Number(strArray[0]);
};