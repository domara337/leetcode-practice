/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const frequencyMap = {};

    // Step 1: Count frequencies
    for (const num of nums) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    // Step 2: Create buckets where index = frequency
    const maxFreq = Math.max(...Object.values(frequencyMap));
    const buckets = Array.from({ length: maxFreq + 1 }, () => []);

    // Step 3: Place numbers into buckets by frequency
    for (const num in frequencyMap) {
        buckets[frequencyMap[num]].push(Number(num));
    }

    // Step 4: Gather top k frequent elements
    const result = [];
    for (let freq = maxFreq; freq >= 0 && result.length < k; freq--) {
        for (const num of buckets[freq]) {
            result.push(num);
            if (result.length === k) {
                return result;
            }
        }
    }
};
