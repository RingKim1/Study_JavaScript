// 스코프, 전역변수, 지역변수, 화살표함수
let x = 10;

function printX() {
    let x = 5;
    console.log(x);
}

console.log(x);
printX();

// 화살표 함수
// ES6 신 문법
function add (x, y) {
    return x + y;
}

// 1-1. 기본적인 화살표 함수
let arrowFunc01 = (x, y) => {
    return x + y;
}

// 1-2. 한 줄로 (중괄호 안이 한 줄일 경우)
let arrowFunc02 = (x, y) => x + y;

// 
function testFunc(x) {
    return x;
}

// 화살표 함수로!
let arrowFunc03 = x => x;