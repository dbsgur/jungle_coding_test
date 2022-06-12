var leastInterval = function (tasks, n) {
  var map = new Map();
  for (var task of tasks) {
    map.set(task, (map.has(task) ? map.get(task) : 0) + 1);
  }
  var max = 0;
  var maxCnt = 0;
  for (var val of map.values()) {
    if (val === max) {
      maxCnt++;
    } else if (val > max) {
      max = val;
      maxCnt = 1;
    }
  }
  return Math.max(tasks.length, (n + 1) * (max - 1) + maxCnt);
};
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2));
