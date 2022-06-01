// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

function findPetYears(humanYears){ 
    let dogYears = 0;
    let catYears = 0;

    for (let i = 1; i <= humanYears; i++){
        if (i === 1) {
            dogYears += 15
            catYears += 15
        }
        if (i === 2) {
            dogYears += 9
            catYears += 9
        }
        else {
            dogYears += 5
            catYears += 4
        }
        return [humanYears, catYears, dogYears];
    }