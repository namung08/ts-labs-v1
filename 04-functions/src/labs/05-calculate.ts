// [문제] 다양한 연산을 적용하는 고차 함수
// 숫자 a, b와 연산 함수(operation: (a: number, b: number) => number)를 받아
// 결과를 반환하는 calculate 함수를 작성하세요.
// operation 타입은 타입 별칭으로 선언하세요.

/*
예시)
const add = (a: number, b: number) => a + b;
calculate(10, 20, add) // 30
*/
type operation = (x: number, y: number) => number;
const calculate = (x: number, y: number, operation: operation) => {
  return operation(x, y);
};

const add = (a: number, b: number) => a + b;
const divide = (a: number, b: number) => a / b;
const minus = (a: number, b: number) => a - b;
const multi = (a: number, b: number) => a * b;

console.log(calculate(1, 2, add));
console.log(calculate(1, 2, minus));
console.log(calculate(1, 2, multi));
console.log(calculate(1, 2, divide));
