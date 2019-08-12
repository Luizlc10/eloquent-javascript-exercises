function countChar(str, char) {
  let amount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      amount++;
    }
  }
  return amount;
};

function countBs(str) {
  return countChar(str, "B");
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
