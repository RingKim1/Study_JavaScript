// 콜백 함수 내부의 this에 다른 값 바인딩하기

// 콜백 함수 내부에서 this가 문백에 맞게 객체를 바라보게 할 수는 없을까?
// 콜백 함수 내부의 this에 다른 값을 바인딩 하는 방법


// closure 방식
// 함수가 끝났음에도 영향력을 미친다.

let obj1 = {
    name: "obj1",
    func: function() {
        let self = this;
        return function () {
            console.log(self.name);
        };
    }
};

let callback1 = obj1.func();
setTimeout(callback1, 1000);

let obj2 = {
    name: "obj2",
    func: obj1.func
};

let callback2 = obj2.func();
setTimeout(callback2, 1500);

let obj3 = {name: "obj3"};

let callback3 = obj1.func.call(obj3);
setTimeout(callback3, 2000);