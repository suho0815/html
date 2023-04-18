// const boom = (grid3, n) => {

//     for (let cbt1 of grid3) {
//         cbt1.addEventListener('click', (e) => {
//             e.preventDefault();
//             console.log(cbt1);
            
//             if(cbt1.textContent == n){
//                 cbt1.innerHTML ="<img src='../images/boom.png'>"
//             } else {
//                 cbt1.innerHTML ="<img src='../images/hart.png'>"
//             }


//             // txt1.value = arr.toString();
            
//         });
//     }
// }

document.addEventListener("DOMContentLoaded", (e)=>{
    e.preventDefault();
    const bt = document.querySelector("#bt");
    const grid3 = document.querySelectorAll(".grid3");

    // 폭탄 섞기
    // 폭탄 위치를 놓을 랜덤(1~9)값 
    let n = Math.floor(Math.random() * 9) + 1;
    console.log(n);
    
    bt.addEventListener("click", (e) => {
        e.preventDefault();
        n = Math.floor(Math.random() * 9) + 1;
        console.log(n);
        document.querySelector('article h1').textContent = '폭탄게임';
        for(let i = 0; i < 10 ; i++) {
            grid3[i].textContent = i+1;
        }

    });
    
    // 클릭 이벤트
//    boom(grid3, n);

for (let cbt1 of grid3) {
    cbt1.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(cbt1);
        
        if(cbt1.textContent == n){
            // cbt1.style.backgroundImage = "url('../images/boom.png')" ;
            cbt1.innerHTML ="<img src='../images/boom.png'>" ;
            document.querySelector('article h1').textContent = '폭탄게임 : (폭탄찾음)';
        } else {
            cbt1.innerHTML ="<img src='../images/hart.png'>" ;
        }


        // txt1.value = arr.toString();
        
    });
}

   console.log(grid3);
});