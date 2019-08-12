// GROUP
export default class Group {
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

// GROUP ITERATOR
export class GroupIterator {
  constructor(group) {
    this.itemIndex = 0;
    this.group = group;
  }

  next() {
    if (this.itemIndex > this.group.items.length - 1) return { done: true };

    let value = this.group.items[this.itemIndex];
    this.itemIndex += 1;

    return { value, done: false };
  }
}
