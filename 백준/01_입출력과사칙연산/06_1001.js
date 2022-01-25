const fs = require('fs');
const inputData = fs.readFileSync('./06_1001.txt').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A - B);