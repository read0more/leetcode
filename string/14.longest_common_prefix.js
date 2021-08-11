/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";
  let longestSize = strs.reduce((acc, curr) => {
    return curr.length > acc ? curr.length : acc;
  }, 0);

  for (let i = 1; i <= longestSize; i++) {
    let prefix = strs[0].slice(0, i);
    for (let str of strs) {
      if (prefix !== str.slice(0, i)) {
        return result;
      }
    }
    result = prefix;
  }

  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix([""]));
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));
