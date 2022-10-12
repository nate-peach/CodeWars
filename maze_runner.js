// Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly! You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.

// So we'll be taking in a two-dimensional array, and an array of strings. With the two dimensional array, the sub arrays will contain integers, 0 - 3. Mostly 1s & 0s, and there will be one 2 and one 3. Will we ever get an input without a 2 or a 3? Will we ever see anything other than integers? In the array of strings, will we only see legit inputs?
// We'll be outputting either "Lost", "Finish", or "Dead". Lost if we don't reach a 3 in the amount of moves provided. Finish if we do. Dead if we hit a wall/go out of directions. Can I print to the console?
// The Maze array will look like:
// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]

// direction = ["N","N","N","N","N","E","E","E","E","E"]
// Pretty complex. So first we need to find the index of our starting point, 2. Then our end point, 3. From there we can set up a whole lot of conditionals (maybe can think of a shorter method?). We'll also create a loop that runs the length of the direction array.

let test = [];

function mazeRunner(maze, directions) {

    let innerStartingIndex;
    let outerStartingIndex = maze.findIndex(sub => {
        innerStartingIndex = sub.indexOf(2);
            return innerStartingIndex != -1;
        });
    const startPoint = [outerStartingIndex, innerStartingIndex];

    let innerEndingIndex;
    let outerEndingIndex = maze.findIndex(sub => {
        innerEndingIndex = sub.indexOf(3);
            return innerEndingIndex != -1;
        });
    const endPoint = [outerEndingIndex, innerEndingIndex];

    const size = maze.length - 1;

    let [b, a] = startPoint;
    let [y, x] = endPoint;

    let move = {
            W: () => !a ? 'Dead' : a--,
            E: () => a == size ? 'Dead' : a++,
            N: () => !b ? 'Dead' : b--,
            S: () => b == size ? 'Dead' : b++
          };
        
    for (let i = 0; i < directions.length; i++) {
        move[directions[i]]()
      test.push(maze[b][a])
        if (maze[b][a] == 1)
            return 'Dead';
        if (b == y && a == x)
            return 'Finish'
    }
    return 'Lost'
}

console.log(mazeRunner([[1,0,1,1,1,1,1],
             [1,0,0,0,0,0,3],
             [1,0,1,0,1,0,1],
             [0,0,1,0,0,0,1],
             [1,0,1,0,1,0,1],
             [1,0,0,0,0,0,1],
             [1,2,1,0,1,0,1]], ["N","N","N","N","N","N","N",]))
console.log(test)