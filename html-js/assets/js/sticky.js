// Para que se suavice el scroll
$(document).ready( function() {
    $('nav.header__menu a').on('click', function() {
    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 100;
    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);
    return false;
    })
    // Para que se ilumine los elementos sobre los que se está
    $(window).scroll(function() {
        if ($(this).scrollTop() >= $('section[data-anchor="sectionOne"]').offset().top - 120) {
            $('nav.header__menu a').removeClass('active');
            $('nav.header__menu a:eq(0)').addClass('active');
        }
        if ($(this).scrollTop() >= $('section[data-anchor="sectionTwo"]').offset().top - 120) {
            $('nav.header__menu a').removeClass('active');
            $('nav.header__menu a:eq(1)').addClass('active');
        }
        if ($(this).scrollTop() >= $('section[data-anchor="sectionThree"]').offset().top - 120) {
            $('nav.header__menu a').removeClass('active');
            $('nav.header__menu a:eq(2)').addClass('active');
        }
    });
});