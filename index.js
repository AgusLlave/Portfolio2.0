const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

const form = document.getElementById("form");

form.addEventListener("submit", () => {
  Toastify({
    text: "Message sent successfully",
    duration: 3000,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
});

const links = document.querySelectorAll(".nav-link");

if (links.length) {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((link) => {
        link.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
}

const contactBtn = document.getElementsByClassName("btn");
const watchWorkBtn = document.getElementsByClassName("btn2");
const homeBtn = document.getElementsByClassName("home-btn");
const contactDisplay = document.getElementsByClassName("contact-b");
const portfolioDisplay = document.getElementsByClassName("portfolio-b");
const homeDisplay = document.getElementsByClassName("home-b");

contactBtn[0].addEventListener("click", () => {
  links.forEach((link) => {
    link.classList.remove("active");
  });
  contactDisplay[0].classList.add("active");
});

watchWorkBtn[0].addEventListener("click", () => {
  links.forEach((link) => {
    link.classList.remove("active");
  });
  portfolioDisplay[0].classList.add("active");
});

homeBtn[0].addEventListener("click", () => {
  links.forEach((link) => {
    link.classList.remove("active");
  });
  homeDisplay[0].classList.add("active");
});
