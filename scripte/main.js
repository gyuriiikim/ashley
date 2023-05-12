const swiper = new Swiper(".bnr", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});