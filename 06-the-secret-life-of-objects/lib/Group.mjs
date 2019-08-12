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
