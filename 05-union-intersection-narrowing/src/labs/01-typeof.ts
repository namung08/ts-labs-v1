// [문제] typeof 패턴: 입력값 타입 판별 및 처리
// 입력값이 문자열이면 모두 대문자로, 숫자면 세제곱 값 출력

function handleInput(input: string | number) {
  // 여기에 코드를 작성하세요.
  if (typeof input === "string") {
    return input.trim().toUpperCase();
  }
  return (input *= input *= input);
}

// 사용 예시
console.log(handleInput("hello"));
// "HELLO"
console.log(handleInput(2));
// 8
