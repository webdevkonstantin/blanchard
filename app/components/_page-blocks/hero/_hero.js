/* hero swiper */
let heroSwiper = new Swiper(".hero .swiper", {
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
