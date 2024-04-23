// 조건문 (if, else if, else, switch)
// 1. if문
if (/*조건*/ true) {
    // 동작부분
}

// 1-1
let x = 10;
if(x < 0) {
    console.log("x는 양수입니다.");
}

// 1-2
let y = "Hello World";

if (y.length >= 5 ) {
    console.log(y.length);
}

// if - else문
if (x>0) {
    console.log(x + "는 양수입니다.");
} else {
    console.log(x + "는 음수입니다.");
}

// if - else if - else 문
let z = 10;
if (z < 0) {
    console.log("1번")
} else if (z >= 0 && z < 10) {
    console.log("2번")
} else {
    console.log("3번")
}

// 2. switch
// 변수의 값에 따라, 여러 개의 경우(case) 중 하나를 선택
// default
let fruit = "사과";

switch (fruit) {
    case "사과":
        console.log('사과 입니다.');
        break;
    case "바나나":
        console.log('바나나 입니다.');
        break;
    case "키위":
        console.log('키위 입니다.');
        break;
    default:
        console.log('아무것도 아닙니다.');
        break;
}