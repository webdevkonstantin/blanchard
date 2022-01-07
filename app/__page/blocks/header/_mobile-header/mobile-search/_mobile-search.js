/* mobile search */
document.querySelector(".mobile-search-btn__open").addEventListener("click", function () {
  document.querySelector(".mobile-search-form").classList.add("active");
  this.classList.add("active");
});

document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".mobile-search-form");

  if (
    !target.closest(".mobile-search") ||
    target.classList.contains("mobile-search-form-btn__close")
  ) {
    form.classList.remove("active");
    form.querySelector(".mobile-search-form__input").value = "";
    document.querySelector(".mobile-search-btn__open").classList.remove("active");
  }
});
