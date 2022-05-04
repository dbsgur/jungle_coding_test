let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";

const banned = ["hit"];

let words = paragraph.toLowerCase().split(/\W+/);
let legalWords = new Map();
banned = new Set(banned);

let maxFrequancy = 0;
let mostCommon = words[0];
for (let word of words) {
  if (!banned.has(word)) {
    let frequency = legalWords.has(word) ? legalWords.get(word) + 1 : 1;
    legalWords.set(word, frequency);

    if (frequency > maxFrequancy) {
      mostCommon = word;
      maxFrequancy = frequency;
    }
  }
}

return mostCommon;
