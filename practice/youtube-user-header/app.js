"use strict";

const navLink = [...document.querySelectorAll(".nav-link")];

const toggleTab = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i].addEventListener("click", function (e) {
      let current = this;
      for (let i = 0; i < array.length; i++) {
        if (current != array[i]) {
          array[i].classList.remove("border");
        } else if (current.classList.contains("border")) {
          current.classList.remove("border");
        } else {
          current.classList.add("border");
        }
      }
      e.preventDefault();
    });
  }
};

toggleTab(navLink);
