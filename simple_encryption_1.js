// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times. Together with the encryption function, you should also implement a decryption function which reverses the process.

// So we'll be taking in a string of numbers, looks like postives and zeroes, as well as a single integer.
// We'll be returning a string with the same numbers, just arranged in a different order - all odd indexed numbers concatenated with all even indexed numbers - and we'll do this input n number of times. Can I print to the console?
// For example: encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
//    encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Not totally sure how to best solve this one. Using .map() should work well, a variable and .forEach() too. Think this could be split into two functions for efficiency? I think the decryption function should essentially just iterate down from input n, instead of iterating up? so
//  Create one function which encrypts, using variable, .forEach(), and conditionals. And another function which runs the encryption n number of times. Decryption is the same, just reversed

const encrypt = function(text, n) {
    let textArr = text.split('');
    for (let i = 0; i < n; i++) {
        let encryption = [];
        textArr.forEach((num, index) => {
            if (index % 2 == 1)
                encryption.push(num);
        });
        textArr.forEach((num, index) => {
            if (index % 2 == 0)
                encryption.push(num);
        });
        textArr = encryption;
    }
    return textArr.join('');
}

console.log(encrypt('Kobayashi-Maru-Test', 10))

// couldn't solve this one, had to look at the solutions. will update with comments tomorrow.