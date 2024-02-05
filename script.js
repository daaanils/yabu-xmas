const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on Feb 14!";
  gif.src =
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2pub2M1c3lwYzFtaGp0MHEyOWhjYXV0MXVoNGNnOHBkMXFiZGdoOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2R0cE5EqO3QHiCoU/giphy.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
