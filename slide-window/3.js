/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let result = 0;
  const map = {};
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    left = left <= map[c] ? map[c] + 1 : left;
    map[c] = i;
    result = Math.max(result, i - left + 1);
  }

  return result;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("abba"));
