function solution(n) {
  let n_bin = [...n.toString(2)];
  const count = cnt_one(n_bin);
  n += 1;
  while (true) {
    let tmp_bin = [...n.toString(2)];
    if (count === cnt_one(tmp_bin)) {
      return n;
    }
    n++;
  }
}

function cnt_one(bin) {
  const LENGTH = bin.length;
  let cnt = 0;
  for (let i = 0; i < LENGTH; i++) {
    if (bin[i] === "1") {
      cnt++;
    }
  }
  return cnt;
}

console.log(solution(15));
