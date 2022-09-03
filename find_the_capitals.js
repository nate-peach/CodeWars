// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// We're taking in a string of letters, upper and lowercase. Will we ever see anything other than letters? Is there any particular order?
// We'll be returning an array containing the indices of only the capital letters in the input. Can I print to the console?
// For example, the input "Nathan" would return [0]
// 1. I think we can use .toUpperCase() as well as a conditional and either .map() or a for loop

const capitals = function(word) {
    const letters = word.split('');
    let indices = [];
        for (let i = 0; i < letters.length; i++) {
            if (letters[i] == letters[i].toUpperCase())
                indices.push(i);
        }
    return indices;
};