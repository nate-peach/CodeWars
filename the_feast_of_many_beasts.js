// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

// We're taking in two strings. Each will contain only lowercase letters, some special chars, but special chars will never appear at the beginning or end of the string
// We'll be returning a boolean, whether the first and last indices of each string are identical. Can I print to the console?
// For example 'great blue heron' and 'garlic naan' would return true, 'chickadee' and 'chocolate cake' true as well
// 1. I think we can just use a conditional that checks if string[0] of both strings are equal, and string.length - 1 are equal

const feast = (beast, dish) => 
    beast[0] === dish[0] && 
    beast.split('').slice(-1)[0] === dish.split('').slice(-1)[0];