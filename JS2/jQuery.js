// jQuery 누군가 만들어 놓은 CDN
/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> */

// 아이디 타이틀의 텍스트를 '안녕하세요'로 바꿈
function hey() {
    $('#title').text('쥬라기 월드')
}

//아이디 q1을 지움
$('#q1').empty();

//아이디 q1에 <p>감자</p>를 붙임
let temp_html = `<p>감자</p>` //백틱(`)이 핵심
$('#q1').append(temp_html);

//fruits를 한번씩 돌면서 q1에 붙임
let fruits = ['사과', '배', '감', '귤', '수박']
fruits.forEach(a => {
    let temp_html = `<p>${a}</p>`;
    $('#q1').append(temp_html);
});

//아이디 q2를 지우고 people을 돌면서 q2에 다시 붙임
let people = [
    { 'name': '서영', 'age': 24 },
    { 'name': '현아', 'age': 30 },
    { 'name': '영환', 'age': 12 },
    { 'name': '서연', 'age': 15 },
    { 'name': '지용', 'age': 18 },
    { 'name': '예지', 'age': 36 }
]        

$('#q2').empty();

people.forEach(a => {
    let temp_html = `<p>${a['name']}는 ${a['age']}살 입니다.</p>`; //백틱(`)이 핵심
    $('#q2').append(temp_html);
});

//value값 가져옴
let image = $('#image').val();

//카드를 만들어서 아이디 card에 붙여 넣음
function makeCard() {
    let image = $('#image').val();
    let title = $('#title').val();
    let content = $('#content').val();
    let date = $('#date').val();
    
    
    let temp_html = `            
    <div class="col">
    <div class="card h-100">
        <img src="${image}"
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${content}</p>
        </div>
        <div class="card-footer">
            <small class="text-body-secondary">${date}</small>
        </div>
    </div>
</div>`;
$('#card').append(temp_html);
}

// 준비가 되면 불러옴
// script type="module"이 되는 순간 script는 로딩이 되는 순간 불러오기 때문에 사실상 필요 없음.
$(document).ready(function () {
	alert('안녕!');
})