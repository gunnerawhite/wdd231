document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  toggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});