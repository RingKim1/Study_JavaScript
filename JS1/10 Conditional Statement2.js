// 조건문의 중첩
let age = 20;
let gender = "여성";

// 미성년자 구분 예시
if (age >= 18) {
    if (gender === "여성") {
        console.log("성인 여성입니다.")
    } else {
        console.log("성인 남성입니다.")
    }
} else {
    if (gender === "여성") {
        console.log("미성년 여성입니다.")
    } else {
        console.log("미성년 남성입니다.")
    }
}

// 조건부 실행
let x = 10;

// if (x > 0) {
//     console.log("x는 양수입니다.")
// }

// and조건(&&)
x > 0 && console.log("x는 양수입니다.");

// or조건(||)
// 삼항 연산자와 단축평가
let y; // y에는 undefined
let z = y || 20; // y가 존재하지 않을 경우 기본적으로 우측에 있는 값을 세팅해줘

console.log(z);

console.log("--- 구분선 ---");
// falsy한 값, truthy한 값
if (0) {
    console.log("Hello");
}
if (false) {
    console.log("Hello");
}
if (undefined) {
    console.log("Hello");
}
if (NaN) {
    console.log("Hello");
}
if (null) {
    console.log("Hello");
}
if (true) {
    console.log("Hello");
} // 유일하게 실행