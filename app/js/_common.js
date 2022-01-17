/* nav simplebar */
const navHeaderSimplebar = document.querySelector(".nav-header__list");
/* projects simplebar */
const projectsSimplebar = document.querySelector(".projects__descr");
/* modal-gallery simplebar */
let modalSimplebar = document.querySelector(".modal-gallery");

function initSimplebar(selector, maxWidth) {
  if (window.innerWidth < maxWidth || maxWidth == 0) {
    new SimpleBar(selector, {
      scrollbarMaxSize: 25,
    });
  }
  if(document.querySelector(".modal-gallery .simplebar-content")) {
    let modalWindow = document.querySelector(".modal-gallery .simplebar-content");
    if(window.innerHeight < modalWindow.offsetHeight) {
      modalWindow.parentElement.classList.remove("center");
    }
    if(window.innerHeight >= modalWindow.offsetHeight) {
      modalWindow.parentElement.classList.add("center");
    }
  }
}

initSimplebar(navHeaderSimplebar, 576);
initSimplebar(projectsSimplebar, 1200);
initSimplebar(modalSimplebar, 0);

window.addEventListener("resize", function () {
  initSimplebar(navHeaderSimplebar, 576);
  initSimplebar(projectsSimplebar, 1200);
  initSimplebar(modalSimplebar, 0);
});
