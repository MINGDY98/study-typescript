//- void : 어떤 타입도 가지지않은 빈상태
// - 값은 없고 타입만 있음. 소문자만 사용
// 변수에 void값을 annotation 하는게 아니라 값을 반환하지 않는 일종의 undefined를 리턴할때 리턴 타입으로 사용
// 타입스크립트에서는 undefined라는 같은 상태가있어서 void가 필요없었지만 의미상으로 void를 선언하기위해 존재

function returnVoid(message: string): void {
  console.log(message);
  //return;
  //return void로 추정됨.
  //명시하면 이렇게됨.
  return undefined; //undefined만 사용가능.
}

returnVoid("리턴이 없다.");

//r의 타입은 void.
//const r: undefined = returnVoid('리턴이 없다.'); 요렇게 undefined를 넣는 것도 에러를 발생시킴
//void의 특성은 이렇게 아무것도 하지않겠다는것을 명시적으로 나타내는 것.
