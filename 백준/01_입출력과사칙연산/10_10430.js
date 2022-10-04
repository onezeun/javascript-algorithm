const fs = require('fs');
const inputData = fs.readFileSync(__dirname + '/10_10430.txt').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);
const C = parseInt(inputData[2]);

console.log(parseInt((A + B) % C));
console.log(parseInt((A % C) + (B % C)) % C);
console.log(parseInt((A * B) % C));
console.log(parseInt((A % C) * (B % C)) % C);