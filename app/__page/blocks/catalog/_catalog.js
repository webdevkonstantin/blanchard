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

tabsActive(".tabs__btn", ".tabs__pane");
tabsActive(".accordion-block__btn", ".tabs-left__content");

@@include('accordion/_catalog-accordion.js')