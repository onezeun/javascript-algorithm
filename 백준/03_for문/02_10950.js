const fs = require('fs');
let inputData = fs.readFileSync('./02.txt').toString().split('\n');

let A = parseInt(inputData[0])

//inputData 값 나누기
for (let i = 1; i <= A; i++) {
  // 데이터 나누기 split('분할기준') : 문자열을 배열로 변환하는 함수 // (' ') → 띄어 쓰기 기준으로 나눔
  let nums = inputData[i].split(' ');

  a = parseInt(nums[0]);
  b = parseInt(nums[1]);

  console.log(a + b)
}