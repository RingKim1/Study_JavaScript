// 데이터 베이스

// 관계형 데이터베이스
// SQL
// 정리된 정보를 다룰 때 사용 - 은행, 대기업

// 비관계형 데이터베이스
// Notonly SQL
// 복잡하거나 유연한 정보를 다룰 때 사용 - 스타트업

// Firestore
// 구글의 클라우드 기반 NoSQL 데이터베이스

// <script type="module"></script>
// module이 된 순간 script가 가장 나중에 불림
// onclick등 적용 안됨.

// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";


// 자신의 설정 : 프로젝트 설정 > SDK 설정 및 구성에서 `구성`
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxmDA6rs6xn9VEppvN9zyWdwoZwAlXnDI",
    authDomain: "sparta1-53d84.firebaseapp.com",
    projectId: "sparta1-53d84",
    storageBucket: "sparta1-53d84.appspot.com",
    messagingSenderId: "469061303115",
    appId: "1:469061303115:web:1ede19f00535b19f4b46ce",
    measurementId: "G-QSH1EKW3HT"
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 데이터 추가 스켈레톤
$("#id").click(async function () {
    let doc = {};
    await addDoc(collection(db, "콜렉션이름"), doc);
})

// 데이터 읽기 스켈레톤
let docs = await getDocs(collection(db, "콜렉션이름"));
docs.forEach((doc) => {
    let row = doc.data();
    console.log(row);
}); 

// 예시
$("#postingbtn").click(async function () {
    let image = $('#image').val();
    let title = $('#title').val();
    let content = $('#content').val();
    let date = $('#date').val();

    let doc = {
        'image': image,
        'title': title,
        'content': content,
        'date': date
    };
    await addDoc(collection(db, "albums"), doc);
    alert("저장 완료!")

    // 새로고침 : 하기 전에는 저장한 내용이 바로 보이지 않음.
    window.location.reload();
})