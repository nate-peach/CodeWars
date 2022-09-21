//Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// So we're taking in an array filled with positive integers, which represent the weights of the people getting teamed up.
// We'll be returning an array containing two integers, representing the total weights of each team. Can I print to the console?
// For example, [13, 27, 49] would return [62, 27]
//   [50, 60, 70, 80] would return [120, 140]
//   [80] would return [80, 0]
// I think this can be solved pretty easily with a loop and two variables:

const rowWeights = function(array) {
    let team1 = 0;
    let team2 = 0;
    for (let i = 0; i < array.length; i+=2) {
        team1 += array[i];
        if (array[i + 1]) team2 += array[i + 1];
    }
    return [team1, team2];
}

// After looking at the solutions, saw that it can also be solved like:

const weights = function(array) {
    let teams = [0, 0];
    array.forEach(function(person, position) {
        if (position % 2 == 0)
            teams[0] += person;
        else
            teams[1] += person;
    });
    return teams;
};

console.log(weights([13, 27, 49]))