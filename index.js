//id로 태그 선택

const myTag = document.getElementById('btns');
console.log(myTag);
const myTag2 = document.getElementById('codeit');
console.log(myTag2);
//존재하지 않는 값이면 null이 출력


//class로 태그 선택하기
const myTags = document.getElementsByClassName('color-btn');
console.log(myTags);
console.log(myTags.length);
console.log(myTags[0]);

for (const a of myTags) {
    console.log(a);
}

//태그 이름으로 태그 선택하기
const myTag3 = document.getElementsByTagName('button');
console.log(myTag3);

console.log("-------------------------br-------------------------");


//선택자로 태그 선택하기
const myNumber = document.querySelector('#myNumber');
console.log(myNumber);

const myBtns = document.querySelectorAll('.color-btn');
console.log(myBtns);

//Event와 버튼 클릭
const decreaseBtn = document.querySelector('#decrease');
decreaseBtn.onclick = function () {
    alert('감소');
}
const increaseBtn = document.querySelector('#increase');
increaseBtn.onclick = function () {
    alert('증가');
}