const fs = require('fs');
const inputData = fs.readFileSync('./11_2588.txt').toString().split('\n'); 
//예제 파일이 줄바꿈으로 되어있으니 split('\n')

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

const Num1 = B % 10; // 5
const Num2 = parseInt((B % 100) / 10); // 8
const Num3 = parseInt(B / 100); // 3


/* 다른 답
const Num1 = B % 10; // 5
const Num2 = Math.floor((B % 100) / 10); // 8
const Num3 = Math.floor(B / 100); // 3

Math.floor() 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환하는 함수 
*/


console.log(A * Num1);
console.log(A * Num2);
console.log(A * Num3);
console.log(A * B);

