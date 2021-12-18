let tooltipBtns = document.querySelectorAll(".tooltip");

tooltipBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    tooltipBtns.forEach((el) => {
      if (el != btn) {
        el.classList.remove("active");
      }
    });
    btn.classList.toggle("active");
  });
});

document.addEventListener("click", function (e) {
  let target = e.target;
  if (!target.closest(".tooltip")) {
    tooltipBtns.forEach((el) => {
      el.classList.remove("active");
    });
  }
});
