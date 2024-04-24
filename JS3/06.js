// Array.from
// 객체에서 배렬로의 형 변환
// ES6에서 등장

// 유사배열
// length를 가지고 있어야 함
// index
// push나 slice같은 메소드 사용 하지 못함

var obj = {
    0:'a',
    1:'b',
    2:'c',
    length:3
};

// 객체 -> 배열
var arr = Array.from(obj);

// 찍어보면 배열이 출력
console.log(arr);