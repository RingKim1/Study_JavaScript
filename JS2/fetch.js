// Fetch는 인터넷을 통해 데이터를 요청하고 받아오는 과정을 의미
// jQuery 임포트 필요?

// JSON : 데이터를 주고 받는 형식(key : value)
// Jsonview 설치 필요

// 서버 : 은행 지점
// api : 특정 창구 *허락된 곳에 접근만 허용


// 데이터를 주고 받을 때 여러 방식이 존재
// GET방식

// POST

/* --- 구분선 --- */

// fetch이용 데이터 가져오기
function hey() {
    let url = 'http://spartacodingclub.shop/sparta_api/seoulair';
    fetch(url).then(res => res.json()).then(data => {
        let rows = data['RealtimeCityAir']['row'];
        rows.forEach(a => {
            let gu_name = a['MSRSTE_NM'];
            let gu_mise = a['IDEX_MVL'];
            console.log(gu_name, gu_mise);
        });
    })
}

// 데이터 활용
function q1() {
    let url = 'http://spartacodingclub.shop/sparta_api/seoulair';
    // 기존 자료 지우기
    $('#names-q1').empty();
    fetch(url).then(res => res.json()).then(data => {
        let rows = data['RealtimeCityAir']['row'];
        // forEach문 사용
        rows.forEach(a => {
            let gu_name = a['MSRSTE_NM'];
            let gu_mise = a['IDEX_MVL'];
            console.log(gu_name, gu_mise);

            // 조건문 적용
            let temp_html = ``;
            if (gu_mise > 40) {
                temp_html = `<li class='bad'>${gu_name} : ${gu_mise}</li>`; // 이미 있는 변수에 let을 붙이면 안됨.
            } else {
                temp_html = `<li>${gu_name} : ${gu_mise}</li>`;
            }
            // jQuery를 이용 붙임
            $('#names-q1').append(temp_html);
        });
    })
}