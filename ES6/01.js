// ES6

// 1.
// 2015년도 이전 => var
// ES6 => let(변수), const(상수) // 재선언, 재할당 등의 차이

// 2. arrow function
// 함수 선언문
function add() {

}

// 함수 표현식
var add = function() {}

// 화살표 함수 : (소)괄호 열고 닫고, (중)괄호 열고 닫고!
var add = (x) => {
    return 1;
}

var add = x => 1;

// 3. 삼항 연산자
// condition ? true : false

// 4. 구조 분해할당 : destructuring
// de = not
// structure = 구조
// 배열이나, 객체의 속성

// (1) 배열인 경우
let [value1, value2] = [1, "new"]
console.log(value1);
console.log(value2);

let arr = ["value1", "value2", "value3"];
let [a, b, c, d] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d); // undefined

// (2) 객체인 경우
let user = {
    name: "npc",
    age: 30
};

let {name, age} = {
    name: "npc",
    age: 30
};
console.log("name =>", name);
console.log("age =>", age);

// 새로운 이름으로 할당
let {name: newName, age: newAge} = user;
console.log("newName =>", newName);
console.log("newAge =>", newAge);

let user1 = {
    name1: "npc1",
    age1: 24
};


let {name1, age1, birthday1 = "초기값"} = user1; // 초기값은 undefined의 경우에 의미가 있음.
console.log(name1);
console.log(age1);
console.log(birthday1);