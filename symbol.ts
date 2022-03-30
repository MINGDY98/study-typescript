console.log(Symbol("foo") === Symbol("foo")); //false가 나옴.

//같은 primitive타입의 값을 담아도 다르다고 나오는데.
//그 이유는 고유하고 수정불가능한 값으로 만들어주기 때문

const sym = Symbol();

const obj = {
  [sym]: "value",
};

//obj["sym"] 로 접근을 불가능하게 만들어서 이렇게 접근이 안되는 걸 원할 경우 사용함.
//type으로는 symbol, 함수로 넣을때는 Symbol(대문자)로 사용해야함.
