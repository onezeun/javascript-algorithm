const fs = require('fs');
const inputData = fs.readFileSync('./01.txt').toString().split(' ');

let A = parseInt(inputData[0]);

for (let i = 1; 9 >= i; i++) {
  console.log(`${A} * ${i} = ${A * i}`)
}