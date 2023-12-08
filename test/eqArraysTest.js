const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3],[1, 2, 3]), true);
assertEqual(eqArrays([11, 23, "greg"],[11, 23, "greg"]), true);
assertEqual(eqArrays(["this", "is", "cool"],["this", "is", "terrible"]), false);