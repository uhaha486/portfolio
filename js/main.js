$(function () {
    $('.button-group #one').click(function () {
        $('.box').removeClass('show');
        $('.illustration').addClass('show');

    });
    $('.button-group #two').click(function () {
        $('.box').removeClass('show');
        $('.banner').addClass('show');
    });
    $('.button-group #three').click(function () {
        $('.box').removeClass('show');
        $('.mainpage').addClass('show');
    });
    $('.button-group #four').click(function () {
        $('.box').removeClass('show');
        $('.mobile').addClass('show');
    });
    $('.button-group #five').click(function () {
        $('.box').removeClass('show');
        $('.website').addClass('show');
    });

    // 애니메이션 처리 함수(이벤트)
    function animateCSS(element, animationName, callback) {
        const node = document.querySelector(element)
        node.classList.add('animated', animationName)

        function handleAnimationEnd() {
            node.classList.remove('animated', animationName)
            node.removeEventListener('animationend', handleAnimationEnd)

            if (typeof callback === 'function') callback()
        }

        node.addEventListener('animationend', handleAnimationEnd)
    }

    // 요소명
    var el = '.far';
    var easing = 'headShake'

    // 이벤트
    $(el).on('click', function () {

        animateCSS(el, easing, function () {
            // 애니메이션 재생 종료
            $(this).removeClass('animated bouce')
        })
    })






}); // end $()11



//go up button
$(function () {
    $(window).scroll(function () {
        var s = $(window).scrollTop();
        console.log(s)
        if (s > 400) {
            $('.goTopButton').addClass('show');
            $('.quick-menu').addClass('show');
        } else {
            $('.goTopButton').removeClass('show');
            $('.quick-menu').removeClass('show');
        }


        //scroll change color of letters
        //about
        var work_top = $('#main').offset().top;
        //window 스크롤 값
        var win_offSet = $(window).scrollTop();
        console.log('win_offset', win_offSet);
        console.log('work_top', work_top);

        if (win_offSet >= work_top) {
            $('#side1').css('color', '#fff');
           

        } else if(win_offSet > 903){
            $('#side1').css('color', ' rgb(96, 189, 250)');
        }


        //work
        //work고정값
        var work_top = $('#work').offset().top;

        //window 스크롤 값
        var win_offSet = $(window).scrollTop();
        console.log('win_offset', win_offSet);
        console.log('work_top', work_top);

        if (win_offSet >= work_top) {
            $('#side2').css('color', '#fff');
            console.log('work');

        } else {
            $('#side2').css('color', ' rgb(96, 189, 250)');
        }

        //skills
        //skill고정값
        var work_top = $('#skills').offset().top;

        //window 스크롤 값
        var win_offSet = $(window).scrollTop();
        console.log('win_offset', win_offSet);
        console.log('work_top', work_top);

        if (win_offSet >= work_top) {
            $('#side3').css('color', '#fff');
            console.log('work');

        } else {
            $('#side3').css('color', ' rgb(96, 189, 250)');
        }

        //contact
        //contact고정값
        var work_top = $('#contact').offset().top;

        //window 스크롤 값
        var win_offSet = $(window).scrollTop();
        console.log('win_offset', win_offSet);
        console.log('work_top', work_top);

        if (win_offSet >= work_top) {
            $('#side4').css('color', '#fff');
            console.log('work');

        } else {
            $('#side4').css('color', ' rgb(96, 189, 250)');
        }





      

    });


});

// const el = document.querySelector('.counter')
// new Waypoint( {
//     element: el,
//     handler: function() { 
//       counterUp( el ) 
//       this.destroy()
//     },
//     offset: 'bottom-in-view'
// })