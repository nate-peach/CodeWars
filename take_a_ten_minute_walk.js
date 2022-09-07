// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// We'll be taking in an array of strings, the strings will only be letters "n", "s", "e", "w". We won't see any other value types, or an empty array
// We'll return a boolean, whether the walk is exactly 10 minutes long AND whether the walk returns you to the starting point. Can I print to the console?
// For example, ['n','s','n','s','n','s','n','s','n','s'] should return true,
// ['w','e','w','e','w','e','w','e','w','e','w','e'] should return false,
// ['w'] should return false,
// ['n','n','n','s','n','s','n','s','n','s'] should return false
// 1. We'll need multiple conditionals, one to check the length of the array (must be equal to 10), one to check if the walk returns you to the starting point 2. We can use .length in the first conditional, and I'm thinking we can use .filter() in the second

const isValidWalk = function(walk) {
    if (walk.length !== 10)
        return false;
    
    const blocksNorth = walk.filter(a => a == 'n').length;
    const blocksSouth = walk.filter(a => a == 's').length;
    const blocksEast = walk.filter(a => a == 'e').length;
    const blocksWest = walk.filter(a => a == 'w').length;
    
    return blocksNorth == blocksSouth && blocksEast == blocksWest; 
  }

// A different solution I came up with after viewing the others' solutions

//  const isValidWalk = function(walk) {
//     if (walk.length !== 10)
//         return false;

//     let distanceX = 0;
//     let distanceY = 0;

//     for (let i = 0; i < walk.length; i++) {
//         switch (walk[i]) {
//             case 'n': distanceY++; break
//             case 's': distanceY--; break
//             case 'e': distanceX++; break
//             case 'w': distanceX--; break
//         };
//     };

//     return distanceY == 0 && distanceX == 0;
//   };