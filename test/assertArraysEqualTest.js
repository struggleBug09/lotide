const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');


describe("#assertArraysEqual", () => {
  it(`it returns ✅✅✅ Assertion Passed: === `, () => {
    assertArraysEqual([1, 2, 3], [1, 2, 3]);
  });
  it(`it returns returns 🛑🛑🛑 Assertion Failed:  !== `, () => {
    assertArraysEqual([1, 2], [3, 4])
  });
});