const isValid = s => {
    let counts = {};

    for (let char of s) {
        if (counts[char])
            counts[char]++;
        else
            counts[char] = 1;
    }

    for (let char in counts) {
        
    }
};