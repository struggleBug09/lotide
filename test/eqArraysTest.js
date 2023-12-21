const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {

  it(`it returns ✅✅✅ Assertion Passed`, () => {
    assertEqual(eqArrays([1, 2, 3],[1, 2, 3]), true);

  });
  it(`it returns returns 🛑🛑🛑 Assertion Failed`, () => {
    assertEqual(eqArrays(["this", "is", "cool"],["this", "is", "terrible"]), true);
  });
});