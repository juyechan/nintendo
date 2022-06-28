var slides = document.querySelector('#content1_main'),
    slide = document.querySelectorAll('#content1_main li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 280,
    slideMargin = 60,
    prevBtn = document.querySelector('.btn_left'),
    nextBtn = document.querySelector('.btn_right');
    pauseBtn = document.querySelector('.btn_pause')
    imgs = 17;
    var now = 0;

    slides.style.width = (slideWidth + slideMargin)*slideCount - slideMargin + 'px';

    function moveSlide(num){
        slides.style.left = -num*330 + 'px';
        currentIdx = num;
    }

    nextBtn.addEventListener('click',function(){
        if(currentIdx < slideCount -6){
            moveSlide(currentIdx+1);
            console.log(currentIdx);
        }else{
            moveSlide(0)
        }
       
       
    });
    prevBtn.addEventListener('click',function(){
        if(currentIdx > 0){
            moveSlide(currentIdx-1);
            console.log(currentIdx);
        }else{
            moveSlide(slideCount-6);
        }
    });

    

    pauseBtn.addEventListener('click',function(){
        function autoslide(){
            now = now == imgs ? 0 : now += 1;
    
            slide.eq(now-1).moveSlide(now);
            slide.eq(now).moveSlide(0);
            
        }
    
        function start(){
            slide.eq(0).slibings().moveSlide(now);
            setInterval(function(){
                autoslide()},2000);
        }
        start();
    });

    
    