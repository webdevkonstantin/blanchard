let gallerySlides = document.querySelectorAll(".slider-gallery__link");
let modal = document.querySelector(".modal-gallery");
let body = document.querySelector("body");

gallerySlides.forEach((slide) => {
  slide.addEventListener("click", function () {
    let img = this.querySelector("img");
    let link = img.getAttribute("src");

    body.classList.add("no-scroll");
    modal.classList.add("active");
    modal.querySelector("img").setAttribute("src", link);
  });
});

modal.addEventListener("click", function (e) {
  var target = e.target;
  if (!target.closest(".modal-gallery__content") || target.closest(".modal-gallery__close")) {
    body.classList.remove("no-scroll");
    modal.classList.remove("active");
  }
});
