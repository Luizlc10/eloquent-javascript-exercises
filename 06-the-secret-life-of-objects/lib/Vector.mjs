class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

Vec.prototype.plus = function ({ x, y }) {
  this.x = this.x + x;
  this.y = this.y + y;
  return this;
};

Vec.prototype.minus = function ({ x, y }) {
  this.x = this.x - x;
  this.y = this.y - y;
  return this;
};

export default Vec;
