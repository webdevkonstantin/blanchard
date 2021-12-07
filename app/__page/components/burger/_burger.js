document.querySelector(".burger").addEventListener("click", function (event) {
  event.currentTarget.classList.toggle("burger--active");

  document.querySelector(".nav").classList.toggle("nav--active");
});
