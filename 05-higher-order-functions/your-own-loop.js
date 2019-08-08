function loop(index, condition, update, body) {
  for (index; condition(index); index = update(index)) {
    body(index);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
