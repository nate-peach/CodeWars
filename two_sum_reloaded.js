// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });

const twoSum = (arr, num) => {
    let pairs = [];
    let numObj = {};

    for (let digit of arr) {
        const digit2 = num - digit;
        
        if (numObj[digit2])
            pairs.push([digit, digit2])
        else
            numObj[digit] = 1;
    }
    return pairs;
}

console.log(twoSum([1, 2, 2, 3, 4, 5, 0, 10, 15, 8], 10))