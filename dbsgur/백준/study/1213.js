// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString();

let input = "AABBCCCDD";

// input = input.split("");

let count = [];
let i;
let lengthI = input.length;
let dict = {};
for (i = 0; i < lengthI; i++) {
  if (isNaN(dict[input[i]])) {
    dict[input[i]] = 1;
  } else {
    dict[input[i]] += 1;
  }
}
// console.log(dict);
tmp = 0;

for (let key in dict) {
  if (dict[key] % 2 !== 0) {
    // console.log("dict[key] : ", dict[key], "key : ", key);
    tmp += 1;
  }
}
if (tmp > 1) {
  console.log("I'm Sorry Hansoo");
  process.exit(0);
}
function sortObj(obj) {
  return Object.keys(obj)
    .sort()
    .reduce(function (result, key) {
      result[key] = obj[key];
      return result;
    }, {});
}

dict = sortObj(dict);
// console.log("after dict : ", dict);

let s = "";
let temp = "";
for (let key in dict) {
  while (dict[key] > 1) {
    s += key;
    dict[key] -= 2;
  }
  if (dict[key] === 1) {
    temp = key;
  }
}

// console.log("s : ", s);
// console.log("[...s].reverse() :", [...s].reverse());

// print(s + temp + s.reverse());
console.log(s + temp + [...s].reverse().join(""));
