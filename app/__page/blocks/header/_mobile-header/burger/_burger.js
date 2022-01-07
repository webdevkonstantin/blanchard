document.querySelector(".burger").addEventListener("click", function (event) {
  event.currentTarget.classList.toggle("active");

  document.querySelector(".nav-header").classList.toggle("active");
});
