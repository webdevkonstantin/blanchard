let filterCaption = document.querySelector(".filter__spoiler");
let checklist = document.querySelector(".filter__list");

filterCaption.addEventListener("click", function () {
  this.classList.toggle("active");
  checklist.classList.toggle("active");
  document.querySelectorAll(".filter__list .check").forEach((checkItem) => {
    checkItem.classList.toggle("active");
    let checkbox = checkItem.querySelector(".check__input");

    if (checkbox.checked) {
      checkItem.classList.add("active");
    }
  });
});

document.querySelectorAll(".filter__list .check").forEach((checkItem) => {
  checkItem.addEventListener("click", function () {
    let label = this;
    if (!checklist.classList.contains("active")) {
      label.classList.remove("active");
    }
  });
});
