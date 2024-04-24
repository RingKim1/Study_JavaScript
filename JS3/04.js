// this

// 런타임
// run + time
// 코드가 돌아가는 그 환경
// 1. 노드
// 2. 브라우저
// 전역 환경에서 this는 -> 노드(global 객체), 브라우저(window 객체)

console.log(this);
console.log(window);
console.log(this === window);

// 함수 vs 메서드
// 함수 : this -> 전역객체
// 메서드 : 호출 주체를 명시 가능, this -> 해당 객체

// AS-IS : 기존 것
// TO-BE : 이후 것

// 화살표 함수 : This Binding 생략

// 콜백 함수
// 콜백 함수도 함수기 때문에 this는 전역 객체를 참조
// 단 예외는 있다. : 콜백 함수에 별도로 this를 지정 한 경우 (addEventListener)

// 생성자 함수 내부에서의 this
// 생성자 : 구체적인 인스턴스(어려우면 객체로 이해)를 만들기 위한 일종의 틀
// this는 인스턴스를 지칭