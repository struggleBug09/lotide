const assertEqual = require('../assertEqual');
const tail = require('../tail');
const result = tail([5,6,7])

assertEqual(result[0],6);
assertEqual(result[1],7);