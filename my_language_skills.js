// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

// Note: the scores will always be unique (so no duplicate values)

// So we'll be takin in an object, which will have properties named after programming languages and values of test scores
// We'll be returning an array of languages that have a value of at least 60. Can I print to the console?
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
//   {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
//   {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
// We should sort the property values, then filter them based on >= 60

function myLanguages(results) {

let sortable = [];
for (var test in results) {
    sortable.push([test, results[test]]);
}

let sorted = sortable.sort((a, b) =>
    b[1] - a[1]);

    return sorted.filter(a => a[1] >= 60).map(a => a.slice(0, -1)).flat;
    
}

// const myLanguages = results => Object
//     .keys(results)
//     .filter(a => 
//         results[a] >= 60)
//     .sort((a, b) =>
//         results[b] - results[a]);

// Simpler solution I found that uses Object.keys to simplify things. I tried using keys, but wasn't including input in chained filter & sort methods

console.log(myLanguages({"Hindi": 60, "Dutch" : 93, "Greek": 71, "C++": 50, "ASM": 10, "Haskell": 20}))