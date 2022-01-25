const fs = require('fs');
const inputData = fs.readFileSync('./05.txt').toString().split(' ');

let H = parseInt(inputData[0]) // 변수
let M = parseInt(inputData[1])

M -= 45; // M에서 45를 뺀 값을 구하기

if( M < 0) { //그 값이 0보다 작을 경우 (M - 45) + 60이 M값이 되고 시간에서 1 빼주기
  M += 60;
  H--;

  if (H === -1) { // 이때 H에서 1을 뺀값이 -1일경우 23으로 (0에서 1빼니까)
    H = 23;
  }
}

console.log(H + ' ' + M)