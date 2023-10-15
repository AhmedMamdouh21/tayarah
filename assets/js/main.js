const navBarHeight = $(".navbar-fixed").innerHeight();
// $(".padding-top").css({
//   "padding-top": navBarHeight + "px",
// });

$(".navbar .navbar-toggler").on("click", function () {
    $("body").toggleClass("open-menu");
    console.log("navBarHeight", navBarHeight);
});



if ($(".hero").length) {
  let swiperHero = new Swiper(".hero-swiper", {
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 800,
    // autoplay: {
    //   disableOnInteraction: false,
    //   delay: 5000,
    // },
    pagination: {
      el: ".hero-swiper .swiper-pagination",
      clickable: true,
    },
  });
}

  if ($(".scroll-btn")) {
    $(".scroll-btn").on("click", function () {
      $("html, body").animate(
        {
          scrollTop:
            $("#" + $(this).data("scroll")).offset().top + "px",
        },
        1200
      );
    });
  }

if ($("select").length) {
  $("select").selectpicker();
}


if ($(".swiper-news-partnerships").length) {
  let swiperNewsPartnerships = new Swiper(".swiper-news-partnerships", {
    spaceBetween: 15,
    speed: 800,
    // autoplay: {
    //   disableOnInteraction: false,
    //   delay: 5000,
    // },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".news-partnerships .swiper-button-next",
      prevEl: ".news-partnerships .swiper-button-prev",
    },
  });
}

if ($(".swiper-services-info").length) {
  let swiperNewsPartnerships = new Swiper(".swiper-services-info", {
    spaceBetween: 15,
    speed: 800,
    // autoplay: {
    //   disableOnInteraction: false,
    //   delay: 5000,
    // },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".services-info .swiper-button-next",
      prevEl: ".services-info .swiper-button-prev",
    },
  });
}


if ($(".marquee-swiper").length) {
  let swiperMarquee = new Swiper(".marquee-swiper", {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 20000,
    autoplay: {
      delay: 1,
    },
    loop: true,
    slidesPerView: "auto",
    allowTouchMove: false,
    disableOnInteraction: true,
  });
}


if ($(".swiper-client-feedback").length) {
  let swipeClientFeedback = new Swiper(".swiper-client-feedback", {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    speed: 800,
    // autoplay: {
    //   disableOnInteraction: false,
    //   delay: 5000,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1.3,
      },
      768: {
        slidesPerView: 1.6,
      },
      1024: {
        slidesPerView: 1.8,
      },
    },
    navigation: {
      nextEl: ".client-feedback .swiper-button-next",
      prevEl: ".client-feedback .swiper-button-prev",
    },
  });
}


if ($(".marquee-swiper-clients-top").length) {
  let swiperMarqueeClientsTop = new Swiper(".marquee-swiper-clients-top", {
    spaceBetween: 10,
    centeredSlides: true,
    speed: 3000,
    autoplay: {
      delay: 0,
    },
    loop: true,
    loopedSlides: 6,
    slidesPerView: 'auto',
    allowTouchMove: false,
    // disableOnInteraction: true
  });
}

if ($(".marquee-swiper-clients-bottom").length) {
  let swiperMarqueeClientsBottom = new Swiper(".marquee-swiper-clients-bottom", {
    spaceBetween: 10,
    centeredSlides: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      reverseDirection: true,
    },
    loop: true,
    loopedSlides: 6,
    slidesPerView: 'auto',
    allowTouchMove: false,
  });
}

// Scroll To Top
if ($(".backToTop").length) {
  $(".backToTop").click(function (e) {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1200
    );
  });
}
// $(document).scroll(function (e) {
//   if ($(window).scrollTop() >= 5) {
//     $(".backToTop").addClass("show");
//   } else {
//     $(".backToTop").removeClass("show");
//   }
// });

// ScrollReveal().reveal('#about',{
//    afterReveal: function(el) {
//     $(el).removeClass("animate");
//   },
//   beforeReveal: function(el) {
//     $(el).addClass("animate");
//   }
// });

ScrollReveal().watch = function (target, onEnter, onExit) {

  onExit = onExit || function () {}

  if (typeof onEnter === 'function' && typeof onExit === 'function') {
      var noEffect = {
          delay:    0,
          distance: 0,
          duration: 0,
          scale:    1,
          opacity:  null,
          rotate:   { x: 0, y: 0, z: 0, },

          reset: true,
          beforeReset: onExit,
          beforeReveal: onEnter,
      }
      this.reveal(target, noEffect)
  } else {
      throw new Error('Watch received invalid arguments.')
  }
}
ScrollReveal().watch('.about',
    function onEnter (el) {
        el.classList.add('active')
    },
    function onExit (el) {
        el.classList.remove('active')
    }
)

ScrollReveal().watch('.our-services',
    function onEnter (el) {
        el.classList.add('active')
    },
    function onExit (el) {
        el.classList.remove('active')
    }
)

ScrollReveal().watch('.marquee',
    function onEnter (el) {
        el.classList.add('active')
    },
    function onExit (el) {
        el.classList.remove('active')
    }
)

ScrollReveal().watch('.get-contact',
    function onEnter (el) {
        el.classList.add('active')
    },
    function onExit (el) {
        el.classList.remove('active')
    }
)