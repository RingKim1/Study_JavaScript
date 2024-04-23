// 일급객체로서의 함수

// (1) 변수에 함수를 할당 할 수 있다.
// 함수가 마치 값으로 취급된다.
// 함수가 나중에 사용될 수 있도록 조치가 되었다.
const sayHello = function () {
    console.log("Hello!");
}

// (2) 함수를 인자로 다른 함수에 전달 할 수 있다.
// (2)-1. 콜백함수 : 매개변수로써 쓰이는 함수 // 고차함수의 한 종류
// (2)-2. 고차함수 : 함수를 인자로 받거나 return하는 함수
function callFunction(func) {
    // 매개변수로 받은 변수가 사실, 함수다.
    func();
}

callFunction(sayHello);

// (3) 함수를 반환 할 수 있다.
function createAdder(num) {
    return function (x) {
        return x + num;
    };
}

const addFive = createAdder(5);
console.log(addFive(10));

// 일급객체로서의 함수2

// (4) 객체의 요소로 함수를 할당
const person = {
    name: "John",
    age: 31,
    isMarried: true,
    sayHello: function () {
        console.log(`Hello, My name is ${this.name}`); // 중괄호 안에서 this는 항상 자기 자신의 객체를 의미
    },
    sayHello1: () => {
        console.log(`Hello, I'm ${this.age}`);
    }
}

person.sayHello();
person.sayHello1(); // this.age : undefined *화살표 함수는 this를 바인딩 하지 않는다.

// (5) 배열의 요소로 함수를 할당

const myArr = [
    function (a, b) { return a + b; },
    function (a, b) { return a - b; }
]

// 더하기
console.log(myArr[0](1, 3))
// 빼기
console.log(myArr[1](10, 7))

// 활용 
function multiplyBy(num) {
    return function (x) {
        return x * num;
    };
}

function add(x, y) {
    return x + y;
}

const multiplyByTwo = multiplyBy(2);
// const multiplyByTwo = function (x) {
//     return x * 2;
// };

const multiplyByThree = multiplyBy(3);
// const multiplyByThree = function (x) {
//     return x * 3;
// };

console.log(multiplyByTwo(10)); // 20
console.log(multiplyByThree(10)); // 30

const result = add(multiplyByTwo(5), multiplyByThree(10));
console.log(`Final => ${result}`);