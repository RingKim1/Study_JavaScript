// 비동기 작업의 동기적 표현

// Promise
// 비동기 처리에 대해, 처리가 끝나면 알려달라는 '약속'
// new 연산자로 호출한 Promise의 인자로 넘어간는 콜백은 바로 실행
// resolve : 성공 / reject : 실패 둘 중 하나가 실행되기 전 까지는
// 다음(then), 오류(catch)로 넘어가지 않음

new Promise(function (resolve) {
    setTimeout(function () {
        var name = '에스프레소';
        console.log(name);
        resolve(name);
    }, 500);
}).then(function (prevName) {
    // 이 안에서도 새롭게 Promise를 만듬
    return new Promise(function (resolve) {
        setTimeout(function () {
            var name = prevName + ', 아메리카노';
            console.log(name);
            resolve(name);
        }, 500);
    });
}).then(function (prevName) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            var name = prevName + ', 카페모카';
            console.log(name);
            resolve(name);
        }, 500);
    });
}).then(function (prevName) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            var name = prevName + ', 카페라떼';
            console.log(name);
            resolve(name);
        }, 500);
    });
});