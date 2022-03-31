const person1 = { name: "Mark", age: 39 };

//person1 is not "object type"
//person1 is "{name:string, age:number}" type.

//create by Object.create
const person2 = Object.create({ name: "Mark", age: 39 });

//create에 마우스를 올려놓으면 object, null 둘 다 된다고 되어있음. Object.create({})이 가능한 것임
//그래서 Object.create(39)같은 건 안됨.

// 즉, object는 primitive type이 아닌 것을 나타내고 싶을때 사용하는 타입

let obj2: object = {};
obj2 = { name: "Mark" };
obj2 = [{ name: "Mark" }];
// obj2 = 39;       x
// obj2 ='Mark';    x
// obj2 = true;     x
// obj2 = 100n;     x
// obj2 = Symbol(); x
// obj2 = null;     x
// obj2 = undefined;x

declare function create(o: object | null): void;
create({ prop: 0 });
create(null);
// create(42);       x
// create("string"); x
// create(false);    x
// create(undefined);x

// Object.create(0); x
