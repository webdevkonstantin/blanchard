/* плавная навигация по якорным ссылкам */
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault(); // отменяет стандартное поведение события
    const blockID = anchor.getAttribute("href");
    if (blockID === "#") return;
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
