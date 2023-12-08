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

module.exports = middle;