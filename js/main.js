let header = document.getElementById("header");
let bars = document.getElementById("bars");
let nav = document.getElementById("nav");
let Close = document.getElementById("close");
let BtnAlert = document.getElementById("btn-alert");
let ContentAlert = document.getElementById("content-alert");
let navLinks = document.querySelectorAll(".link");

// Onload up
onload = function () {
  ContentAlert.classList.add("hide-alert");
  setTimeout(() => ContentAlert.classList.remove("hide-alert"), 300);
};

onscroll = function () {
  // Scroll Background

  if (scrollY <= 125) {
    // 0%
    header.style.background = "#005d4e00";
  } else if (scrollY <= 300) {
    // 25%
    header.style.background = "#005d4e61";
  } else if (scrollY <= 665) {
    // 75%
    header.style.background = "#005d4ebf";
  } else {
    // 100%
    header.style.background = "var(--main-color)";
  }

  // Start Scroll Up
  this.scrollY >= 1480 ? up.classList.add("show") : up.classList.remove("show");

  bars.classList.remove("active");
  nav.classList.add("show");
};

// bars click
bars.addEventListener("click", () => {
  bars.classList.toggle("active");
  nav.classList.toggle("show");
});

// bars close
navLinks.forEach((link) => {
  link.addEventListener("click", () => nav.classList.add("show"));
});

document.addEventListener("click", (e) => {
  if (!e.target.closest("#header")) {
    bars.classList.remove("active");
    nav.classList.add("show");
    return;
  }
});

// Click alert
BtnAlert.addEventListener("click", () =>
  ContentAlert.classList.add("hide-alert")
);

// Loop alert
setInterval(() => ContentAlert.classList.remove("hide-alert"), 60000);

// Start click up
up.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
