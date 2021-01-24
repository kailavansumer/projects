const navSlide = () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav-links");
  const body = document.querySelector("body");
  const line1 = document.querySelector(".line1");
  const line2 = document.querySelector(".line2");
  const line3 = document.querySelector(".line3");

  menu.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    body.classList.toggle("overlay");
    line1.classList.toggle("open");
    line2.classList.toggle("open");
    line3.classList.toggle("open");
  });
};

navSlide();
