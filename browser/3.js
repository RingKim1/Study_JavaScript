// 노드 삭제와 이동
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// 노드 삭제하기: Node.remove()
// tomorrow.remove();
// today.children[2].remove();

// 노드 이동하기 :
// 자식 노드 prepend, append
// 형제 노드  before, after

// today.append(tomorrow.children[1]);
tomorrow.children[1].after(today.children[1]);
tomorrow.children[2].before(today.children[1]);
tomorrow.lastElementChild.before(today.children[0]);
