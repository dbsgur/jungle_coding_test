function solution(name) {
  var answer = 0;
  //좌우 이동 값
  //최대로 많이 움직이는 경우는 길이만큼 이동이므로 길이값만큼 설정
  let min = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    //아스키코드값 변환
    let tmp = name.charCodeAt(i);

    //78(N) 보다 작을 경우 그냥 카운트해준다.
    if (tmp < 78) {
      answer += tmp % 65;
    }
    //78보다 클경우 이전 알파벳이 더 빠르다.
    else {
      answer += 91 - tmp;
    }

    //좌우 이동 인덱스
    let nextIndex = i + 1;

    while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65)
      nextIndex += 1;

    //BBBAAAAAABA인 경우는 다시 왼쪽으로 돌아가는 것이 더 빠르다.
    //처음 위치로 돌아간 횟수(i*2) + 문자열길이 - A가 연속으로 나오는 지점의 다음값
    min = Math.min(min, i * 2 + name.length - nextIndex);
  }
  answer += min;
  return answer;
}

// CHANGE
function solution2(name) {
  let changeAlphabet = 0;
  let minMoves = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    let changeNum = name.charCodeAt(i);

    if (changeNum < 78) {
      changeAlphabet += changeNum - 65;
    } else {
      changeAlphabet += 91 - changeNum;
    }

    let index = i + 1;
    while (index < name.length && name[index] == "A") index++;

    minMoves = Math.min(minMoves, i * 2 + name.length - index);
    minMoves = Math.min(minMoves, (name.length - index) * 2 + i); // ✨ 바뀐 부분
  }

  return changeAlphabet + minMoves;
}
