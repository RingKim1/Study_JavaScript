// 콜백 함수
// 다른 코드의 인자로 넘겨주는 함수

// 예시
setTimeout(function () {
    console.log("hello");
}, 1000); //1초(1000밀리세컨초) 후 

numbers = [1, 2, 3, 4, 5];

// 아래 두 함수는 같음.
numbers.forEach(function (number) {
    console.log(number);
});

numbers.forEach(element => {
    console.log(element);
});

// 무슨 제어권?
// 1. 호출 시점에 대한 제어권을 갖는다.

// setInterval : 반복해서 매개변수로 받은 콜백함수의 로직을 수행
let count = 0;

let timer = setInterval(function () {
    console.log(count);
    if (++count > 10) { clearInterval(timer) }
}, 500);

// 2. 인자에 대한 제어권
// map

// index : 사람이 이해할 수 있는 변수명일 뿐
// currentValue : 사람이 이해할 수 있는 변수명일 뿐
// 그러므로, index와 currentValue 자리를 바꾸면 다른 결과 : 인자에 대한 제어권을 map함수가 갖고 있음.
let newArr = [10, 20, 30].map(function (currentValue, index) {
    console.log(currentValue, index);
    return currentValue +5; // map함수는 반드시 리턴 값
});

// 결과?
console.log(newArr); // [15, 25, 35]