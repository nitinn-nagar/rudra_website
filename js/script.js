//const btn = document.getElementById('menu-btn');
//const overlay = document.getElementById('overlay');
//const menu = document.getElementById('mobile-menu');
//btn.addEventListener('click', navToggle);

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
nextButton.addEventListener("click", (event) => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});
prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});

//function navToggle() {
//  btn.classList.toggle('open');
//overlay.classList.toggle('overlay-show');
//document.body.classList.toggle('stop-scrolling');
//menu.classList.toggle('show-menu');
//}