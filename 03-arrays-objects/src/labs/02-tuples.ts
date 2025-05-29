/**
 * [문제] 학생의 시험 점수를 튜플로 표현하세요.
 * 1. "이름"과 "점수"로 이루어진 튜플 StudentScore를 선언
 * 2. 예시 데이터 3개를 만들어 scores 배열에 담으세요
 * 3. 70점 이상인 학생 이름만 추출해서 passed에 저장하세요
 */

// 튜플 타입 선언
type StudentScore = [string, number];

// 학생 점수 데이터
const studentScores: StudentScore[] = [
  ["김철수", 85],
  ["이영희", 65],
  ["박민수", 75],
];

// 70점 이상인 학생 이름만 추출
const passed: string[] = studentScores
  .filter((student: StudentScore) => student[1] >= 70)
  .map((student: StudentScore) => student[0]);

console.log(passed); // ["김철수", "박민수"]
