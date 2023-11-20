const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } else if (arr1.length !== arr2.length) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(assertArray1, assertArray2) {
  const arraysAreEqual = eqArrays(assertArray1, assertArray2);
  if (arraysAreEqual) {
    console.log(`✅✅✅ Assertion Passed: ${assertArray1} === ${assertArray2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${assertArray1} !== ${assertArray2}`);
  }
};

const middle = function(array) {
  let middleElement = [];
  if (array.length < 3) {  //Edge case when array is 1 or 2 elements only
    return middleElement;
  } else if (array.length % 2 === 0) {
    middleElement.push(array[array.length / 2 - 1]);
    middleElement.push(array[array.length / 2]);
    return middleElement;
  } else {
    middleElement.push(array[Math.floor(array.length / 2)]);
    return middleElement;
  }
};

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6, 7])); // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);