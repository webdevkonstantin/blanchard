/* catalog */
function tabsActive(tabPath, tabTarget) {
  document.querySelectorAll(tabPath).forEach((item) => {
    item.addEventListener("click", function (e) {
      let path = e.currentTarget.dataset.path;
      document.querySelectorAll(tabTarget).forEach((el) => {
        el.classList.remove("active");
      });
      document.querySelectorAll(tabPath).forEach((el) => {
        el.classList.remove("active");
      });
      document.querySelector(`[data-target="${path}"]`).classList.add("active");

      this.classList.add("active");
    });
  });
}

tabsActive(".tabs-country__btn", ".tabs-country__panel");
tabsActive(".tabs-figure__btn", ".tabs-figure__content");

@@include('panel-country/accordion-figure/_accordion-figure.js')