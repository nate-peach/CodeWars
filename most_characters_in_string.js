// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

// Input is string, assuming chars other than letters are allowed, case matters, what about ties / spaces / empty string?
// Returning character that appears the most, in a string. Can I print to the console?
// maxCharacter("banana") => "a"
// maxCharacter("Universal Studios") => ""
// maxCharacter("coffee") => ""
// 1. Set up empty object literal 2. for...of loop creating the key / values 3. Find max value?

function maxCharacter(str) {
    let characters = {};
    let maxValue = 0;
    let maxChar = '';

    for (const char of str) {
        if (characters[char])
            characters[char]++;
        else
            characters[char] = 1;
    }

    for (const key in characters) {
        if (characters[key] > maxValue) {
            maxValue = characters[key]
            maxChar = key;
        }
    }

    return maxChar;
}

console.log(maxCharacter("???????!!00jkjkkpooooooooooooooooo"))