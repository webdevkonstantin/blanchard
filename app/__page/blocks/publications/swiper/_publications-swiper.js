/* publications swiper */
const publicationsSlider = document.querySelector(".publications .swiper");
let publicationsSwiper;

function mobilePublicationsBlocks() {
  if (window.innerWidth >= 768 && publicationsSlider.dataset.mobile == "false") {
    publicationsSwiper = new Swiper(publicationsSlider, {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1,
      },
      spaceBetween: 50,
      pagination: {
        el: ".swiper__pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper__btn--next",
        prevEl: ".swiper__btn--prev",
      },

      breakpoints: {
        576: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          // spaceBetween: 34,
          spaceBetween: "5.537%",
        },
        992: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 49,
        },
        1201: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        },
      },

      a11y: {
        prevSlideMessage: "Предыдущий",
        nextSlideMessage: "Следующий",
      },
    });

    publicationsSlider.dataset.mobile = "true";
  }

  if (window.innerWidth < 768 && publicationsSlider.dataset.mobile == "true") {
    publicationsSlider.dataset.mobile = "false";
    if (publicationsSlider.classList.contains("swiper-initialized")) {
      publicationsSwiper.destroy();
    }
  }
}

mobilePublicationsBlocks();

window.addEventListener("resize", () => {
  mobilePublicationsBlocks();
});