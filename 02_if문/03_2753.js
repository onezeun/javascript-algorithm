const fs = require('fs');
const inputData = fs.readFileSync('./03.txt').toString().split(' ');

const A = parseInt(inputData[0]);

if( A % 4 == 0 && A % 100 != 0) {
  console.log(1)
} else if(A % 4 == 0 && A % 400 == 0) {
  console.log(1)
} else {
  console.log(0)
}