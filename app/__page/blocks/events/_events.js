@@include('slider/_slider-events.js')

let eventsBtn = document.querySelector(".events__btn");
let allitems = document.querySelectorAll(".slider-events__item ");

eventsBtn.addEventListener("click", function() {
  allitems.forEach(item => {
    item.style.display = "block";
  })
  
  this.style.display = "none";
})