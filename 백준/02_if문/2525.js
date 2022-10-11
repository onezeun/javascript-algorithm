const fs = require('fs');
const input = fs.readFileSync(__dirname + '/example.txt').toString().split('\n');

let A = parseInt(input[0].split(' ')[0]);
let B = parseInt(input[0].split(' ')[1]);
let C = parseInt(input[1]);

let Time = B + C;

if(Time >= 60) {
  // Math.floor() :  주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환하는 함수 소수점 버리는 함수라고 생각하면 됨
  A += Math.floor(Time / 60);
  Time %= 60;

  if (A > 23) { 
    A -= 24;
  }
} 

console.log(A, Time)

// 전부 분으로 바꿔서 푸는 방법도 있음