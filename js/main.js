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
        navText: [$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')] /* fucking variables ughhhhhhhhhhhhhhhh */
    });

});