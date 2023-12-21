const eqArrays = require('./eqArrays');

const assertArraysEqual = function(assertArray1, assertArray2) {
  if (eqArrays(assertArray1, assertArray2)) {
    console.log(`✅✅✅ Assertion Passed: ${assertArray1} === ${assertArray2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${assertArray1} !== ${assertArray2}`);
  }
};

module.exports = assertArraysEqual;