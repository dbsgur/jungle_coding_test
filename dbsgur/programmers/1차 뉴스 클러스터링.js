function solution(str1, str2) {
  var answer = 0;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const arr1 = sliceTwice(str1);
  const arr2 = sliceTwice(str2);
  const interArr = intersection([...arr1], [...arr2]);

  let arr1Length = arr1.length;
  let arr2Length = arr2.length;
  let interArrLength = interArr.length;

  answer =
    (interArrLength / (arr1Length + arr2Length - interArrLength)) * 65536;
  if (isNaN(answer)) answer = 65536;

  answer = Number(Math.floor(answer));
  return answer;
}

function sliceTwice(string) {
  const str = [...string];
  const Regex = new RegExp(/[^a-z]/);
  const result = [];
  for (let i = 0; i < str.length - 1; i++) {
    let tmp = str[i] + str[i + 1];
    if (Regex.exec(tmp)) continue;
    result.push(str[i] + str[i + 1]);
  }
  return result;
}

function intersection(arr1, arr2) {
  const inter = [];
  while (arr1.length > 0 && arr2.length > 0) {
    let tmp = arr1.pop();
    let index = arr2.findIndex((x) => x === tmp);
    if (index > -1) {
      arr2.splice(index, 1);
      inter.push(tmp);
    }
  }
  return inter;
}
