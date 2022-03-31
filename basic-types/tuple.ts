let x: [string, number]; //앞뒤로 다른 타입을 넣음

x = ["hello", 39]; //순서도 타입도 맞아야함

//x = [10,"Mark"];에러

//x[2] = "world"; 에러
//Type '"world"' is not assignable to type 'undefined'.
//x값이 1까지 있고, 그 이후는 undefined이기에 에러발생

const person: [string, number] = ["Mark", 39];

const [first, second] = person;

// array는 공통 요소
// tuple은 정확함을 요구.
