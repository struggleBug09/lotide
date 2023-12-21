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


module.exports = without;










