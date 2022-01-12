/* nav simplebar */
const navHeaderSimplebar = document.querySelector(".nav-header__list");
/* projects simplebar */
const projectsSimplebar = document.querySelector(".projects__descr");

function initSimplebar(selector, maxWidth) {
  if (window.innerWidth < maxWidth) {
    new SimpleBar(selector, {
      scrollbarMaxSize: 25,
    });
  }
}

initSimplebar(navHeaderSimplebar, 576);
initSimplebar(projectsSimplebar, 1200);

window.addEventListener("resize", function () {
  initSimplebar(navHeaderSimplebar, 576);
  initSimplebar(projectsSimplebar, 1200);
});
