const CollapseBar = {
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}


$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /* - Onclick - */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    /* - Carousel posts - */
    $('.owl-carousel').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive: CollapseBar /* fucking variables ughhhhhhhhhhhhhhhh */
    });

    /* - Scroll to top - */
    $('.to-top span').click(function(){
        $('html, body').animate({
            scrollTop:0
        },1000);
    })  

});