// const menuToggle = document.querySelector('.toggle-button');
// const menuContainer = document.querySelector('#navbar');

// menuToggle.addEventListener('click', () => {
//   menuContainer.classList.toggle('active');
// });


const toggleBtn = document.querySelector(".toggle-button");
const linksContainer = document.querySelector(".menu-container");
const links = document.querySelectorAll(".nav_item");

toggleBtn.addEventListener("click", () => {
  linksContainer.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 875px)").matches) {
    closeMenu();
  }
});

if (window.matchMedia("(max-witdh: 875px").matches) {
  closeMenu();
}

function closeMenu() {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      linksContainer.classList.remove("active");
      toggleBtn.classList.remove("active");
    });
  });
}