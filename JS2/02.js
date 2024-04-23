// Map
// JS -> 객체, 배열 : 많고, 다양하고, 복잡한 프로그램
// 그럼에도, 현실세계 반영하기는 많이 어려움
// Map, Set 추가적인 자료구조 등장

// Map, Set의 목적 : 데이터의 구성, 검색, 사용을 효율적으로 처리 > 기존의 객체 또는 배열보다

// (1) Map
// - Key / Value
// - Key에 어떤 데이터타입(유형)도 다 들어올 수 있다.
// - Map은 키가 정렬된 순서로 저장되기 때문이다.
// 기능 > 검색, 삭제, 제저, 여부 확인

const myMap = new Map();
// 저장 : myMap.set('key','value');
// 접근 : myMap.get('key')

// Map의 반복 -> method : keys, values, entries

// iterator : 반복자
// for (... of ...) {}

myMap.set('one','1');
myMap.set('two','2');
myMap.set('three','3');

console.log(myMap.keys());
for (const key of myMap.keys()) {
    console.log(key);
}

console.log(myMap.values());
for (const value of myMap.values()) {
    console.log(value);
}

console.log(myMap.entries());
for (const value of myMap.entries()) {
    console.log(value);
}

console.log(myMap.size); // map의 사이즈(길이)
console.log(myMap.has("two")); // key 기반 검색