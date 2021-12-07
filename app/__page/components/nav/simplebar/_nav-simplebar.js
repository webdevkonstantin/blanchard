/* nav simplebar */
initNavSimplebar();

window.addEventListener(
  "resize",
  function (event) {
    initNavSimplebar();
  },
  true
);

function initNavSimplebar() {
  if (window.matchMedia("(max-width: 575.98px)").matches) {
    new SimpleBar(document.querySelector(".nav__list"), {
      /* чтобы изначально ползунок был не виден */
      // autoHide: true,
      /* с помощью этого значения вы можете управлять высотой ползунка*/
      scrollbarMaxSize: 25,
    });
  }
}
