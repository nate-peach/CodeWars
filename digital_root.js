// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// We'll be taking in an integer, will we ever see a negative number, zero, or falsy values?
// We'll be returning an integer, what's known as the number's digital root. Taking the sum of each individual digit, until the sum's length is a single integer. Can I print to the console?
// Ex. digitalRoot(205) => 2 + 0 + 5 = 7
//     digitalRoot(2) => 2
//     digitalRoot(278763985) => 2 + 7 + 8 + 7 + 6 + 3 + 9 + 8 + 5 => 55 => 5 + 5 => 10 => 1 + 0 = 1
// Use a for...of loop, variable, template literal, .length, recursion

const digitalRoot = n => {
    if (`${n}`.length == 1)
        return n;

    let digits = Array.from(String(n), Number);
    let num = 0;

    for (let digit of digits) {
        num += digit;
    }
    
    return digitalRoot(num);
}

console.log(digitalRoot(278763985))