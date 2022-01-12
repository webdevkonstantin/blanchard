let filterCaption = document.querySelector(".filter__spoiler");
let checklist = document.querySelector(".filter__list");
let checkboxes = document.querySelectorAll(".filter__list .check");

function checkboxesInit() {
  checkboxes.forEach((checkboxItem) => {
    let checkbox = checkboxItem.querySelector(".check__input");

    if (checkbox.checked) {
      checkboxItem.classList.add("active");
    }
  });
}

checkboxesInit();

filterCaption.addEventListener("click", function () {
  this.classList.toggle("active");
  checklist.classList.toggle("active");
  checkboxes.forEach((checkboxItem) => {
    checkboxItem.classList.toggle("active");
    let checkbox = checkboxItem.querySelector(".check__input");

    if (checkbox.checked) {
      checkboxItem.classList.add("active");
    }
  });
});

checkboxes.forEach((checkboxItem) => {
  checkboxItem.addEventListener("click", function () {
    let label = this;
    if (!checklist.classList.contains("active")) {
      label.classList.remove("active");
    }
  });
});
