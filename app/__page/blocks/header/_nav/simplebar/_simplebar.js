/* nav simplebar */
function initNavSimplebar() {
  if (window.matchMedia("(max-width: 575.98px)").matches) {
    new SimpleBar(document.querySelector(".nav-header__list"), {
      /* чтобы изначально ползунок был не виден */
      // autoHide: true,
      /* с помощью этого значения вы можете управлять высотой ползунка*/
      scrollbarMaxSize: 25,
    });
  }
}

initNavSimplebar();

window.addEventListener("resize", initNavSimplebar);
