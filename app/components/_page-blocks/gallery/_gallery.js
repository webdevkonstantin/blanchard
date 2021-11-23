/* gallery choices */
const element = document.querySelector(".gallery .choices");
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: "",
});

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
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 3,
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
