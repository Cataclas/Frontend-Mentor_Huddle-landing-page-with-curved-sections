var regEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
let msg = $('.contact__form__message');


$(".contact__form__input").on("keyup focus", function() {
    let email = $('.contact__form__input');
    validate(email);
});

function validate(email) {
    if (email.val() === "") {
        email.addClass('error');
        msg.html('This field is required');
        $('.contact__form__button').prop('disabled', true);
    } else {
        if ((regEmail).test(email.val())) {
            email.removeClass('error');
            msg.html('')
            $('.contact__form__button').prop('disabled', false);
        } else {
            email.addClass('error');
            msg.html('Check your email please')
            $('.contact__form__button').prop('disabled', true);
        }
    }
}

$("#subscribe").on("submit", async function(e) {
    e.preventDefault();
    alert('Next!')
});

window.onscroll = function() {
    animation();
};

let animate = $('.animate');

function animation() {
    let position = window.scrollY;
    let heightWindow = window.innerHeight;
    let positionActiveAnimate = position + (heightWindow / 2);
    let time = 0;

    animate.each(function() {
        let a = $(this);
        let aPosition = a.offset().top
        let aHeight = a.outerHeight(true)

        if ((positionActiveAnimate) >= aPosition && (positionActiveAnimate) <= (aPosition + aHeight)) {
            setTimeout(() => {
                a.find('.zoom').addClass('zoomIn');
                a.find('.top').addClass('toTop');
                a.find('.left').addClass('toLeft');
                a.find('.right').addClass('toRight');
            }, time);

            time += 500;
        }
    });
}