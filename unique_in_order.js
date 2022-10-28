// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// So we'll be taking in an iterable object - string / array. Would we ever see an empty or falsy input?
// We'll be returning the elements of the input in an array, same order and no repetitions. Can I print to the console?
// For example: uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//              uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
//              uniqueInOrder([1,2,2,3,3])       == [1,2,3]
// Seems like we start with a for...of loop, and add a conditional. But also seems too simple...

const uniqueInOrder = iterable => {
    let edit = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1])
            edit.push(iterable[i]);
    }
    return edit;
}

console.log(uniqueInOrder('nnnaaaathan'))