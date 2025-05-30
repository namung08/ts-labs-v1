// [문제] instanceof 패턴: 다양한 에러 객체의 타입 분기와 메시지 처리
// NotFoundError에는 resource, ValidationError에는 field 프로퍼티가 있음

class NotFoundErrors extends Error {
  constructor(public resource: string) {
    super(`${resource} not found`);
    this.name = "NotFoundError";
  }
}
class ValidationErrors extends Error {
  constructor(public field: string) {
    super(`Invalid input for ${field}`);
    this.name = "ValidationError";
  }
}

function handleErrors(err: Error) {
  // 여기에 코드를 작성하세요.
  if (err instanceof NotFoundErrors)
    console.error(`[404] ${err.message} (resource: ${err.resource})`);
  else if (err instanceof ValidationErrors)
    console.error(`[400] ${err.message} (field: ${err.field})`);
  else console.error(`[500] ${err.message}`);
}

// 사용 예시
handleErrors(new NotFoundErrors("User"));
handleErrors(new ValidationErrors("email"));
handleErrors(new Error("알 수 없는 에러"));
