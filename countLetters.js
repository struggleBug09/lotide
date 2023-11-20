const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual(1, 1);

const countLetters = function(stringInputs) {
  let result = {};
  for (let letter of stringInputs) {
    if (result[letter] > 0) {
      result[letter] += 1;
    } else if (result[letter] !== " ") {
      result[letter] = 1;
    }
  }
  return result;
};

countLetters("lighthouse in the house");