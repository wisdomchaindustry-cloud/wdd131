const currentYear = document.querySelector("#currentYear");

if (currentYear){
  currentYear.textContent = new Date().getFullYear();
}

const themeToggle = document.querySelector("#themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark"){
  document.body.classList.add("dark-mode");

  if (themeToggle){
    themeToggle.textContent = "☀️";
  }
}

const toggleTheme = () => {

  document.body.classList.toggle("dark-mode");

  const isDarkMode =
    document.body.classList.contains("dark-mode");

  localStorage.setItem(
    "theme",
    isDarkMode ? "dark" : "light"
  );

  if (themeToggle){
    themeToggle.textContent =
      isDarkMode ? "☀️" : "🌙";
  }
};

if (themeToggle){
  themeToggle.addEventListener(
    "click",
    toggleTheme
  );
}