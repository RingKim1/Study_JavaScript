// bind
let obj1 = {
    name: "obj1",
    func: function () {
        console.log(this.name);
    }
};

let boundObj1 = obj1.func.bind(obj1);
setTimeout(boundObj1, 1000);

// 함수자체를 바인딩 하는 방법

let obj2 = {name: "obj2"};
setTimeout(obj1.func.bind(obj2), 1500);
