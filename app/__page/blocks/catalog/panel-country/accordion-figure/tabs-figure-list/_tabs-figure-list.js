/* плавная навигация по деятелям */
function figureNavigation() {
  const figureButtons = document.querySelectorAll(".tabs-figure__btn");
  figureButtons.forEach((figureButton) => {
    figureButton.addEventListener("click", function (event) {
      const figurePath = figureButton.dataset.path;
      if (window.innerWidth <= 992) {
        document.querySelector(`div[data-target="${figurePath}"]`).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      if (window.innerWidth > 992) {
        event.preventDefault();
      }
    });
  });
}

figureNavigation();

window.addEventListener("resize", figureNavigation);
