// 배열(Array)

// 1. 생성
// 1-1. 기본 생성
// 대괄호로 생성, 콤마로 구분
let fruits = ["사과", "바나나", "수박"];

// 1-2. 크기 지정
let number = new Array(5);
console.log(number);

console.log(fruits);
console.log(fruits.length);

// 2. 요소 접근
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 3. 배열 메소드
// 3-1. push : 마지막 요소 추가
console.log("push 전 : "+fruits);
fruits.push("자두");
console.log("push 후 : "+fruits);

// 3-2. pop : 마지막 요소 삭제
// 3-3. shift : 첫 번째 요소 삭제
// 3-4. unshift : 첫 번째 요소 추가

// 3-5. splice
fruits.splice(1,1,"포도"); // 첫번째 요소, 1개 삭제, 바꿀 요소
console.log(fruits);

// 3-6. splice
let slicedFruits = fruits.slice(1,2); // 1번 요소부터 2번 요소 전 까지 반환
console.log(slicedFruits);