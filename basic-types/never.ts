function error(message: string): never {
  throw new Error(message);
}
function fail() {
  return error("failed");
}
//never : 아무것도 리턴되지 않는다.

function infiniteLoop(): never {
  while (true) {}
}

/**
 * never 타입은 모든 타입의 subtype이며 모든 타입에 할당 할 수 있음.
하지만 never에는 그 어떤 것도 할당할 수 없음
any 조차도 never에 할당할 수 없음.
잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 함.
 */

let a: string = "hello";
if (typeof a !== "string") {
  //string에서 string을 빼면 never가 됨. => 잘못된 타입 넣는 실수 방지.
  a;
}

declare const b: string | number;
if (typeof b !== "string") {
  //여기는 number만 남게되겠지
  b;
}

//never 활용 예
//T가 string이면 T라고 하고  indexable 타입을 추가(string)하고 요것에 할당된 값은 any, 그리고 나머지 경우는 never
type Indexable<T> = T extends string ? T & { [index: string]: any } : never;
//T가 만약에 string이면 T를 {[index: string]: any} 형태로 만들어서 보내겠다. 아니라면 never로 지정하겠다.

const c: Indexable<{}> = "";
//=>=>오류 출력 Type 'string' is not assignable to type 'never'

//즉 indexable<>안에 잘못된 타입을 넣으면 never가 나올것임.
