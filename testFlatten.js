const flatten = require('./flatten');

const nestedArray = [1, [2], [[3]], [[[4]]]];
const flatArray = flatten(nestedArray);
console.log(flatArray); // [1, 2, 3, 4]
