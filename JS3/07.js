// bind 메서드
// -> this를 바인딩 하는 메서드
// call, apply와는 좀 다름, 즉시 호출하지는 않음

var func = function (a, b, c, d) {
    console.log(this, a, b, c, d);
}
func(1, 2, 3, 4); // global 1 2 3 4

// 목적
// 1. 함수에 This를 '미리'적용
var bindFunc1 = func.bind({ x: 1 });
bindFunc1(5, 6, 7, 8);

// 2. 부분 적용 함수
var bindFunc2 = func.bind({ x: 1 }, 4, 5);
bindFunc2(6, 7);
bindFunc2(9, 10);


// name 프로퍼티!!
// bind - bound 라는 접두어
// bind 함수를 적용한 함수는 bound 라는 접두어가 붙음.(추적하기 쉬움)
console.log(func.name); // func
console.log(bindFunc1.name); // bound func
console.log(bindFunc2.name); // bound func