// Get Slider Items
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// Get Num Of Slides
let slidesCount = sliderImages.length;
console.log(slidesCount);

// Index Of Current Image
let currentSlide = 0;

// Slide Num Element

let slideNumberElement = document.getElementById("slide-number");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let indecatorsContainer = document.getElementById("indecators");
// Functions

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

function nextSlide() {
  if (currentSlide < slidesCount - 1) {
    currentSlide++;
    theChecker();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    theChecker();
  }
}

// Main Ul Element

let indecatorsElement = document.createElement("ul");
indecatorsElement.setAttribute("id", "pagination-ul");
indecatorsContainer.appendChild(indecatorsElement);
for (let i = 1; i <= slidesCount; i++) {
  let item = document.createElement("li");
  item.setAttribute("data-number", i);
  item.textContent = i;
  indecatorsElement.appendChild(item);
}

// Create The Checker Function
let allLis = document.querySelectorAll("#pagination-ul li");

function theChecker() {
  // Set The Slid eNumber
  slideNumberElement.textContent = `Slide # ${
    currentSlide + 1
  } Of ${slidesCount}`;

  //   Set Active Class On Current Slide
  sliderImages[currentSlide].classList.add("active");
  //   Set active Class On Current Bullet
  allLis.forEach((li) => {
    li.classList.remove("on");
  });
  document
    .querySelector(`li:nth-child(${currentSlide + 1})`)
    .classList.add("on");
  // Set Active Class On Current Img
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });
  sliderImages[currentSlide].classList.add("active");
  if (currentSlide === slidesCount - 1) {
    nextButton.classList.add("disabled");
  } else if (currentSlide === 0) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
    nextButton.classList.remove("disabled");
  }
  console.log(currentSlide);
}

theChecker();

allLis.forEach((li) => {
  li.onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-number")) - 1;
    theChecker();
  };
});
