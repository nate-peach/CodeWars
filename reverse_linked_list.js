var reverseList = function(head) {
    let [prev, current] = [null, head];

    while (current) {
        [current.next, prev, current] = [prev, current, current.next];
    }

    return prev;
};

console.log(reverseList([5, 4, 3, 2, 1]))

// I just don't know