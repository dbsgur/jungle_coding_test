function solution(priorities, location) {
  var list = priorities.map((t, i) => ({ my: i === location, val: t }));
  var count = 0;
  console.log(list);
  while (true) {
    var cur = list.splice(0, 1)[0];
    if (list.some((t) => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
