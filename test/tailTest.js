const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("it returns [2,3] for [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]), [2,3])
  });
  it("it returns returns [red, blue]", () => {
    assert.deepEqual(tail(["yellow","red","blue"]), ["red","blue"])
  });  
});
