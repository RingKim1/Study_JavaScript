// forEach, map, filter, find
let numbers = [3, 5, 2, 4, 1];

// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
// forEach : item 요소에 numbers에 있는 각 요소들이 순회를 돔
numbers.forEach(function(item) {
    console.log("item => " + item);
});

// (2) map
// 항상 원본 배열의 길이만큼이 return 된다. (안 할 경우 undefined 값이 길이만큼.)
// map함수에는 반드시 return문을 가져야 함.
let newNumbers = numbers.map(function (item) {
    return item *2;
})
console.log(newNumbers);

// (3) filter
// 조건에 해당하는 요소 반환
let filteredNumbers = numbers.filter(function (item) {
    return item > 3;
})
console.log(filteredNumbers);

// (4) find
// 해당하는 첫 번째 요소만 반환
let result = numbers.find(function (item) {
    return item > 3;
})
console.log(result);