function switchClass(i) {
    var lis = $(".title-animation > div");
    lis.eq(i).removeClass("title-box_on");
    lis.eq(i).removeClass("title-box_out");
    lis.eq((i = ++i % lis.length)).addClass("title-box_on");
    lis.eq((i = ++i % lis.length)).addClass("title-box_out");
    setTimeout(function () {
        switchClass(i);
    }, 3500);
}

$(window).load(function () {
    switchClass(-1);
});

// Navbar scroll

// add padding top to show content behind navbar
$('body').css('padding-top', $('.navbar').outerHeight() + 'px');

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


// Padding to the animation
const navbar = document.querySelector('.navbar');
const animatedtext = document.querySelector('.banner-container .circles');
animatedtext.style.top = `${navbar.offsetHeight}px`;
window.addEventListener('resize', () => {
    animatedtext.style.top = `${navbar.offsetHeight}px`;
});

// Color and offsert of Skill card
const colors = ['red', 'green', 'yellow', 'white', 'purple', 'orange', 'blue', 'red', 'green', 'yellow', 'white', 'purple', 'orange', 'blue'];
const percent = [85, 90, 70, 80, 80, 75, 65, 70, 85, 75, 80, 90, 75, 70];
const circles = document.querySelectorAll('svg circle:nth-child(2)');

let k = 0;
let offset;
circles.forEach(circle => {
    circle.style.stroke = colors[k];
    offset = 440 - (440 * percent[k]) / 100;
    circle.style.strokeDashoffset = offset;
    k++;
})

// Divider 

// const divider = document.createElement('div');


document.querySelectorAll('.divider').forEach(divider => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const div4 = document.createElement('div');
    const i = document.createElement('i');

    // Ading CSS Class
    div1.classList.add('divider-custom');
    div1.classList.add('divider-light');
    div2.classList.add('divider-custom-line');
    div3.classList.add('divider-custom-icon');
    div4.classList.add('divider-custom-line');
    i.classList.add('fa');
    i.classList.add('fa-star');

    // Appending child
    div3.appendChild(i);
    div1.appendChild(div2);
    div1.appendChild(div3);
    div1.appendChild(div4);

    // Appending to the dom
    divider.appendChild(div1);
});

// Contact Sec
// Contact Form
$(".contact-form")
    .find(".form-control")
    .each(function () {
        var targetItem = $($(this).parent()).parent();
        if ($(this).val()) {
            $(targetItem).find("label").css({
                top: "10px",
                fontSize: "14px"
            });
        }
    });
$(".contact-form")
    .find(".form-control")
    .focus(function () {
        $(this).parent().find("label").animate(
            {
                top: "10px",
                fontSize: "14px"
            },
            300
        );
    });
$(".contact-form")
    .find(".form-control")
    .blur(function () {
        if ($(this).val().length == 0) {
            $(this).parent().find("label").animate(
                {
                    top: "35px",
                    fontSize: "18px"
                },
                300
            );
        }
    });


// Script

// const scriptURL = 'https://script.google.com/macros/s/AKfycbzTyuGlZnHR6LeaJvo5RGIpnAfiAa9LKAsaLJ5iKcF4oE1jSt4/exec'
const scriptURL = 'https://script.google.com/macros/s/AKfycbziV6bXkeCXa2F9K3wc0a4-vqdRthZkrdBf-M9LNFiKAeNwD61F/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert('Your Message has been Succesfully Sent!');
            document.querySelector('.contact-form').reset();
        })
        .catch(error => console.error('Error!', error.message))
})


// Night Mode
const background = document.querySelector('.night-mode');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
div1.classList.add('stars');
div2.classList.add('stars2');
div3.classList.add('stars3');

background.appendChild(div1);
background.appendChild(div2);
background.appendChild(div3);
