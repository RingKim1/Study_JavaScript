// 함수 = function(기능)
// input, output을 가지고 있는 기능의 단위

// 1. 함수 선언문
function funName (매개변수) {
    // 함수 내부에서 실행 할 로직
}

function add (x, y) {
    let result = x + y;
    return result;
}

// 2. 함수 표현식
let add2 = function (x, y) {
    return x + y;
}

// 함수를 호출한다(= 사용한다)
// 함수명() ->add(입력값)
let functionResult = add(3,4);
console.log(add(3,4));


console.log(add2(10,20));

// input :  함수의 input ->
// output :  return문 뒤에 오는 값 : 반환값