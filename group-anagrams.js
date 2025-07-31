/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const ganagrams = {}; // empty object to hold groups

    for (let word of strs) {
        // sort the word's characters to form a key
        let sorted_word = word.split('').sort().join('');

        // if the key doesn't exist yet, initialize it as an empty array
        if (!ganagrams[sorted_word]) {
            ganagrams[sorted_word] = [];
        }

        // push the original word into the group
        ganagrams[sorted_word].push(word);
    }

    // return all grouped anagrams as an array of arrays
    return Object.values(ganagrams);
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));