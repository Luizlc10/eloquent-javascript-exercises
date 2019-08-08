let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(array) {
  return array.reduce((_array, el) => _array.concat(...el), []);
}

console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]
