$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /* - Onclick - */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    /* - Carousel posts - */
    $('.owl-carousel').owlCarousel();

});