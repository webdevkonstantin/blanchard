/* events slider */
const eventsSlider = document.querySelector(".slider-events");
let eventsSwiper;

function mobileEventsSlider() {
  if (window.innerWidth < 768 && eventsSlider.dataset.mobile == "false") {
    eventsSwiper = new Swiper(eventsSlider, {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      slideClass: "swiper-slide",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    eventsSlider.dataset.mobile = "true";
  }

  if (window.innerWidth >= 768 && eventsSlider.dataset.mobile == "true") {
    eventsSlider.dataset.mobile = "false";
    if (eventsSlider.classList.contains("swiper-initialized")) {
      eventsSwiper.destroy();
    }
  }
}

mobileEventsSlider();

window.addEventListener("resize", mobileEventsSlider);
