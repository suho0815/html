document.addEventListener("DOMContentLoaded", () => {
    const cbt1s = document.querySelectorAll(".cbt1"); //배열에 담음
    const cbt2s = document.querySelectorAll(".cbt2");
    const cbt3s = document.querySelectorAll(".cbt3");
    const btReset = document.querySelector("#btReset");

    const txt1 = document.querySelector("#txt1");

    // 배열의 초기화
    let arr = [];

    // 버튼 이벤트 추가
    // reset 기능 구현
    btReset.addEventListener('click', (e) => {
        e.preventDefault();
        txt1.value = '';
        arr = [];
        console.log(arr);
    });

    // 배열에 자료 추가
    for (let cbt1 of cbt1s) {
        cbt1.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(arr);
            switch (cbt1.textContent) {
                case '사과':
                    arr.push('🍎');
                    break;
                case '바나나':
                    arr.push('🍌');
                    break;
                case '오렌지':
                    arr.push('🍊');
                    break;
                case '수박':
                    arr.push('🍉');
                    break;
            }
            // txt1.value = arr.toString();
            txt1.value = arr.join(','); //input태그는 value를 사용
        });
    }

    // 배열.filter((item) => 조건식 , 바꿀거(선택사항)) : 기존배열을 기반으로 새로운 배열 만듬
    // 배열.map((배열) => 할 일)

    // 배열에서 자료 삭제
    for (let cbt2 of cbt2s) {
        cbt2.addEventListener('click', (e) => {
            e.preventDefault();
            let gubun = cbt2.textContent.replace('삭제', '');
            // 배열 filter() 의 로직
            // let temp = [];
            // for (let item of arr) {
            //     switch (gubun) {
            //         case '사과':
            //             if (item != '🍎') temp.push(item);
            //             break;
            //         case '바나나':
            //             if (item != '🍌') temp.push(item);
            //             break;
            //         case '오렌지':
            //             if (item != '🍊') temp.push(item);
            //             break;
            //         case '수박':
            //             if (item != '🍉') temp.push(item);
            //             break;
            //     }
            // }
            // arr = temp;
            switch (gubun) {
                case '사과':
                    arr = arr.filter((item) => item != '🍎');
                    break;
                case '바나나':
                    arr = arr.filter((item) => item != '🍌');
                    break;
                case '오렌지':
                    arr = arr.filter((item) => item != '🍊');
                    break;
                case '수박':
                    arr = arr.filter((item) => item != '🍉');
                    break;
            }

            console.log("cbt2", arr)
            txt1.value = arr.join(',');
        });
    }

    for (let cbt3 of cbt3s) {
        cbt3.addEventListener('click', (e) => {
            e.preventDefault();
            let gubun = cbt3.textContent.split('->')[0].trim();
            console.log(gubun);

            // let temp = [];
            // for (let item of arr) {
            //     switch (gubun) {
            //         case '사과':
            //             if (item == '🍎') temp.push('🥕');
            //             else temp.push(item);
            //             break;
            //         case '바나나':
            //             if (item == '🍌') temp.push('🥒');
            //             else temp.push(item);
            //             break;
            //         case '오렌지':
            //             if (item == '🍊') temp.push('🥑');
            //             else temp.push(item);
            //             break;
            //         case '수박':
            //             if (item == '🍉') temp.push('🥦');
            //             else temp.push(item);
            //             break;
            //     }
            // }
            // arr = temp;

            //map 함수로 배열 바꿔치기 가능
            switch (gubun) {
                case '사과':
                    arr = arr.map((item) => item == '🍎' ? '🥕' : item);
                    break;
                case '바나나':
                    arr = arr.map((item) => item == '🍌' ? '🥒' : item);
                    break;
                case '오렌지':
                    arr = arr.map((item) => item == '🍊' ? '🥑' : item);
                    break;
                case '수박':
                    arr = arr.map((item) => item == '🍉' ? '🥦' : item);
                    break;
            }

            // 문자열.replaceAll 활용
            // temp = arr.join(',');
            // switch (gubun) {
            //     case '사과':
            //         temp = temp.replaceAll('🍎', '🥕');
            //         break;
            //     case '바나나':
            //         temp = temp.replaceAll('🍌', '🥒');
            //         break;
            //     case '오렌지':
            //         temp = temp.replaceAll('🍊', '🥑');
            //         break;
            //     case '수박':
            //         temp = temp.replaceAll('🍉', '🥦');
            //         break;
            // }
            // arr = temp.split(',');

            txt1.value = arr.join(',');
        });
    }

});