//fs모듈 사용 불가 문제
const fs = require('fs');
const inputData = fs.readFileSync('./04.txt').toString().split('\n');

const A = parseInt(inputData[0])
const B = parseInt(inputData[1])

if (A > 0 && B > 0) {
  console.log(1)
} else if(A < 0 && B > 0) {
  console.log(2)
} else if(A < 0 && B < 0) {
  console.log(3)
} else {
  console.log(4)
}

/* 다른 사람 정답

  if (X > 0) {
    console.log(Y > 0 ? 1 : 4);
  } else {
    console.log(Y > 0 ? 2 : 3);
  }

*/

/* readline 모듈

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  const A = input[0];
  const B = input[1];

  if (A > 0) {
    console.log(B > 0 ? 1 : 4);
  } else {
    console.log(B > 0 ? 2 : 3);
  }
  
  process.exit();
});
*/