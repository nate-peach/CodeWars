// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// Taking in a string. Containing only letters? Changes in case?
// Returning an object - key / value pairs. Keys are letters in alphabet, values are integers. Can I print to the console?
// function countLetters("aqpwoeiurqpwoeiur") => {"a": 2, "q": , "p": , "w": , }
// function countLetters("laksjdfalskjdhfalskd")
// function countLetters("zmxncbvzmxncbvzmxncbv")

function countLetters(characters) {
    let countObject = {};

    for (const c of characters) {
        if (countObject[c])
            countObject[c]++;
        else
            countObject[c] = 1;
    }

    return countObject;
}