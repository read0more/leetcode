/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const s1Size = s1.length;
  const s2Size = s2.length;
  const s1Map = {};
  const s2Map = {};
  let left = 0;

  if (s2Size < s1Size) return false;

  for (const c of s1) {
    if (s1Map[c]) {
      s1Map[c]++;
    } else {
      s1Map[c] = 1;
    }
  }

  for (let i = 0; i < s1Size; i++) {
    const c = s2[i];
    if (s2Map[c]) {
      s2Map[c]++;
    } else {
      s2Map[c] = 1;
    }
  }

  if (check(s1Map, s2Map)) {
    return true;
  }

  for (let right = s1Size; right < s2.length; left++, right++) {
    if (s2Map[s2[left]] === 1) {
      delete s2Map[s2[left]];
    } else {
      s2Map[s2[left]] = s2Map[s2[left]] - 1;
    }

    if (s2Map[s2[right]]) {
      s2Map[s2[right]] = s2Map[s2[right]] + 1;
    } else {
      s2Map[s2[right]] = 1;
    }

    if (check(s1Map, s2Map)) {
      return true;
    }
  }

  return false;
};

/**
 * @param {Object} s1Map
 * @param {Object} s2Map
 * @return {boolean}
 */
function check(s1Map, s2Map) {
  if (Object.keys(s1Map).length !== Object.keys(s2Map).length) return false;

  for (const key of Object.keys(s1Map)) {
    if (s1Map[key] !== s2Map[key]) return false;
  }

  return true;
}

// console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("abc", "ccccba"));
