function solution(board, moves) {
  var answer = 0;
  const stack = [];
  let a = 0;
  for (let move of moves) {
    move = move - 1;
    for (let b of board) {
      if (b[move]) {
        if (stack[stack.length - 1] === b[move]) {
          stack.pop();
          answer += 2;
          b.splice(move, 1, 0);
          break;
        } else {
          stack.push(b[move]);
          b.splice(move, 1, 0);
          break;
        }
      }
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
