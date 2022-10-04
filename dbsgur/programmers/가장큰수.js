function solution(numbers) {
  var answer = "";
  // numbers.sort().reverse();
  // // 0이 들은 애들은 따로 빼서 따로 정렬
  // console.log(numbers.filter((x) => x + "".includes(0)));
  numbers = numbers.map((x) => "" + x);
  return answer;
}

solution([3, 30, 34, 5, 9]);
