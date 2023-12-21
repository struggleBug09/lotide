const findKeyByValue = function(showList, showName) {
  for (let show in showList) {
    if (showList[show] === showName) {
      return show;
    }
  }
};

module.exports = findKeyByValue;
