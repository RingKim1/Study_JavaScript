// obj
// 2가지 속성

let obj = {
    vals: [1, 2, 3],
    logValues: function (v, i) {
        console.log("테스트");
        console.log(thus, v, i);
    }
};

// method로서 호출
obj.logValues(1, 2);

// forEach, map, filter
[4, 5, 6].forEach(obj.logValues)