var slides = document.querySelector('.slider_clip'),
    slide = document.querySelectorAll('.slider_clip li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 420,
    slideMargin = 50 

 makeClone();

 function makeClone(){
     for(var i = 0; i < slideCount ; i++){
        // a.clonNode(), a.cloneNode(true)
        var cloneSlide= slide[i].cloneNode(true);
         cloneSlide.classList.add('clone');
        /// a.appendChild(b)
        slides.appendChild(cloneSlide);
     }
     for(var i = slideCount-1; i >= 0; i--){
        var cloneSlide= slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        // a.prepend(b)
        slides.prepend(cloneSlide);
     }
     updateWidth();
     setInitialPos();
     setTimeout(function(){
         slides.classList.add('animated');
     },100);
     slides.classList.add('animated');
 };

 function updateWidth(){
     var currentSlides = document.querySelectorAll('.slide_clip li');
     var newSlideCount = currentSlides.length;
     
     var newWidth = (slideWidth + slideMargin)*newSlideCount - slideMargin + 'px';
     slides.style.width = newWidth;
}
function setInitialPos(){
    var initialTranslateValue = -(slideWidth + slideMargin)*slideCount;
    // slides{transfrom:translateX();}
    slides.style.transform = 'translateX('+ initialTranslateValue +'px)';
}


// slides.addEventListener('mouseout', function(){
//     autoslide();
// });
// slides.addEventListener('mouseover', function(){
//     stopSlide();
// });




var timer = undefined;

function autoslide(){
    if(timer == undefined){
        timer = setInterval(function(){
            moveSlide(currentIdx + 1);
        },3000);
    }
}
autoslide();
function stopSlide(){
    clearInterval(timer);

    timer = undefined;
    // console.log(timer);
}




function moveSlide(num){
    slides.style.left = -num*(slideWidth + slideMargin) +'px';
    currentIdx = num;
    // console.log(currentIdx, slideCount);
   
    if(currentIdx == slideCount || currentIdx == -slideCount){
       
        setTimeout(function(){
            slides.classList.remove('animated');
            slides.style.left = '0px';
            currentIdx = 0;
        }, 500);
        setTimeout(function(){
            slides.classList.add('animated');
        },600);
       
    }
}