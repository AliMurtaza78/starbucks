function imgSlider(imgSrc) {
  document.querySelector(".starbucks").src = imgSrc;
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}


console.log(imgSlider());
