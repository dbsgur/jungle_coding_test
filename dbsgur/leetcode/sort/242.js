/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sSet = new Set(s);
  const tSet = new Set(t);
  const sArr = [];
  const tArr = [];
  if (sSet.size !== tSet.size) return false;
  for (let set of sSet) {
    sArr.push([set, [...s].filter((x) => x === set).length]);
    tArr.push([set, [...t].filter((x) => x === set).length]);
  }
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i][1] !== tArr[i][1]) return false;
  }
  return true;
};

// discuss
var isAnagram2 = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

console.log(isAnagram("anagram", "nagaram"));
