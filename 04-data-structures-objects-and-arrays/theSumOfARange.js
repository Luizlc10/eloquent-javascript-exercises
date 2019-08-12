function range(min, max, step) {
  let _step = Math.abs(step) || 1;
  let result = [];
  if (min < max) {
    for (let i = min; i <= max; i += _step) {
      result.push(i);
    }
  } else {
    for (i = min; i >= max; i -= _step) {
      result.push(i);
    }
  }
  return result;
}

function sum(numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
