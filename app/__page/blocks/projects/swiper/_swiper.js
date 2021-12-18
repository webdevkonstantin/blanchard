const projectsSlider = document.querySelector(".slider-projects");
let projectsSwiper;

projectsSwiper = new Swiper(projectsSlider, {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 34,
    },
    1201: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
  },

  a11y: {
    prevSlideMessage: "Предыдущий",
    nextSlideMessage: "Следующий",
  },
});
