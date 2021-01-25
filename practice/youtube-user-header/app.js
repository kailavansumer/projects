const activeLink = () => {
  const navItem = document.querySelector(".nav-item");
  const navLink = document.querySelector(".nav-link");

  navLink.addEventListener("click", () => {
    navLink.classList.toggle("border");
  });
};

activeLink();
