document.addEventListener("DOMContentLoaded", () => {
    const boxs = document.querySelectorAll('.grid3');
    const bt1 = document.querySelector('#bt');

    //초기 배열 : 1이 폭탄 위치
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
    //클릭 확인
    let flag = true;
    //하트 개수
    let cnt = 0;
    //눌러진 순서
    let selarr = [];

    //폭탄 섞기 버튼
    bt1.addEventListener('click', () => {
        if (flag) {
            arr.sort(() => Math.random() - 0.5); // 배열 셔플
            console.log(arr);
            flag = false;
            cnt = 0;
            selarr = [];
            document.querySelector('h2').innerHTML = '';
            for (let box of boxs){
                box.innerHTML = box.getAttribute('id').replace('box', '');
            }
        }
    });

    //div박스 제어
    for (let box of boxs) {
        //박스 번호 넣기
        // box.innerHTML = box.getAttribute('id').slice(-1) ;
        box.innerHTML = box.getAttribute('id').replace('box', '');

        box.addEventListener('click', () => {
            let n = parseInt(box.textContent);
            
            //기존에 하트나 폭탄이 들어간 경우
            if (isNaN(n)) return;

            //폭탄이 눌러지지 않은 경우
            if (!flag ) {
                //선택 항목 추가
                selarr.push(n);
                cnt++;
                console.log('n=', n ,'selarr=', selarr) ;

                //폭탄 하트 구분
                if (arr[n - 1] == 0) {
                    //하트
                    box.innerHTML = '<img src="../images/hart.png">';
                    if(cnt == 8){
                        flag =true;
                        document.querySelector('h2').innerHTML = '성공!!';

                        //차집합 이용
                        let lastArr = [1,2,3,4,5,6,7,8,9].filter((item)=> !selarr.includes(item));
                        console.log(lastArr[0])
                        boxs[lastArr[0]-1].innerHTML = '<img src="../images/hart.png">';
                        
                        //1이 있는 위치 찾기 findIndex 이용
                        // let lastn = arr.findIndex((item) => item == 1) ;
                        // boxs[lastn].innerHTML = '<img src="../images/hart.png">';
                    }

                    
                } else {
                    //폭탄
                    box.innerHTML = '<img src="../images/boom.png">';
                    flag = true;
                    
                    document.querySelector('h2').innerHTML = '실패!!';
                }

                // if (cnt == arr.length - 1){
                //     document.querySelector('h2').innerHTML = '성공!!';
                // }
            }
        });


    }

});