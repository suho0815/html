// 함수
// 섭씨온도 화씨온도 변환
const cTof = (temp) => {
    let ftemp = (temp * (9/5)) + 32

    return ftemp;
}

// 화씨온도 섭씨온도 변환
const fToc = (temp) => {
    let ctemp = (t1.value - 32) * (5 / 9);
    return ctemp;
}

//select 토글
const selToggle = (s1, s2, t1, t2) => {

}

document.addEventListener("DOMContentLoaded", () => {
    const sel1 = document.querySelector('#sel1');
    const sel2 = document.querySelector('#sel2');

    const d1 = document.querySelector('#d1');
    const d2 = document.querySelector('#d2');

    // 단위표시
    d1.textContent = sel1.value ;
    d2.textContent = sel2.value ;

    // select 값이 변경이 될 때
    sel1.addEventListener('change', ()=> {
        // d1.textContent = sel1.value ;
        t1.value = '';
        t2.value = '';

        if(sel1.value == '°C'){
            sel2.value = '°F' ;
            // d2.textContent = '°F' ;
        } else if(sel1.value == '°F') {
            sel2.value = '°C' ;
            // d2.textContent = '°C' ;
        }

        d1.textContent = sel1.value ;
        d2.textContent = sel2.value ;

        // d1.textContent = event.target.value ;
        // d2.textContent = event.target.value ;
    });
    sel2.addEventListener('change', ()=> {
        // d2.textContent = sel2.value ;
        t1.value = '';
        t2.value = '';

        if(sel2.value == '°C'){
            sel1.value = '°F' ;
            // d1.textContent = '°F' ;
        } else if(sel2.value == '°F') {
            sel1.value = '°C' ;
            // d1.textContent = '°C' ;
        }

        d1.textContent = sel1.value ;
        d2.textContent = sel2.value ;
        
    });

    // 1C = 33.8F C-C C-F F-C F-F

    const t1 = document.querySelector('#t1');
    const t2 = document.querySelector('#t2');

    // input에 값이 입력 되었을 때
    t1.addEventListener('input', () => {
        console.log(event.target.value);

        if(sel1.value == sel2.value){
            t2.value = t1.value;
        } else if(sel1.value == '°C' && sel2.value == '°F') {
            t2.value = cTof(t1.value);
            //t2.value = (t1.value * (9/5)) + 32;
        } else if(sel1.value == '°F' && sel2.value == '°C') {
            t2.value = fToc(t1.value);
            //t2.value = (t1.value - 32) * (5 / 9);
        }

    });


});