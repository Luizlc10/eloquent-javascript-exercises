class Group {
  constructor(...args) {
    this.items = args;
  }

  add(n) {
    if (!this.has(n)) this.items.push(n);
  }

  delete(n) {
    this.items = this.items.filter(item => item !== n);
  }

  has(n) {
    return this.items.includes(n);
  }

  static from(args) {
    return new Group(...args);
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
