$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        center: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateOut: true,
        animateIn: true,
        responsive: {
            0: {
                items: 1,
                center: false,
            },
            997: {
                items: 1,
                center: false,
            },
            1000: {
                items: 3,
            },
        },
    });
});

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}