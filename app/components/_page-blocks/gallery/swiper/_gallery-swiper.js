/* gallery swiper */
let gallerySlider = new Swiper(".gallery .swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper__btn--next",
    prevEl: ".swiper__btn--prev",
  },

  breakpoints: {
    1: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
      },
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 34,
    },
    1201: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 50,
    },
  },

  a11y: {
    prevSlideMessage: "Предыдущий",
    nextSlideMessage: "Следующий",
  },
});
