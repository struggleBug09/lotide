const assertArraysEqual = function(assertObject1, assertObject2) {
  const inspect = require('util').inspect;
  const objectsAreEqual = eqObjects(assertObject1, assertObject2);
  if (objectsAreEqual) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(assertObject1)} === ${inspect(assertObject2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(assertObject1)} !== ${inspect(assertObject2)}`);
  }
};

const eqObjects = function(object1, object2) {
  for (let obj1 in object1) {
      let arr2 = Object.values(object2);
      let keyIsInObj2 = obj1 in object2;
      let inObj = object1[obj1];      
      let valueIsInArr2 = arr2.includes(inObj) 
      if (!(keyIsInObj2 && valueIsInArr2)) { 
        if (Array.isArray(inObj)) {   
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

module.exports = assertObjectsEqual;

