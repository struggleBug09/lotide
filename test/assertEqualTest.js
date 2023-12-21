const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it(`it returns ✅✅✅ Assertion Passed`, () => {
    assertEqual("This test", "This test");
  });
  it(`it returns returns 🛑🛑🛑 Assertion Failed`, () => {
    assertEqual(28, 34);
  });
});