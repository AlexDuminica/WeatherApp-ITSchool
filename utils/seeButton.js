const scrollUp = document.querySelector(".material-symbols-outlined");

scrollUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
  });
});

window.addEventListener("scroll", () => {
  scrollUp.style.visibility = window.scrollY < innerHeight / 2 ? "hidden" : "visible";
});
