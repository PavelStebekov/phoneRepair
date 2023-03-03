const swiper = new Swiper('.services__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    spaceBetween: 80,
    slidesPerView: 3,
    centeredSlides: true,
    loopedSlides: 3,
    loop: true,
    speed: 700,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
});