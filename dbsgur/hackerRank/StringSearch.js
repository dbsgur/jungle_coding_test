"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'getMaximumRemovals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY order
 *  2. STRING source
 *  3. STRING target
 */

function getMaximumRemovals(order, source, target) {
  // Write your code here
  if (source === target) return 0;
  let count = 0;
  for (let index of order) {
    count += 1;
    source = source.substring(0, index - 1) + "-" + source.substring(index);
    let idx = 0;
    for (let t of target) {
      let find = source.slice(idx).indexOf(t);
      if (find === -1) return count - 1;
      idx += find + 1;
    }
  }
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const orderCount = parseInt(readLine().trim(), 10);

  let order = [];

  for (let i = 0; i < orderCount; i++) {
    const orderItem = parseInt(readLine().trim(), 10);
    order.push(orderItem);
  }

  const source = readLine();

  const target = readLine();

  const result = getMaximumRemovals(order, source, target);

  ws.write(result + "\n");

  ws.end();
}
