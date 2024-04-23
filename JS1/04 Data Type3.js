// 불리언(Boolean)
// true(참), false(거짓)
let bool1 = true;
let bool2 = false;
console.log(bool1,typeof bool1);
console.log(bool2,typeof bool2);

// undefined
// un : not, define : 정의하다
let x;
console.log(x);

// null : 값이 존재하지 않음을 '명시적'으로 나타내는 방법
// null != undefined
let y = null;
console.log(y);

// object(객체) : key-value pair
let person = {
    name: 'choi',
    age: 20,
    isMarried: true
}

console.log(typeof person);

// array(배열)
// 여러 개의 데이터를 순서대로 저장하는 데이터 타입!!!
// 각각 자신의 위치에 대한 데이터(인덱스)를 갖고 있음.
let number = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];