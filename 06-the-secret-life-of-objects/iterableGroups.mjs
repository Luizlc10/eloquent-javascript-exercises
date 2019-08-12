import Group, { GroupIterator } from "./lib/Group";

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
