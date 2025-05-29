/**
 * [문제] 책(Book) 객체 타입을 선언하고, 책 목록을 다루는 코드를 작성하세요.
 * 1. Book 타입은 title, author, publishedYear(출간년도), isAvailable(대출가능여부) 필수
 * 2. books 배열을 만들고 2권 이상 입력
 * 3. 현재 대출 가능한 책만 availableBooks에 추출
 */

// TODO: Book 타입, books 배열, availableBooks 필터링
type Book = {
  title: string;
  author: string;
  publishedYear: Date;
  isAvailable: boolean;
};

let books: Book[] = [
  {
    title: "TypeScript 프로그래밍",
    author: "김개발",
    publishedYear: new Date("2023-01-15"),
    isAvailable: true,
  },
  {
    title: "자바스크립트 완벽 가이드",
    author: "이코딩",
    publishedYear: new Date("2022-06-20"),
    isAvailable: false,
  },
];

let availableBooks = books.filter((b: Book) => b.isAvailable);
console.log(availableBooks);
