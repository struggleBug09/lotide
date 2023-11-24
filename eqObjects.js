const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  for (let obj1 in object1) {
      let arr2 = Object.values(object2) // turn object2 values to array
      let keyIsInObj2 = obj1 in object2 //checks if key is in obj2
      let inObj = object1[obj1]         
      let valueIsInArr2 = arr2.includes(inObj) //checks if value is on object 2
      if (!(keyIsInObj2 && valueIsInArr2)) { //checks if value is not equal
        if (Array.isArray(inObj)) {   // this code uses the eqArray code to
          for (let i = 0; i < inObj.length; i++) {
              if (inObj.length !== arr2.length) {
                return false;
              } else if (inObj[i] !== object2[obj1][i]) {
                return false;
              }
          }
          return true;
        }
        return false;
      }
  }
  return true;
};
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false

