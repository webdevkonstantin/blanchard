/* Menu */
document.querySelectorAll(".item-menu__btn").forEach((item) => {
  item.addEventListener("click", function () {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".container--dropdown");

    document.querySelectorAll(".item-menu__btn").forEach((el) => {
      if (el != btn) {
        el.classList.remove("btn--active");
      }
    });

    document.querySelectorAll(".container--dropdown").forEach((el) => {
      if (el != dropdown) {
        el.classList.remove("item-menu--active");
      }
    });
    dropdown.classList.toggle("item-menu--active");
    btn.classList.toggle("btn--active");
  });
});

document.addEventListener("click", function (e) {
  let target = e.target;
  if (!target.closest(".menu__list")) {
    document.querySelectorAll(".container--dropdown").forEach((el) => {
      el.classList.remove("item-menu--active");
    });
    document.querySelectorAll(".item-menu__btn").forEach((el) => {
      el.classList.remove("btn--active");
    });
  }
});

/* SimpleBar */
document.querySelectorAll(".container--dropdown-list").forEach((menuList) => {
  new SimpleBar(menuList, {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 28,
  });
});
