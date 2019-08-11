class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get length() {
    return  Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

Vec.prototype.plus = function({x, y}) {
  this.x = this.x + x;
  this.y = this.y + y;
  return this;
};

Vec.prototype.minus = function({ x, y }) {
  this.x = this.x - x;
  this.y = this.y - y;
  return this;
};

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
