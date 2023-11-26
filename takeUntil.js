const takeUntil = function(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
          break;
      }
      result.push(array[i])
  }
  return result;
}

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } else if (arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
}
const arr = [-3, -2, -1, 0, 1, 2, 3]
const onlyNegative = takeUntil(arr, number => number < 0)  //return array with only negative

const assertArraysEqual = function(assertArray1, assertArray2) {
  const arraysAreEqual = eqArrays(assertArray1, assertArray2);
  if (arraysAreEqual) {
    console.log(`✅✅✅ Assertion Passed: ${assertArray1} === ${assertArray2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${assertArray1} !== ${assertArray2}`);
  }
};

assertArraysEqual(eqArrays(onlyNegative, [-3, -2, -1 ]), true)