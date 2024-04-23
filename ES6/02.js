// 단축 속성명 : property shorthand
const name = "abc";
const age = "30";

// key - value
const obj = {name, age}; // key - value가 같을 경우 생략 가능
const obj1 = {name: name, age: age};

// 전개 구문 spread operator
// destructuring과 함께 가장 많이 사용되는 es6 문법 중 하나!
let arr = [1, 2, 3]; // 배열뿐만 아니라 객체에도 가능

let newArr = [...arr, 4];
console.log(arr);
console.log(newArr);
console.log("\n");


// 나머지 매개변수(rest parameter)
function exampleFunc(a, b, c, ...args) {
    console.log(a, b, c);
    console.log(a, b, c, ...args);

    console.log(args);
    console.log(...args);
}

exampleFunc(1, 2, 3, 4, 5, 6, 7);

// 템플릿 리터럴(Template Literal)
// 항상 백틱이랑 연결해서 사용
const testValue = "안녕하세요!"
console.log(`Hello World ${testValue}`);
console.log(`
    Hello
    My name is Javascript!!
    Nice to meet you!
`);