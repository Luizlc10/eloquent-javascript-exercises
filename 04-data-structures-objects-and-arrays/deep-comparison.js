function deepEqual(firstObj, secondObj) {
  if (firstObj === secondObj) return true;

  let firstObjKeys = Object.keys(firstObj);
  let secondObjKeys = Object.keys(secondObj);

  if (firstObjKeys.length === secondObjKeys.length) {
    for (const key of firstObjKeys) {
      if (typeof firstObj[key] === typeof secondObj[key] &&
          typeof firstObj[key] === "object" &&
          typeof firstObj[key] !== null ) {
        deepEqual(firstObj[key], secondObj[key]);
      } else if (firstObj[key] === secondObj[key]) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
