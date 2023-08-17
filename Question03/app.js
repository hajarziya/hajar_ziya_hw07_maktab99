const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  const map = new Map();
  const result = [];

  for (const word of arr) {
    const sortedWord = word.toLowerCase().split("").sort().join("");

    map.set(sortedWord, word);
    result.push(word);
  }

  return Array.from(map.values());
}

const cleanedArr = aclean(arr);
console.log(cleanedArr);
