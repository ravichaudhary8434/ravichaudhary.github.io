function switchClass(i) {
    var lis = $("#home-news > div");
    lis.eq(i).removeClass("home_header_on");
    lis.eq(i).removeClass("home_header_out");
    lis.eq((i = ++i % lis.length)).addClass("home_header_on");
    lis.eq((i = ++i % lis.length)).addClass("home_header_out");
    setTimeout(function () {
        switchClass(i);
    }, 3500);
}

$(window).load(function () {
    switchClass(-1);
});

// Navbar scroll

// add padding top to show content behind navbar
$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function () {
        scroll_top = $(this).scrollTop();
        if (scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}

// Spinner
$(document).ready(function () {
    //Preloader
    preloaderFadeOutTime = 500;
    function hidePreloader() {
        var preloader = $('.spinner-wrapper');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});