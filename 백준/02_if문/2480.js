const fs = require('fs');
const input = fs.readFileSync(__dirname + '/example.txt').toString().split(' ').map(Number);
// map() : 배열 내 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열로 리턴

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

let answer = 0;
let maxNum = 0;

if (A == B && A == C && B == C) {
  answer = 10000 + (A * 1000);
} else if (A == B || A == C || B == C) {
  if(A == B || A == C) {
    answer = 1000 + (A * 100);
  } else {
    answer = 1000 + (B * 100);
  }
} else {
  // 전개연산자 : 배열을 전개해서 함수의 매개변수로 전달해주는 문법. 배열에 있는 내용을 전개해서 실행할 수 있게 해줌
  // 형태 : 함수 이름(...배열)
  maxNum = Math.max(...input);
  answer = maxNum * 100;
}

console.log(answer);