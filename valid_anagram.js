/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    //checks the lenght of the strings
    if (s.length !== t.length) return false;

    // Create a character frequency map
    const count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        if (!count[char]) {
            return false; // character not found or count is zero
        }
        count[char]--;
    }

    return true;
};

console.log(isAnagram("anagram", "nagaram")); 
console.log(isAnagram("rat", "car"));         
