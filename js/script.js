gsap.registerPlugin(ScrollTrigger);

// sliders
var init1 = false;
function swiperCard1() {
  if (window.innerWidth >= 768) {
    if (!init1) {
      init1 = true;
      const slider1 = new Swiper('.slider1', {
        direction: 'vertical',
        spaceBetween: 60,
        loop: true,
        mousewheel: true,
        mousewheel: {
          sensitivity: 0.25,
        },
        speed: 1500,
        freeMode: true,
        breakpoints: {
          1750: {
            slidesPerView: 2.1,
          },
          1650: {
            slidesPerView: 2.2,
          },
          1550: {
            slidesPerView: 2.3,
          },
          1450: {
            slidesPerView: 2.4,
          },
          1350: {
            slidesPerView: 2.5,
          },
          1250: {
            slidesPerView: 2.6,
          },
          1150: {
            slidesPerView: 2.7,
          },
          1050: {
            slidesPerView: 2.9,
          },
          1024: {
            slidesPerView: 3,
          },
        }
      });
      const slider2 = new Swiper('.slider2', {
        direction: 'vertical',
        spaceBetween: 60,
        loop: true,
        mousewheel: true,
        mousewheel: {
          sensitivity: 0.25,
        },
        speed: 1500,
        freeMode: true,
        slidesOffsetBefore: -100,
        breakpoints: {
          1750: {
            slidesPerView: 2.1,
          },
          1650: {
            slidesPerView: 2.2,
          },
          1550: {
            slidesPerView: 2.3,
          },
          1450: {
            slidesPerView: 2.4,
          },
          1350: {
            slidesPerView: 2.5,
            slidesOffsetBefore: 0,
          },
          1250: {
            slidesPerView: 2.6,
            slidesOffsetBefore: 50,
          },
          1150: {
            slidesPerView: 2.7,
            slidesOffsetBefore: 50,
          },
          1050: {
            slidesPerView: 2.9,
            slidesOffsetBefore: -120,
          },
          1024: {
            slidesPerView: 3,
          },
          950: {
            slidesPerView: 2.5,
          },
          900: {
            slidesPerView: 2.6,
          },
          850: {
            slidesPerView: 2.8,
          },
          800: {
            slidesPerView: 2.9,
          },
          768: {
            slidesPerView: 3.1,
          },
        },
      });
      slider1.controller.control = slider2;
      slider2.controller.control = slider1;
      ScrollTrigger.create({
        trigger: '.service',
        start:"top 40%",
        end:"bottom top",
        onEnter: (() => {slider2.slideTo(3, 2500, true)}),
      });
    }
  } else if (init1) {
    slider1.destroy();
    slider2.destroy();
    init1 = false;
  }
}
swiperCard1();
window.addEventListener("resize", swiperCard1);

var init = false;
function swiperCard() {
  if (window.innerWidth < 768) {
    if (!init) {
      init = true;
      swiper = new Swiper('.slider3', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        loopedSlides: 2,
        navigation: {
          nextEl: '.button-next',
          prevEl: '.button-prev',
        },
        breakpoints: {
          450: {
            spaceBetween: 50,
          },
          550: {
            spaceBetween: 60,
          },
          650: {
            spaceBetween: 70,
          },
        }
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);

//animation
// hero animation
const tl = gsap.timeline();
tl.from ("body", {duration: 0, opacity: 0});
tl.from (".header", {duration: 1.2, opacity: 0});
tl.from (".hero__title", {duration: 0.8, y: 200, opacity: 0});
tl.from (".hero__text", {duration: 0.8, y: 200, opacity: 0}, '-=0.7');
tl.from (".hero__btn", {duration: 0.8, opacity: 0});

let mm = gsap.matchMedia();
mm.add('(min-width: 768px)', function(){

  // service animation
  const tl2 = gsap.timeline({scrollTrigger:{
    trigger: '.service',
    start:"top 50%",
    end:"bottom top",
  }})
  .from (".main-content", {duration: 0.8, y: 200, opacity: 0});
  // gsap.to(".main-wrapper", {
  //   yPercent: 20,
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".service",
  //     start: "top 50%",
  //     end: "bottom top",
  //     scrub: true,
  //   }, 
  // });

  // price animation
  const tl3 = gsap.timeline({scrollTrigger:{
    trigger: '.price',
    start:"top 70%",
    end:"bottom top",
  }})
  .from (".price__title", {duration: 0.8, y: 100, opacity: 0});
  gsap.from(".accordion", {
    duration: 0.8,
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".price",
      start: "top 60%",
      end: "bottom top",
    }, 
  });
  gsap.from(".price__text", {
    duration: 0.8,
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".price",
      start: "top 30%",
      end: "bottom top",
    }, 
  });
  gsap.from(".price__btn", {
    duration: 0.8,
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".price",
      start: "top 25%",
      end: "bottom top",
    }, 
  });

  // reviews animation
  gsap.from(".reviews__title", {
    duration: 0.8,
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: '.reviews',
      start:"top 80%",
      end:"bottom top",
    }, 
  });
  gsap.from(".reviews__item1", {
    duration: 0.8,
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: '.reviews',
      start:"top 60%",
      end:"bottom top",
    }, 
  });
  gsap.from(".reviews__item2", {
    duration: 0.8,
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: '.reviews',
      start:"top 45%",
      end:"bottom top",
    }, 
  });
  gsap.from(".reviews__item3", {
    duration: 0.8,
    x: -100,
    opacity: 0,
    scrollTrigger: {
      trigger: '.reviews',
      start:"top 25%",
      end:"bottom top",
    }, 
  });
  gsap.from(".reviews__item4", {
    duration: 0.8,
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: '.reviews',
      start:"top 5%",
      end:"bottom top",
    }, 
  });

  // status animation
  gsap.from (".status__bg", {
    duration: 0.8,
    opacity: 0,
    scrollTrigger: {
      trigger: ".status",
      start: "top 60%",
      end: "bottom top",
    }, 
  });
  gsap.from (".status__content", {
    duration: 0.5,
    y: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".status",
      start: "top 20%",
      end: "bottom top",
    }, 
  });

  // contacts animation
  gsap.from (".contacts__content", {
    duration: 0.5,
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".contacts",
      start: "top 40%",
      end: "bottom top",
    }, 
  });
  gsap.from (".contacts__links", {
    duration: 0.5,
    x: 100,
    opacity: 0,
    scrollTrigger: {
      trigger: ".contacts",
      start: "top 20%",
      end: "bottom top",
    }, 
  });
});

