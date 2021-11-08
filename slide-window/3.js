/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    let tempString = s[i];
    const exists = { [s[i]]: true };

    for (let j = i + 1; j < s.length; j++) {
      if (exists[s[j]]) {
        break;
      }
      tempString += s[j];
      exists[s[j]] = true;
    }

    answer = answer.length < tempString.length ? tempString : answer;
  }

  return answer.length;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));
