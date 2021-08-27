/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let rc = 0;
  let lc = 0;
  let result = 0;

  for (let c of s) {
    if (c === "L") {
      lc += 1;
    } else {
      rc += 1;
    }
    if (rc && lc && rc === lc) {
      rc = 0;
      lc = 0;
      result += 1;
    }
  }

  return result;
};
