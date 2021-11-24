/* Menu */
document.querySelectorAll(".item-menu__btn").forEach((item) => {
  item.addEventListener("click", function () {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".dropdown");

    document.querySelectorAll(".item-menu__btn").forEach((el) => {
      if (el != btn) {
        el.classList.remove("btn--active");
      }
    });

    document.querySelectorAll(".dropdown").forEach((el) => {
      if (el != dropdown) {
        el.classList.remove("dropdown--active");
      }
    });
    dropdown.classList.toggle("dropdown--active");
    btn.classList.toggle("btn--active");
  });
});

document.addEventListener("click", function (e) {
  let target = e.target;
  if (!target.closest(".menu__list")) {
    document.querySelectorAll(".dropdown").forEach((el) => {
      el.classList.remove("dropdown--active");
    });
    document.querySelectorAll(".item-menu__btn").forEach((el) => {
      el.classList.remove("btn--active");
    });
  }
});

/* SimpleBar */
document.querySelectorAll(".dropdown-list").forEach((menuList) => {
  new SimpleBar(menuList, {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 28,
  });
});
