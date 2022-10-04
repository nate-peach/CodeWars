// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// So we'll be taking in an array of objects. Each object with have several property/value pairs. I think it's best to look at the example.
// We'll be returning an integer, the number of times the string 'Europe' appears in the input array. Can I print to the console?
// list1 = [
  //  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  //  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  //  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  //  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// I think we'll need to use an object method here, most likely object.values(). I think we'll need to combine this method with array methods as well, perhaps .filter()

const countDevelopers = function(list) {
    let count = 0;
    for (let developer of list) {
        if (
            Object.values(developer)
            .includes('JavaScript') &&
            Object.values(developer)
            .includes('Europe')
        )
            count++;
    };
    return count;
};

console.log(countDevelopers([{ firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' }, { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' }, { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' }, { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' }]))