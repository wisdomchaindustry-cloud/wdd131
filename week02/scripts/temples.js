// ---------- FOOTER YEAR ----------
const year = document.querySelector("#currentyear");

year.textContent = new Date().getFullYear();

// ---------- LAST MODIFIED ----------
const lastModified = document.querySelector("#lastModified");

lastModified.textContent =
  `Last Modified: ${document.lastModified}`;

// ---------- HAMBURGER MENU ----------
const menuButton = document.querySelector("#menu-button");

const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {

  navigation.classList.toggle("open");

  if (navigation.classList.contains("open")) {
    menuButton.textContent = "✖";
  } else {
    menuButton.textContent = "☰";
  }

});