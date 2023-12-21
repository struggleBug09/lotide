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

module.exports = letterPositions;
