function solution(cacheSize, cities) {
  var answer = 0;
  cities = cities.map((x) => x.toLowerCase());
  const caches = [];
  for (let city of cities) {
    if (caches.length === cacheSize) {
      if (caches.indexOf(city) > -1) {
        answer += 1;
        caches.splice(caches.indexOf(city), 1);
        caches.push(city);
        // 얘를 빼서 제일 오른쪽으로 이동 LRU
        continue;
      } else {
        caches.shift();
        caches.push(city);
        answer += 5;
      }
    } else if (caches.length < cacheSize) {
      if (caches.indexOf(city) > -1) {
        answer += 1;
        caches.splice(caches.indexOf(city), 1);
        caches.push(city);
      } else {
        caches.push(city);
        answer += 5;
      }
    } else {
      answer += 5;
    }
  }
  return answer;
}
console.log(
  solution(30, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
); // 21
