//let MyName: string = null;
//let u: undefined = null;
//-----------------------------
//Type 'null' is not assignable to type 'string이 나온다면
// "Strict":true가 되어있거나 strictNullChecks:true되어있는것

let v: void = undefined; //void에는 undefined만 할당 가능 null은 불가.

let union: string | null = null; // union type 맛보기. string 혹은 null이 들어갈 수 있음.

union = "Mark";

//타입 가드 방식도 존재 (후에 배움)
