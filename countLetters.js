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

module.exports = countLetters;
