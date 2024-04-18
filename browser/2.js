const today = document.querySelector('#today');

today.innerHTML = '<li>처음</li>' + today.innerHTML;
today.innerHTML = today.innerHTML + '<li>마지막</li>';

today.outerHTML = '<p>이전</p>' + today.outerHTML; 

const newToday = document.querySelector('#today');
newToday.outerHTML = newToday.outerHTML + '<p>다음</p>';

// 요소 노드 추가하기
const tomorrow = document.querySelector('#tomorrow');

// 1. 요소 노드 만들기: document.createElement('태그이름')
const first = document.createElement('li');

// 2. 요소 노드 꾸미기: textContent, innerHTML, ...
first.textContent = '처음';

// 3. 요소 노드 추가하기: NODE.prepend, append, after, before
tomorrow.prepend(first);

const last = document.createElement('li');
last.textContent = '마지막';
tomorrow.append(last); //파라미터로 전달한 값을 메소드를 호출한 노드의 제일 마지막 자식 노드로

const prev = document.createElement('p');
prev.textContent = '이전';
tomorrow.before(prev, '추가'); //호출한 노드의 앞에 형제 노드로

const next = document.createElement('p');
next.textContent = '다음';
tomorrow.after(next); //호출한 노드의 뒤에 형제 노드로