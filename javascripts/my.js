
function car(){
$('.carousel').carousel({
            interval:false,
        })

}
$(car);
function roll(){
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
}
$(roll);



function toTop(){
$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$("#intro").offset().top},"100");return false})})
}

$(toTop);

function wa(){
        new WOW().init();

}

$(wa);
