const assertArraysEqual = function(assertArray1, assertArray2) {
  const arraysAreEqual = eqArrays(assertArray1, assertArray2);
  if (arraysAreEqual) {
    console.log(`✅✅✅ Assertion Passed: ${assertArray1} === ${assertArray2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${assertArray1} !== ${assertArray2}`);
  }
};
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const letterPositions = function(sentence) {
  let result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (Array.isArray(result[sentence[i]])) {
      result[sentence[i]].push(i);
    } else if (sentence[i] !== " ") {
      result[sentence[i]] = [];
      result[sentence[i]].push(i);
    }
  }
  return result;
};

