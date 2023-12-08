// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');

const result = tail([5,6,7])

describe("#tail", () => {
  it("it returns [2,3] for [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]), [2,3])
  });
  it("it returns returns [red, blue]", () => {
    assert.deepEqual(tail(["yellow","red","blue"]), ["red","blue"])
  });  
});

// describe("#head", () => {
//   it("returns 1 for [1, 2, 3]", () => {
//     assert.strictEqual(head([1, 2, 3]), 1);
//   });
//   it("returns '5' for ['5']", () => {
//     assert.strictEqual(head(['5']), '5'); 
//   });
// });

// assertEqual(result[0],6);
// assertEqual(result[1],7);