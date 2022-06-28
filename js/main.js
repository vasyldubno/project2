$(function () {
    // burger menu
    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__nav').hasClass('header__nav--open') === false) {
            $('.burger').addClass('burger--follow')
        }
        else {
            $('.burger').removeClass('burger--follow')
        }
    }, 0);
    // BURGER OVERLAY
    $('.burger, .overlay, .header__nav a').on('click', function (e) {
        e.preventDefault()
        $('.header__nav').toggleClass('header__nav--open')
        $('.overlay').toggleClass('overlay--show')
    })
})