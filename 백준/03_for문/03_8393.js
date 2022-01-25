const fs = require('fs');
let inputData = fs.readFileSync('./03.txt').toString().split(' ');

const number = parseInt(inputData[0])
let a = 0;

for(let i = 1; i <= number; i++){
  a = a + i;
}

console.log(a);

