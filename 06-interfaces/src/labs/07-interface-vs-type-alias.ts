// [문제]
// 아래 두 코드에서 kimUser, yunUser 모두 { id: number; name: string } 구조를 가져야 하며, 타입 별칭과 인터페이스를 각각 이용해서 타입을 선언하세요.

// 타입 별칭으로 User 타입 정의
type User = {
  id: number;
  name: string;
};

// 인터페이스로 User 타입 정의
interface IUser {
  id: number;
  name: string;
}

// 인터페이스 상속으로 Cat 타입 정의
interface Animal {
  sound: string;
}

interface Cat extends Animal {
  color: string;
}

// 타입 별칭 교차로 Cat 타입 정의
type AnimalType = {
  sound: string;
};

type CatType = AnimalType & {
  color: string;
};

// 사용
const kimUser: User = { id: 10, name: "김유저" };
const yunUser: IUser = { id: 20, name: "윤유저" };

const nabiCat: Cat = { sound: "야옹", color: "고등어" };
const ggomaCat: CatType = { sound: "냐옹", color: "삼색이" };
