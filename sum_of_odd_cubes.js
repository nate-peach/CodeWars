// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

// We'll be taking in an array, sounds like should only be integers. Will we ever see non-numbers? Floats? Empty array?
// We'll return an integer, the summ of odd cubes. Can I print to the console?
//    cubeOdd([1, 2, 3, 4]), 28);
//    cubeOdd([-3,-2,2,3]), 0);
//    cubeOdd(["a",12,9,"z",42]), undefined);
// start by cubing each element, this can be done several ways. going to use .map() Math.pow() method. Then should be able to use .reduce()

const cubeOdd = function(arr) {
    let cubes = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != Number(arr[i]))
            return undefined;
        if (arr[i] % 2 != 0)
            cubes += arr[i] ** 3;
    }

    return cubes;
}

console.log(cubeOdd(["a",12,9,"z",42]))

// Decided a brute force method would actually end up working better for this challenge, so used a for loop and variable solution