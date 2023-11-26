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

const assertArraysEqual = function(assertArray1, assertArray2) {
  const arraysAreEqual = eqArrays(assertArray1, assertArray2);
  if (arraysAreEqual) {
    console.log(`✅✅✅ Assertion Passed: ${assertArray1} === ${assertArray2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${assertArray1} !== ${assertArray2}`);
  }
};

const numbers = [1,2,3,4,5];

const map = function(array, callback) {
    const results = [];
    for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const squaredNums = map(numbers, number => number * number);
const doubledNums = map(numbers, number => number * 2);
console.log("Doubled nums are: ", doubledNums);
console.log("Squared nums are: ",squaredNums);
assertArraysEqual(eqArrays(squaredNums,[ 1, 4, 9, 16, 25 ]), true)
