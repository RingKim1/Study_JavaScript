// for, while, do-while => ~ 동안 : 반복문

// for (초기값; 조건식; 증감식) {
// }

for (let i = 0; i < 10; i++) {
    console.log("for문 돌아가고 있음 => " + i);
}

// 배열과 for문
const arr = ["one", "two", "three", "four", "five"];
for (let i = 0; i < arr.length; i++) {
    console.log(i);
    console.log(arr[i]);
}

// ex) 0부터 10까지 수 중에서 2의 배수만 console.log로 출력하는 예시
for (let i = 0; i <= 10; i++) {
    if (i >= 2) {
        if (i % 2 === 0) {
            // 2로 나눠떨어지는 수 = 2의 배수
            console.log(i);
        }
    }
}

// for ~ in문
// 객체의 속성을 출력하는 문법
let person = {
    name: "John",
    age:30,
    gender: "male"
}


for(let key in person) {// key = 객체 안의 key를 의미
    console.log(key + " : " + person[key])
}
console.log("\n")

// while

// while (조건) {
//     // main logic
//     // 증감
// }

let i = 3;
while (i < 100) {
    if(i % 5 === 0 ){
    console.log(i + "는 5의 배수입니다.");
}
i++; // 하지 않을 경우 무한루프..
}

// do ~ while
// 먼저 do 를 시행
// while 조건에 맞으면 계속 시행, 벗어나면 탈출
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10);
console.log("\n")


// break, continue
for (let i = 0; i <= 10; i++) {
    if(i === 5) {
        break; // break를 만나면 벗어남
    }
    console.log(i);
}

for (let i = 0; i <= 10; i++) {
    if(i === 5) {
        continue; // continue를 만나면 다음 순서(for문)로 넘어감
    }
    console.log(i);
}

let j = 2;
console.log(j);