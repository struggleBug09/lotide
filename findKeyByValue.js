const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(showList, showName) {
  for (let show in showList) {
    if (showList[show] === showName) {
      return show;
    }
  }
};

module.exports = findKeyByValue;
