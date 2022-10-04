function solution(numbers) {
  numbers = [...numbers];
  const answer = [];
  // 순열 만들기
  const getPermutation = (arr, fixed) => {
    const LENGTH = arr.length;
    if (LENGTH) {
      for (let i = 0; i < LENGTH; i++) {
        const newNum = fixed + arr[i];
        const copyArr = [...arr];
        copyArr.splice(i, 1);
        if (!answer.includes(+newNum) && confirm(+newNum)) {
          answer.push(+newNum);
        }
        getPermutation(copyArr, newNum);
      }
    }
  };
  getPermutation(numbers, "");
  return answer.length;
}

// 소수인지 확인하는 함수
function confirm(number) {
  if (number < 2) return false;
  else if (number < 4) return true;
  else {
    const SQRT = Math.sqrt(number);
    for (let i = 2; i <= SQRT; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(solution("110"));
