//Assign background spans random variable number between 1 - 41
let backgroundBubles = document.querySelector(".background-bubles");
let bubles = backgroundBubles.querySelectorAll("span");
bubles.forEach((buble) => {
  let randomNumber = Math.floor(Math.random() * 41) + 8;
  buble.style = `--i: ${randomNumber}`;
  buble.classList.remove("hidden");
});
