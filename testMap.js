const map = require('./map');

const items = [1, 2, 3, 4, 5, 5];
const doubled = map(items, (item) => item * 2);
console.log(doubled); // [2, 4, 6, 8, 10, 10]
