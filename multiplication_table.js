// Your task, is to create NxN multiplication table, of size provided in parameter.

// So we'll be taking in an integer. Should we expect to possibly see anything else?
// We'll be returning a two dimensional array, n sub arrays each containing n integers. The value of the integers are factorials of 1, 2, 3. Can I print to the console?
// for example, when given size is 3: the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
// I'm thinking that I can set up an empty array variable, variable equal to [1, 2, 3], set up a loop that runs while i < n, and multiply 1 2 & 3 by i, push it to the emtpy array


const multiplicationTable = function(size) {
    let table = [];
    let row = [];
    for (let j = 1; j <= size; j++) {
        for (let i = 1; i <= size; i++) {
            row.push(j * i);
        }
        table.push(row);
        row = [];
    }

    return table;
}

console.log(multiplicationTable(5))