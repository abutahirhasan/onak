(function ($) {


    //------------>>Header<<----------------

    //On Scroll Functionality
    $(window).scroll(() => {
        var windowTop = $(window).scrollTop();
        windowTop > 100 ? $('.header').addClass('header-fixed') : $('.header').removeClass('header-fixed');
        windowTop > 100 ? $('.menu__list').css('top', '80px') : $('.menu__list').css('top', '100px');
    });

    //Click Logo To Scroll To Top
    $('.header__logo').on('click', () => {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });

    //Smooth Scrolling Using Navigation Menu
    $('a[href*="#"]').on('click', function (e) {
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 500);
        e.preventDefault();
    });

    //Toggle Menu
    $('.menu__toggle').on('click', () => {
        $('.menu__toggle').toggleClass('closeMenu');
        $('ul').toggleClass('showMenu');

        $('li').on('click', () => {
            $('ul').removeClass('showMenu');
            $('.menu__toggle').removeClass('closeMenu');
        });
    });

    //------------>>Header<<----------------









    //Animation on Scroll initializing
    AOS.init();


    //sale slider js
    var swiper = new Swiper(".sale__thumb", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        effect: "cube",
        grabCursor: false,
        cubeEffect: {
            shadow: false,
            slideShadows: false,
        },
    });




    //Countdown js initialization
    document.addEventListener('readystatechange', event => {
        if (event.target.readyState === "complete") {
            var clockdiv = document.getElementsByClassName("countdown__list");
            var countDownDate = new Array();
            for (var i = 0; i < clockdiv.length; i++) {
                countDownDate[i] = new Array();
                countDownDate[i]['el'] = clockdiv[i];
                countDownDate[i]['time'] = new Date(clockdiv[i].getAttribute('data-date')).getTime();
                countDownDate[i]['days'] = 0;
                countDownDate[i]['hours'] = 0;
                countDownDate[i]['seconds'] = 0;
                countDownDate[i]['minutes'] = 0;
            }

            var countdownfunction = setInterval(function () {
                for (var i = 0; i < countDownDate.length; i++) {
                    var now = new Date().getTime();
                    var distance = countDownDate[i]['time'] - now;
                    countDownDate[i]['days'] = Math.floor(distance / (1000 * 60 * 60 * 24));
                    countDownDate[i]['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    countDownDate[i]['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    countDownDate[i]['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);

                    if (distance < 0) {
                        countDownDate[i]['el'].querySelector('.countdown__number-days').innerHTML = 0;
                        countDownDate[i]['el'].querySelector('.countdown__number-hours').innerHTML = 0;
                        countDownDate[i]['el'].querySelector('.countdown__number-minutes').innerHTML = 0;
                        countDownDate[i]['el'].querySelector('.countdown__number-seconds').innerHTML = 0;
                    } else {
                        countDownDate[i]['el'].querySelector('.countdown__number-days').innerHTML = countDownDate[i]['days'];
                        countDownDate[i]['el'].querySelector('.countdown__number-hours').innerHTML = countDownDate[i]['hours'];
                        countDownDate[i]['el'].querySelector('.countdown__number-minutes').innerHTML = countDownDate[i]['minutes'];
                        countDownDate[i]['el'].querySelector('.countdown__number-seconds').innerHTML = countDownDate[i]['seconds'];
                    }
                }
            }, 1000);
        }
    });


    //contact form js
    $(function () {
        // Get the form.
        var form = $('#contact-form');

        // Get the messages div.
        var formMessages = $('.form-massage');

        // Set up an event listener for the contact form.
        $(form).submit(function (e) {
            // Stop the browser from submitting the form.
            e.preventDefault();

            // Serialize the form data.
            var formData = $(form).serialize();

            // Submit the form using AJAX.
            $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    data: formData
                })
                .done(function (response) {
                    // Make sure that the formMessages div has the 'success' class.
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');

                    // Set the message text.
                    $(formMessages).text(response);

                    // Clear the form.
                    $('#contact-form input, #contact-form textarea').val('');
                })
                .fail(function (data) {
                    // Make sure that the formMessages div has the 'error' class.
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');

                    // Set the message text.
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });
        });
    });



    //-------------->> Skill bar js <<-------------------
    $('.testing').progressBar({
        value: "70",
        height: "35",
        bg: "6f7d95",
    });


})(jQuery);

//------------>>See more text js<<----------------

function seeMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("seeMoreBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "See more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "See less";
        moreText.style.display = "inline";
    }
}
//------------>>see more text js end <<----------------