// accordion
const trigger = document.querySelectorAll('.trigger');
for (let i = 0; i < trigger.length; i++) {
  trigger[i].addEventListener('click', ()=> {
    let parent = trigger[i].closest('.accordion__item');
    let child = parent.querySelector('.accordion__text');
    if (parent.classList.contains('accordion__item-active')){
      parent.classList.remove('accordion__item-active');
      gsap.to(child, {duration: 0.4, marginTop: 0, height: 0, opacity: 0});
    } else {
      const parentAll = document.querySelectorAll('.accordion__item');
      for (let k = 0; k < trigger.length; k++){
        parentAll[k].classList.remove('accordion__item-active');
        gsap.to(parentAll[k].querySelector('.accordion__text'), {duration: 0.4, marginTop: 0, height: 0, opacity: 0});
      }
      parent.classList.add('accordion__item-active');
      gsap.to(child, {duration: 0.4, marginTop: 30, height: child.scrollHeight, opacity: 1});
    }
  })
}

//status
const statusBlock = document.querySelector('.status');
const statusInfo = document.querySelector('.status__info');
const statusBtn = document.querySelector('.status__btn');
const initialHeight = statusBlock.clientHeight;
statusBtn.addEventListener('click',  function() {
  statusBtn.classList.toggle('status__btn-active');
  if(statusBtn.classList.contains('status__btn-active')){
    gsap.to(statusInfo, {duration: 0.4, marginTop: 65, height: statusInfo.scrollHeight + 75, opacity: 1});
    gsap.to(statusBlock, {duration: 0.4, height: initialHeight + statusInfo.scrollHeight + 120}, '-=0.4');
  } else {
    gsap.to(statusInfo, {duration: 0.4, marginTop: 0, height: 0, opacity: 0});
    gsap.to(statusBlock, {duration: 0.4, height: initialHeight}, '-=0.4');
  }
});

// burger
const burger = document.querySelector('.menu-burger');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list');
const menuItem = document.querySelectorAll('.menu__link');
const menuItemLogo = document.querySelector('.header__sub-link');
if(burger) {
  burger.addEventListener('click', function(){
    document.body.classList.toggle('lock');
    burger.classList.toggle('menu-burger-active');
    menu.classList.toggle('menu-active');
    if (menu.classList.contains('menu-active')){
      const tlOpen = gsap.timeline()
      .to(menu, {duration: 0.4, height: '100%', opacity: 1})
      .to(menuList, {duration: 0.3, y: 0});
    } else {
      const tlClose = gsap.timeline()
      .to(menuList, {duration: 0.3, y: '-100%'})
      .to(menu, {duration: 0.4, height: '0%', opacity: 0});
    }
    menuItemLogo.addEventListener('click', function(){
      burger.classList.remove('menu-burger-active');
      menu.classList.remove('menu-active');
      document.body.classList.remove('lock');
      const tlClose = gsap.timeline()
      .to(menuList, {duration: 0.3, y: '-100%'})
      .to(menu, {duration: 0.4, height: '0%', opacity: 0});
    });
    menuItem.forEach(function(item){
      item.addEventListener('click', function(){
        burger.classList.remove('menu-burger-active');
        menu.classList.remove('menu-active');
        document.body.classList.remove('lock');
        const tlClose = gsap.timeline()
        .to(menuList, {duration: 0.3, y: '-100%'})
        .to(menu, {duration: 0.4, height: '0%', opacity: 0});
      });
    });
  });
}

// anchors
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors){
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const blockId = anchor.getAttribute('href');
    console.log(blockId);
    document.querySelector('' + blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}