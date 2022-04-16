//const hello = () => {}; //arrow functon을 입력하면 es3같은 경우에는 es3에 맞게끔 변환해서 받아들이겠지.
//npx tsc로 돌리면 현재 이 폴더의 target이 es5 이기에 function으로 바뀌어질것임.
//es6라면 이 코드가 변화없이 7test.js가 생성이 될 것임.

const hello = () => {
  console.log("hello");
};

//를 타입하면 console을 사용할때 문제ㄱ없도록 console에 타입이 지정되어있음. lib 폴더안에.
//tsconfig.json에 lib 설정을 쓰지않았지만 이정도는 default로 되어있느거지.(dom에 내장되어있는 것.)
//만약 lib를 []로 해버리면 이 작동이 되지않음.
