// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

// So we're taking in a positive integer. This represents the number of floors our building must be.
// We'll be returning an array that contains strings of spaces and *. Can I print to the console?
// Examples are shown above.
// 1. I think the first thing we need to do is to create a loop that pushes asterisks to an array 2. Also need to add spaces somehow. The number of spaces on each side of the first asterisk is input - 1

const towerBuilder = function(nFloors) {
    let tower = [];
    for (let i = 1; i <= nFloors; i++) {
        tower.push(
            ' '.repeat(nFloors - i) + 
            '*'.repeat(i + i - 1) +
            ' '.repeat(nFloors - i));
    }
    return tower;
}