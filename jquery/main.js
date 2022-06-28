$(window).scroll(function(){//브라우저창에 스크롤에 의해 실행
    $('.top_fixed').click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({scrollTop:0},500);
    });
   })