const swiper = new Swiper('.services__slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    spaceBetween: 10,
    slidesPerView: 3,
    centeredSlides: true,
    loopedSlides: 3,
    loop: true,
    speed: 700,
    // autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: true,
    // },
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 30,
      },
      // // when window width is >= 480px
      // 1340: {
      //   spaceBetween: 50,
      // },
      // // // when window width is >= 640px
      // 1560: {
      //   spaceBetween: 30,
      // }
    }
});