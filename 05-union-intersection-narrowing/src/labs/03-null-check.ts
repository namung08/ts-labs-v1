// [문제] null 체크 패턴: 유저 정보 안전하게 출력
// user가 undefined일 수도 있으니 안전하게 id, name, (email이 있으면 email도) 출력

type UserInfo = { id: number; name: string; email?: string };

function printUserInfo(user?: UserInfo) {
  // 여기에 코드를 작성하세요.
  if (user) {
    console.log(
      `ID: ${user.id}, name: ${user.name}${
        user.email && ", email: " + user.email
      }`
    );
  }
}

// 사용 예시
printUserInfo();
printUserInfo({ id: 2, name: "Tom" });
printUserInfo({ id: 3, name: "Jane", email: "jane@example.com" });
