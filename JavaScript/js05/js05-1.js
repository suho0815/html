document.addEventListener("DOMContentLoaded", () => {
    const bt1 = document.querySelector('#bt1');

    bt1.addEventListener('click', () => { //버튼 클릭 이벤트
        event.preventDefault();

        //랜덤수 생성
        let n = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".h2Class").innerHTML = `<img src='../images/${n}.png'>`; 
    
        
        //사용자 입력 수 : 라디오 체크값을 찾음
        let user;
        const radios = document.querySelectorAll("input[type=radio]");
        for(let item of radios) {
            // console.log(item.value);
            if(item.checked) {
                user = item.value;
                break;
            }
        }
    
        //랜덤수와 사용자 입력 수가 같은지 검사
        // console.log(n);
        // console.log(typeof(user)); //type확인
        if(n === parseInt(user)){ // parseInt() : Int형 변수로 변환
            document.querySelector('article h1').textContent = '주사위게임 : 맞음(승)';
        } else {
            document.querySelector('article h1').textContent = '주사위게임 : 틀림(패)';
        }
    });

});