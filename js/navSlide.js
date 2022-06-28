var header = document.querySelector('#header'),
    nav = document.querySelector('nav');
    mainBtn = document.querySelectorAll('.main_btn');
    logo = document.querySelector('.logo > img');
    main_menu = document.querySelector('.main_menu');

    header.addEventListener('mouseover', function(){
        // header.style.height = '400px';
        header.classList.add('active');
    });

    header.addEventListener('mouseout', function(){
        // header.style.height = '100px';
        header.classList.remove('active');
    });
