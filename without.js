const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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
//sample change
const assertArraysEqual = function(assertArray1, assertArray2) {
  const arraysAreEqual = eqArrays(assertArray1, assertArray2);
  if (arraysAreEqual) {
    console.log(`✅✅✅ Assertion Passed: ${assertArray1} === ${assertArray2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${assertArray1} !== ${assertArray2}`);
  }
};
const without = function(source,itemsToRemove) {
  let withoutArr = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        break;
      } else if (j === itemsToRemove.length - 1) {
        withoutArr.push(source[i]);
      }
    }
  }
  console.log(withoutArr);
  return withoutArr;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);











