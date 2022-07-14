// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

//     if x > y: 3 points
//     if x < y: 0 point
//     if x = y: 1 point

// Notes:

//     there are 10 matches in the championship
//     0 <= x <= 4
//     0 <= y <= 4

// We're taking in an array. It contains positive integers listed in ratio format (4:5). Never strings / special chars / empty?
// We'll return an integer. The sum of points earned during a season. Can I print to console?
// For example above, we'd return 4.
// 1. We need a way to compare x and y 2. We need to keep track of points

function points(games) {
    let points = 0;
      games.map(function(a) {
        if (a[0] > a[2]){
          points += 3;
        }
        if (a[0] == a[2]){
          points += 1;
        }
        else {
          points += 0;
        }
      }) 
    return points;
}
  
  