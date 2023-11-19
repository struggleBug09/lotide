const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== + ${expected}`)
  }
};

const tail = function(arr2) {
  let new_arr = arr2.slice(1)
  return new_arr;
}

//Sample change