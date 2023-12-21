const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(assertObject1, assertObject2) {
  const inspect = require('util').inspect;
  const objectsAreEqual = eqObjects(assertObject1, assertObject2);
  if (objectsAreEqual) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(assertObject1)} === ${inspect(assertObject2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(assertObject1)} !== ${inspect(assertObject2)}`);
  }
};


module.exports = assertObjectsEqual;

