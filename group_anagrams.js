/**
 * input is array of strings. only truthy values?
 * return groups of anagrams in subarrays. can I print to console?
 * groupAnagrams([job, obj, nate, jas, phone, pen, tane, honep])
 * groupAnagrams()
 * groupAnagrams()
 * sort each element
 * nested loops
 * conditional to push like anagrams into a subarray
 */
var groupAnagrams = function(strs) {
    let obj = {};

    for (let str of strs) {
        let letters = str.split("").sort().join("");
        obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
    }
    return Object.values(obj);
};

// on the right track, could've got there eventually. seen elements of this problem before, but ran out of time on this one

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))