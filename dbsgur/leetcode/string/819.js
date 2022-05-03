let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";

const banned = ["hit"];

arr = paragraph.toLowerCase().split(" ");

console.log(arr);
console.log("??");
let obj = {};

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  if (!obj[arr[i]]) {
    obj[arr[i]] = 1;
    // console.log("IN IF");
  } else {
    obj[arr[i]]++;
  }
}

console.log(obj);
