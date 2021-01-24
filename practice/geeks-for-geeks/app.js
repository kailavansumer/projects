const navSlide = () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav-links");
  const body = document.querySelector("body");

  menu.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    body.classList.toggle("overlay");
  });
};

navSlide();
