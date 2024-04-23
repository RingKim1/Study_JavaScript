// 객체
// key = value pair
// 하나의 변수의 여러개의 값을 넣을 수 있다!
// value의 오는 데이터 형태 제한은 없음.

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
let person = {
    name: "홍길동",
    age: 30,
    gender: "남자"
}

// 1-2. 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person1 = new Person("홍길동", 30, "male")
let person2 = new Person("홍길순", 28, "female")

// 2. 접근하는 방법
console.log("1", person.name)
console.log("2", person.age)
console.log("3", person.gender)

// 3. 객체 메소드(객체가 가진 여러가지 기능 : Object.~~~)
// 3-1. Object.keys() : key를 가져오는 메소드

let keys = Object.keys(person);
console.log("keys =>", keys);

// 3-2. values
let values = Object.values(person);
console.log("values =>", values);

// 3-3. entries
// key와 value를 묶어서 배열로 만든 배열!! (2차원 배열)
let entries = Object.entries(person);
console.log("entries =>", entries);

// 3-4. assign
// 객체 복사
let newPerson = {};
Object.assign(newPerson,person);
console.log("newPerson =>", newPerson);

let newPerson2 = {};
Object.assign(newPerson2,person,{age: 23}); // 입력한 값만 제외하고 바꿈.
console.log("newPerson2 =>", newPerson2);

// 3-5. 객체 비교
// 크기가 상당히 큼 -> 메모리에 저장할 때 별도의 공간에 저장
// personA 별도 공간에 대한 주소
let personA = {
    name: "홍길동",
    age: 30,
    gender: "남자"
}
// personA 별도 공간에 대한 주소
let personB = {
    name: "홍길동",
    age: 30,
    gender: "남자"
}

let str1 = "aaa";
let str2 = "aaa";

console.log("answer =>", personA === personB);
console.log("answer =>", str1 === str2);

console.log(JSON.stringify(personA) === JSON.stringify(personB)) // JSON에서 제공하는 기능 : 객체를 문자열화 시킴
console.log("\n")

// 3-6. 객체 병합
let personInfoA = {
    name: "홍길동",
    gender: "남자"
}

let personInfoB = {
    age: 30
}

// ... : spread operator
let perfectMan = {...personInfoA, ...personInfoB};
console.log(perfectMan);