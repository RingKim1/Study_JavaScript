// 명시적 this binding
// call, apply, bind

// call
// 기존에 있었던 method 뒤에 붙어서 즉시 실행을 해주되,
// 앞에 this로 묶을 객체로 붙여주고 나서 나머지 매개변수를 넣어주면 됨

var func = function (a, b, c) {
    console.log(this, a, b, c);
}

// nobinding
func(4, 5, 6); // 전역객체 4 5 6
// 명시적 binding
func.call({x:1}, 4, 5, 6); // {x:1} 4 5 6


var obj = {
    a: 1,
    method: function (x, y) {
        console.log(this.a, x, y)
    }
}

// method 함수 안의 this는 항상 obj
obj.method(2, 3); // 1 2 3
obj.method.call({a:4}, 5, 6); // 4 5 6

// apply
// call과 동일하게 즉시실행 함수
func.apply({x:1}, [4, 5, 6]); // {x:1} 4 5 6
obj.method.apply({a:4}, [5, 6]); // 4 5 6

