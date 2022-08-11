// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.

// So we're taking in an array? The array contains just strings, names? Will we see an empty array?
// And we're returning a string, different depending on how many people "like" something? Can I print to the console?
// So if I take in ["Amanda", "Nate", "Alex"] we'd return "Amanda, Nate, and Alex like this"
// 1. Need to create a set of conditionals  2. We can use template literals and .length (seems like an opportunity to use OOP?)

const likes = names =>
  names.length == 1 ?
    `${names[0]} likes this`:

  names.length == 2 ?
    `${names[0]} and ${names[1]} like this`:

  names.length == 3 ?
    `${names[0]}, ${names[1]} and ${names[2]} like this`:

  names.length > 3 ?
    `${names[0]}, ${names[1]} and ${names.length - 2} others like this`:
    
    'no one likes this';