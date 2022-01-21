const fs = require('fs');
const inputData = fs.readFileSync('./08_1008.txt').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A / B);