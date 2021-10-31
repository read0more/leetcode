/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const wordArray = s.split(" ");
  for (let i = 0; i < wordArray.length; i++) {
    wordArray[i] = reverseString(wordArray[i]);
  }

  return wordArray.join(" ");
};

function reverseString(string) {
  let start = 0;
  let end = string.length - 1;
  string = string.split("");
  while (start < end) {
    [string[start], string[end]] = [string[end], string[start]];
    start++, end--;
  }

  return string.join("");
}

console.log(reverseWords("Let's take LeetCode contest"));
