const flatten = function(arrayToFlatten) {
  let flattenedArr = [];
  for (let element of arrayToFlatten) {
    if (Array.isArray(element)) {
      for (let innerElement of element) {
        flattenedArr.push(innerElement);
      }
    } else {
      flattenedArr.push(element);
    }
  }
  return flattenedArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]