/***
 * 어떤 것이나 된다. 
정말로 어떤 것이든 들어올 수 있는 경우
아닌 경우가 있다.
무작정 any를 쓰면 전체적인 type 시스템에 문제발생
 */

function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny("리턴은 아무거나");

any1.toString(); //에러는 안뜸. any니까~! any1이 어떤 타입이어도 상관없다는 의미

//그런데 any 를 쓸 수밖에없는 곳이있다.
//console.log만 하는 기능의 함수같은경우. 정말 any일 수 있음.
//noImplicityany를 통해 any일 경우 타이핑을 안해주면 에러가 뜸. 그래서 any 타이핑을 명시적으로 해야함.

//주의 : 최대한 쓰지 않아야함, 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문
//noImplicity: any를 써야하는데 쓰지 않으면 오류를 뱉는 컴파일 옵션

//any는 개체를 통해 계속해서 전파된다. => 결국, 편의에 의해 타입 안정성을 잃는다는 것.

let looselvTyped: any = {};

/*
const d = looselvTyped.a.b.c.d; //에러가 발생하지 않아버림!

//api를 통해 동적인 데이터가 들어오는 경우라던가, 여러 경우들 때문에 any를 쓸일이 오긴 할 것이다.
//이런경우에는 any를 피하기 위해 그 누수를 막으려 노력하는것이 필요하다.

function leakingAny(obj: any) {
  const a = obj.num;
  const b = a + 1;
  return b;
}

leakingAny({num: 0});
//이러면 c까지 any로 나오게 되는데, 우리는 num로 나와야함을 알고 있는 상태이다.
*/
//다음과 같이 바꿀 수 있다.
const d = looselvTyped.a.b.c.d;

function leakingAny(obj: any) {
  const a: number = obj.num;
  const b = a + 1;
  return b;
}

const c = leakingAny({ num: 0 });

//이렇게 누수를 막을 수 있다.

// 다음 단계에서는 타입가드를 사용하는 법을 알려준다한다.
