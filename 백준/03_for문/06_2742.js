const fs = require('fs');
const input = fs.readFileSync('./06.txt').toString().split(' ');

let A = parseInt(input[0]);
let answer = ''

for(let i = A; i >= 1; i--) {
  answer += i + '\n';
}

console.log(answer);