const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  for (let obj1 in object1) {
      let arr2 = Object.values(object2)
      let keyIsInObj2 = obj1 in object2
      let valueIsInArr2 = arr2.includes(object1[obj1])
      if (!(keyIsInObj2 && valueIsInArr2)) {
          return false;
      }
  }
  return true;
};

const shirtObject = { brand: "Nike", size: "medium", length: 10, color: "red" };
const anotherShirtObject= { color: "red", size: "medium", length: 10, brand: "Nike" };
assertEqual((eqObjects(shirtObject , anotherShirtObject)), true);

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertEqual((eqObjects(shirtObject , longSleeveShirtObject)), false);
