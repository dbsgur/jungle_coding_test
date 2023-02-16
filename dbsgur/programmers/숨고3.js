// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // Implement your solution here
  const photos = S.split("\n");
  const citis = {};
  let result = [];

  for (const photo of photos) {
    let [file, city, date] = photo.split(", ");
    let [photoName, extension] = file.split(".");
    if (!citis[city]) citis[city] = [];
    citis[city].push({ date, photoName, extension });
  }

  for (const city in citis) {
    citis[city].sort((a, b) => {
      const aTime = new Date(a.date);
      const bTime = new Date(b.date);
      return aTime - bTime;
    });
  }

  for (let city in citis) {
    const LENGTH = String(citis[city].length).length;
    citis[city].forEach((val, index) => {
      val.index = String(index + 1).padStart(LENGTH, "0");
    });
  }

  for (let photo of photos) {
    let [file, city, date] = photo.split(", ");
    let Info = citis[city].find((photoInfo) => photoInfo.date === date);

    result.push(`${city}${Info.index}.${Info.extension}`);
  }

  return result.join("\n");
}
