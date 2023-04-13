

// 회문 체크 함수
const palindrome = (t1, t2) => {
    let s = t1.value;
    
    // 입력내용이 없는 경우
    if(s.length == 0) {
        document.querySelector("h2").textContent = '단어를 입력하세요.';
        return ;
    } 
    
    // 입력내용이 있는 경우
    // 방법1
    let rs = '';
    for(let i = s.length - 1; i >= 0; i--){
        // if(isNaN(i)) {
            rs = rs + s[i];
        // }
    }
    
    // 방법2 : 배열이용
    s = s.split(''); // 문자열.split()는 분리자를 통해 문자열 쪼개기
    s = s.reverse(); // 배열.reverse()는 배열의 요소를 뒤집음
    rs = s.join(''); // 배열.join() : 배열의 요소를 문자열로 묶음
    console.log("s=",s, "rs=", rs);

    // 결과 확인
    if(t1.value == rs){
        t2.value = "회문입니다." ;
    }else {
        t2.value = "회문이 아닙니다."; 
    }
}

// 숫자 합계 함수
const numSum = (t1, t2) => {
    // console.log(txt1.value);
    let s = t1.value;
    let sum = 0; // 변수 생성시 초기값 줘야댐. 초기값을 안주면 undefined 값이 나옴.
    // 문자열 순회
    for(let ch of s){
        //console.log(ch, !isNaN(ch)); // isNaN(변수); : 문자는 true, 숫자값은 false를 반환
        
        if(!isNaN(ch)){
            console.log(typeof(ch));
            sum += parseInt(ch);
        }
    }
    t2.value = sum ;
}

// 콜백 함수 : 인수를 함수로 사용
document.addEventListener("DOMContentLoaded", () => {
    // DOM요소 가져오기
    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");
   
    const bts = document.querySelectorAll(".bt"); // 배열 형태로 bt클래스 다 가져옴
    
    //버튼배열에 클릭 이벤트 작성
    for(let bt of bts){

        bt.addEventListener('click', (event) => {
            event.preventDefault(); // 이벤트 전파를 막음 (page 재로딩 방지)
            let gubun = bt.getAttribute('id').slice(-1) ;
            if(gubun === '1') palindrome(txt1, txt2);
            else numSum(txt1, txt2);
            
        });
    }

});