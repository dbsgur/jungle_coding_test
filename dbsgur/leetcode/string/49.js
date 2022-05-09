var groupAnagrams = function (strs) {
  let obj = new Map();
  let tmp;
  for (str of strs) {
    tmp = Array.from(str).sort().join("");
    if (obj.has(tmp)) {
      obj.get(tmp).push(str);
    } else {
      obj.set(tmp, [str]);
    }
  }
  return [...obj.values()];
};
