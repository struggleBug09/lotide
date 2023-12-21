const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]),[2, 3]);
  });
  it("returns [4] for [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]),[2, 3]);
  });
  it("returns [10, 11] for [9, 10, 11, 12]", () => {
    assert.deepEqual(middle([9, 10, 11, 12]),[10, 11]);
  });
});
