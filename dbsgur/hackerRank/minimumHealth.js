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
 * Complete the 'getMinimumHealth' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY initial_players
 *  2. INTEGER_ARRAY new_players
 *  3. INTEGER rank
 */

function getMinimumHealth(initial_players, new_players, rank) {
  // Write your code here

  let answer = 0;
  initial_players.sort((a, b) => b - a);
  answer += initial_players[rank - 1];
  for (let newPlayer of new_players) {
    for (let i = 0; i < rank; i++) {
      if (initial_players[i] <= newPlayer) {
        initial_players.splice(i, 0, newPlayer);
        break;
      }
    }
    answer += initial_players[rank - 1];
  }
  return answer;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const initial_playersCount = parseInt(readLine().trim(), 10);

  let initial_players = [];

  for (let i = 0; i < initial_playersCount; i++) {
    const initial_playersItem = parseInt(readLine().trim(), 10);
    initial_players.push(initial_playersItem);
  }

  const new_playersCount = parseInt(readLine().trim(), 10);

  let new_players = [];

  for (let i = 0; i < new_playersCount; i++) {
    const new_playersItem = parseInt(readLine().trim(), 10);
    new_players.push(new_playersItem);
  }

  const rank = parseInt(readLine().trim(), 10);

  const result = getMinimumHealth(initial_players, new_players, rank);

  ws.write(result + "\n");

  ws.end();
}
