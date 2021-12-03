let eventsBtn = document.querySelector(".events__btn");
let allitems = document.querySelectorAll(".events__item");

eventsBtn.addEventListener("click", function() {
  allitems.forEach(item => {
    item.style.display = "block";
  })
  
  this.style.display = "none";
})
@@include('swiper/_events-swiper.js')