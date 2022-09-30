// Encrypt this! Your message is a string containing space separated words.
// You want to create secret messages which can be deciphered with these conditions:
//         The step1 letter must be converted to its ASCII code.
//         The step2 letter must be switched with the last letter

// We'll be taking in a string of only letters and spaces
// We'll be returning the string with a few modifications, the step1 letter in each word changed to its ASCII value, and the step2 letter swapped with the last letter. Can I print to the console?
// For example, "Hello" would return "72olle"
//   "good" would return "103doo"
//   "hello world" would return "104olle 119drlo"
// step1 we split the string into an array of seperate words. We can use charAt or charCodeAt I believe for the ASCII transform. We can use a for-of loop to iterate through the string, maybe .map() is better

const encryptThis = text => {
    const words = text.split(' ');
    let encryption = [];
    for (let word of words) {

        const step1 = word.charCodeAt(0);
        const step2 = word[word.length - 1];
        const step3 = word.slice(2, word.length - 1);
        const step4 = word[1];

        if (word.length == 1)
            encryption.push(step1);
        else if (word.length == 2)
            encryption.push(step1 + step2); 
        else if (word.length == 3)
            encryption.push(step1 + step2 + step4); 
        else
            encryption.push(step1 + step2 + step3 + step4); 
    }

    return encryption.join(' ');
}
  console.log(encryptThis("hello world"));