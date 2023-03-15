gsap.registerPlugin(ScrollTrigger);

const trigger = document.querySelectorAll('.trigger');
for (let i = 0; i < trigger.length; i++) {
  trigger[i].addEventListener('click', ()=> {
    const parent = trigger[i].closest('.accordion__item');
    if (parent.classList.contains('accordion__item-active')){
      parent.classList.remove('accordion__item-active')
    } else {
      const parentAll = document.querySelectorAll('.accordion__item');
      for (let k = 0; k < trigger.length; k++){
        parentAll[k].classList.remove('accordion__item-active');
        parent.classList.add('accordion__item-active');
      }
    }
  })
}

const slider1 = new Swiper('.slider1', {
  direction: 'vertical',
  slidesPerView: 2.1,
  spaceBetween: 60,
  loop: true,
  loopFillGroupWithBlank: true,
  mousewheel: true,
  mousewheel: {
    sensitivity: 0.2,
  },
  freeMode:{
    momentumVelocityRatio: 0,
    momentumRatio: 0,
  },
  speed: 1500,
  freeMode: true,
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: true,
  // },
});

const slider2 = new Swiper('.slider2', {
  direction: 'vertical',
  slidesPerView: 2.1,
  spaceBetween: 60,
  loop: true,
  loopFillGroupWithBlank: true,
  mousewheel: true,
  mousewheel: {
    sensitivity: 0.2,
  },
  speed: 1500,
  freeMode: true,
  freeMode:{
    momentumVelocityRatio: 0,
    momentumRatio: 0,
  },
  slidesOffsetBefore: -100,
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: true,
  // },
});

slider1.controller.control = slider2;
slider2.controller.control = slider1;

// hero animation
gsap.to(".contain", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  }, 
});

gsap.to(".hero__image", {
  yPercent: 10,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  }, 
});

const tl = gsap.timeline();
tl.from ("body", {duration: 0, opacity: 0});
tl.from (".header", {duration: 1.2, opacity: 0});
tl.from (".hero__title", {duration: 0.8, y: 200, opacity: 0});
tl.from (".hero__text", {duration: 0.8, y: 200, opacity: 0}, '-=0.7');
tl.from (".hero__btn", {duration: 0.8, opacity: 0});


// service animation
const tl2 = gsap.timeline({scrollTrigger:{
  trigger: '.service',
  start:"top 50%",
  end:"bottom top",
}})
.from (".main-content", {duration: 0.8, y: 200, opacity: 0});

ScrollTrigger.create({
  trigger: '.service',
  start:"top 30%",
  end:"bottom top",
  onEnter: (() => {slider1.slideTo(2, 2500, true)})
});
