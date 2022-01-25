const fs = require('fs');
const input = fs.readFileSync('./05.txt').toString().split(' ');

let A = parseInt(input[0]);
let answer = ''

for(let i = 1; i <= A; i++) {
  answer += i + '\n';
}

console.log(answer);