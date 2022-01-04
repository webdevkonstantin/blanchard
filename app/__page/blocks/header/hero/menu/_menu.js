@@include('dropdown/_dropdown.js')

/* menu */
document.querySelectorAll(".menu-hero__btn").forEach((item) => {
  item.addEventListener("click", function () {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".dropdown-hero");

    document.querySelectorAll(".menu-hero__btn").forEach((el) => {
      if (el != btn) {
        el.classList.remove("active");
      }
    });

    document.querySelectorAll(".dropdown-hero").forEach((el) => {
      if (el != dropdown) {
        el.classList.remove("active");
      }
    });
    dropdown.classList.toggle("active");
    btn.classList.toggle("active");
  });
});

document.addEventListener("click", function (e) {
  let target = e.target;
  if (!target.closest(".menu-hero__list")) {
    document.querySelectorAll(".dropdown-hero").forEach((el) => {
      el.classList.remove("active");
    });
    document.querySelectorAll(".menu-hero__btn").forEach((el) => {
      el.classList.remove("active");
    });
  }
});
