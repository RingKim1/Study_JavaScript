// 콜백지옥이란

// 콜백 함수를 익명 함수로 전달하는 과정이 반복외어 코드의 들여쓰기 수준이 헬 수준인 경우
// 주로 이벤트 처리 및 서버통신과 같은 비동기적 작업을 수행할 때 발생
// 문제? 
// 가독성이 지옥, 수정(유지보수)이 어려움

// 동기 vs 비동기

// 동기 : synchronous
// 현재 실행중인 코드가 끝나야 다음 코드 실행
// CPU의 계산에 의해 즉시 처리가 가능한 대부분의 코드는 동기적 코드
// 계산이 복잡해서 CPU가 계산하는 데 오래 걸리는 코드 역시 동기적 코드

// 비동기 : a + synchronous =>async
// 실행 중인 코드의 완료 여부와 무관하게 즉시 다음 코드로 넘어가는 방식
// setTimeout, addEventListner
// 별도의 요청, 실행 대기, 보류등과 관련된 코드는 모두 비동기적 코드

// 비동기적 코드의 이해!
setTimeout(function () {
    console.log("여기 먼저 실행?");
}, 500);

console.log("여기 좀 봐줘");

// 예시
setTimeout(
    function (name) {
        var coffeeList = name;
        console.log(coffeeList);

        setTimeout(
            function (name) {
                coffeeList += ", " + name;
                console.log(coffeeList);

                setTimeout(
                    function (name) {
                        coffeeList += ", " + name;
                        console.log(coffeeList);

                        setTimeout(
                            function (name) {
                                coffeeList += ", " + name;
                                console.log(coffeeList);
                            },
                            500,
                            "카페라떼"
                        );
                    },
                    500,
                    "카페모카"
                );
            },
            500,
            "아메리카노"
        );
    },
    500,
    "에스프레소"
);

// 기명함수 => 근본적인 해결책은 아님 : 비동기 작업의 동기적 표현이 필요
var coffeeList = '';

var addEspresso = function (name) {
	coffeeList = name;
	console.log(coffeeList);
	setTimeout(addAmericano, 500, '아메리카노');
};

var addAmericano = function (name) {
	coffeeList += ', ' + name;
	console.log(coffeeList);
	setTimeout(addMocha, 500, '카페모카');
};

var addMocha = function (name) {
	coffeeList += ', ' + name;
	console.log(coffeeList);
	setTimeout(addLatte, 500, '카페라떼');
};

var addLatte = function (name) {
	coffeeList += ', ' + name;
	console.log(coffeeList);
};

setTimeout(addEspresso, 500, '에스프레소');