/* hero slider */
const heroSlider = document.querySelector(".slider-hero");
let heroSwiper = new Swiper(heroSlider, {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 3000,
  autoplay: {
    delay: 3000,
  },
  effect: "fade",
  allowTouchMove: false,
});
