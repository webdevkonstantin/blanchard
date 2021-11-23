/* Hero Swiper */
const swiper = new Swiper(".hero-swiper", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 3000,
  autoplay: {
    delay: 3000,
  },
  effect: "fade",
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-bullet-pagination",
    type: "bullets",
    clickable: true,
  },
});

// When slide starts to change slideChangeTransitionStart event fires and we use it to scale down the image.
// swiper.on("slideChangeTransitionStart", swiper.zoom.out);
// And when transition has finished scale it up.
// swiper.on("slideChangeTransitionEnd", swiper.zoom.in);
