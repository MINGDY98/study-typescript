//타입적으로 any의 단점을 해결하게끔 강제하는 방법 :unknown

declare const maybe: unknown;

const aNumber: number = maybe;
//Type 'unknown' is not assignable to type 'number'.
//unknow은 number에 바로 할당 불가.

//아주 간단한 형태의 타입가드~!
if (maybe === true) {
  const aBoolean: boolean = maybe;

  //const aString: string = maybe;(x)
}

// 타입가드~! 런타임에 타입이 문자열로 튀어나옴.
if (typeof maybe === "string") {
  const aString: string = maybe;

  //  const aBoolean: boolean = maybe; (x)
}

//즉, 타입가드를 통해 타입을 한정지어 쓸 수 있는 것이 unknown
//만약 any라면 타입가드없이도 다 통과가 되어서 문제상황을 인지하지 못했을 것임~

//정리
/**
 * any보다 type-safe한 타입.
 * any와 같이 아무거나 할당할 수 있다.
 * 타입을 컴파일러가 추론할 수 있게끔 타입의 유형을 좁히거나
 *  확정해주지않으면 다른 곳에 할당할 수 없고 사용할 수 업삳.
 * unknow 타입을 사용하면 runtime error를 줄일 수 있을 것 같다.
 * - 사용 전에 데이터의 일부 유형의 검사를 수행해야 함을 알리는 API에 사용할 수 있을 것 같다.
 *
 */
