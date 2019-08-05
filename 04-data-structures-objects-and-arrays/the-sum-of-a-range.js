function range(min, max, step) {
  console.log("-------------");
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
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
