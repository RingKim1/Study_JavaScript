// 콜백함수 내부에서 this를 명시적으로 바인딩 하기 때문에 가능

// map함수는 새로운 배열 리턴
Array.prototype.map123 = function (callback, thisArg) {

    // map 함수에서 return할 결과 배열
    let mappedArr = [];

    for (let i = 0; i < this.length; i++) {
        let mappedValue = callback.call(thisArg || globalThis, this[i]);
        mappedArr[i] = mappedValue;
    }

    return mappedArr;
};

let newArr = [1, 2, 3].map123(function (number) {
    return number * 2;
})