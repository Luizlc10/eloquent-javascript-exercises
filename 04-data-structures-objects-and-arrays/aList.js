function arrayToList(array) {
  if (!array || !array.length) return null;
  if (array.length == 1)
    return {
      value: array[0],
      rest: null
    };
  else
    return {
      value: array[0],
      rest: arrayToList(array.slice(1))
    };
}

function listToArray(_list) {
  return _list.rest !== null
    ? [_list.value, ...listToArray(_list.rest)]
    : [_list.value];
}

function prepend(element, list) {
  if (list)
    return {
      value: element,
      rest: list
    };
  else
    return {
      value: element,
      rest: null
    };
}

function nth(list, position) {
  let counter = 0;
  while (counter < position) {
    if (list.rest === null) return "List isn't deep enough!";
    counter++;
    list = list.rest;
  }
  return list.value;
}

console.log(JSON.stringify(arrayToList([10, 20]), undefined, "     "));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(JSON.stringify(prepend(10, prepend(20, null)), undefined, "     "));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
