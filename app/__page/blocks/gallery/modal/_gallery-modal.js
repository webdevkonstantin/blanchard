let gallerySlides = document.querySelectorAll(".slider-gallery__link");
let modal = document.querySelector(".gallery-modal");
let body = document.querySelector("body");

gallerySlides.forEach((el) => {
  el.addEventListener("click", function () {
    let img = this.querySelector("img");
    let link = img.getAttribute("src");

    body.classList.add("no-scroll");
    modal.classList.add("active");
    modal.querySelector("img").setAttribute("src", link);
  });
});

modal.addEventListener("click", function (e) {
  var target = e.target;
  if (!target.closest(".gallery-modal__content") || target.closest(".gallery-modal__close")) {
    body.classList.remove("no-scroll");
    modal.classList.remove("active");
  }
});
