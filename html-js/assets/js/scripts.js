// Contact Form
$(document).ready(function(){
    $('#submit').click(function(){
    $.post("send.php", $("#mycontactform").serialize(),  function(response) {
        $('#success').html(response);
        });
    return false;
    });
});

// Slider
$(function () {
    $("#slider").responsiveSlides({
        auto: true,
        pager: true,
        speed: 300,
    });
});

// Smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

// Para que se suavice el scroll
$(document).ready( function() {
    $('nav.stickyNav a').on('click', function() {
    var scrollAnchor = $(this).attr('data-scroll'),
        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 100;
    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);
    return false;
})

// Para que se ilumine los elementos sobre los que se está
$(window).scroll(function() {
    if ($(this).scrollTop() >= $('section[data-anchor="about"]').offset().top - 120) {
        $('nav.stickyNav a').removeClass('active');
        $('nav.stickyNav a:eq(0)').addClass('active');
    }
    if ($(this).scrollTop() >= $('section[data-anchor="services"]').offset().top - 120) {
        $('nav.stickyNav a').removeClass('active');
        $('nav.stickyNav a:eq(1)').addClass('active');
    }
    if ($(this).scrollTop() >= $('section[data-anchor="contact"]').offset().top - 320) {
        $('nav.stickyNav a').removeClass('active');
        $('nav.stickyNav a:eq(2)').addClass('active');
    }
});

// Para que nav se pegue
$(window).scroll(function() {
    if ($(window).scrollTop() >= $('#menu').offset().top) {
        $('nav.stickyNav').removeClass('absoNav');
        $('nav.stickyNav').addClass('fixeNav');
    }
    else {
        $('nav.stickyNav').addClass('stickyNav');
        $('nav.stickyNav').removeClass('fixeNav');

    }
});
$(window).scroll(function() {
    if ($(this).scrollTop() >= $('#stickyEnd').offset().top) {
        $('nav.stickyNav').removeClass('fixeNAv');
        $('nav.stickyNav').addClass('absoNav');
    }
});
});