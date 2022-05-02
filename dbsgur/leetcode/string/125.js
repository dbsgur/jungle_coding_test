// https://leetcode.com/problems/valid-palindrome
let s = "A man, a plan, a canal: Panama";
s = s.toLowerCase();
s = s.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/gim, "");

console.log(s === s.split("").reverse().join(""));
