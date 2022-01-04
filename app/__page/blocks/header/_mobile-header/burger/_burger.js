document.querySelector(".burger").addEventListener("click", function (event) {
  // event.currentTarget.classList.toggle("burger--active");
  event.currentTarget.classList.toggle("active");

  // document.querySelector(".nav").classList.toggle("nav--active");
  document.querySelector(".nav").classList.toggle("active");
});
