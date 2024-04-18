// window: 전역객체 Global Object
console.log(window);
console.log(window.innerWidth);
console.log(window.innerHeight);

window.console.log(window);
window.console.log(window.innerWidth);
window.console.log(window.innerHeight);

// DOM (Document Object Model)
console.log(document);
console.log(typeof document);
console.dir(document);

// DOM (Document Object Model) : HTML 문서를 객체로 표현한 것
const title = document.querySelector('#title');
title.style.color = 'red';

// DOM 트리 여행하기
const myTag = document.querySelector('#list-1');
console.log(myTag);

// 형제 요소 노드
console.log(myTag.previousElementSibling);
console.log(myTag.nextElementSibling);

// 부모 요소 노드
console.log(myTag.parentElement);

// 자식 요소 노드
console.log(myTag.children[1]);
console.log(myTag.firstElementChild);
console.log(myTag.lastElementChild);

//요소 노드의 주요 프로퍼티

// textContext : HTML 태그 부분만 제외시킨 값을 가져옴
console.log(myTag.textContent);
myTag.textContent = "new text!"; //특수 문자도 반영

// outerHTML : 해당 요소를 포함한 전체 HTML 자체를 문자열로 리턴
console.log(myTag.outerHTML);
myTag.outerHTML = '<ul id="new-list"><li>Exotic</li></ul>' //새로운 값을 할당할 경우 요소 자체가 교체(주의)

//inner HTml : 요소 안에 있는 HTML 자체를 문자열로 리턴
console.log(myTag.innerHTML);
myTag.innerHTML += '<li>Exotic</li>' //수정
console.log(myTag.innerHTML);