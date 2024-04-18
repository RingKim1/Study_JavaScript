// 스타일 다루기
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// elem.classList: add, remove, toggle
const item = tomorrow.children[1];
const item2 = tomorrow.children[2];

item.classList.add('done', 'another', 'other');
item.classList.remove('other');
item2.classList.toggle('done');
item2.classList.toggle('done', true); //add기능(toggle의 기능 강제)
item2.classList.toggle('done', false); //remove기능

// elem.className
today.children[1].className = 'done';

// style 프로퍼티
today.children[0].style.textDecoration = 'line-through';
today.children[0].style.backgroundColor = '#DDDDDD';
today.children[2].style.textDecoration = 'line-through';
today.children[2].style.backgroundColor = '#DDDDDD';