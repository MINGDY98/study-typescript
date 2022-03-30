//let list = [1, 2, 3]; 이렇게만 써도 type 추론이 일어나긴 함. array[]로

//하지만 더 자세하게 입력

//방법1 : let list: number[] = [1,2,3];

//방법2 : let list: Array<number> = [1,2,3];

//방법 1을 더 주로 사용. 방법2는 충돌이슈 존재.

let list: (number | string)[] = [1, 2, 3, "4"];
//위와 같이 두가지 타입을 쓸 수 있음을 표현할 수 있다.

//만약, [39,"mark"] 와 같이 앞에는 숫자, 뒤에는 문자열 타입이 정해져있다면?
//tuple 가자.
