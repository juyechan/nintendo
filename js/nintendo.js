

// for(let i = 0; i < li.length; i++){
//         (function(i){    
//         li[i].addEventListener("click",function(){
//                 liImg[i].style.display = 'block';
//         });     
//     })(i);
    
// }   

window.addEventListener('load',function(){
        const li = document.querySelectorAll('.button_box li')
        const ovimg = document.querySelectorAll('.ovimg');
        const liImg = document.querySelectorAll('.button_box li img')
        const act = document.querySelector('.act')
        const right_boximg = document.querySelectorAll('.right_boximg li img')
        const frontBtn = this.document.querySelector('.front_btn') 
        const backBtn = this.document.querySelector('.back_btn') 


        for(let i=0; i < li.length; i++){
                let nowIdx = 0;

                li[i].index = i;

                li[i].addEventListener('click',function(e){
                        e.preventDefault();
                        nowIdx = e.currentTarget.index;

                        for(let j=0; j <li.length; j++){
                                if(j == nowIdx){
                                liImg[j].classList.add('act');
                                right_boximg[j].classList.add('act');
                                
                                }else{
                                liImg[j].classList.remove('act');
                                right_boximg[j].classList.remove('act');
                                }
                        }
                })

                
        }

        


})
