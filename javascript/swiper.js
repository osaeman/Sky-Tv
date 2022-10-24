//Hero Image Swiper
var swiper = new Swiper(".mySwiper", {
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Multiple Image swiper
var swiper2 = new Swiper(".multipleswiper", {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        // when window width is <= 499px
        500: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is <= 999px
        800: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1500:{
            slidesPerView: 4,
            spaceBetween: 30
        },
        
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
