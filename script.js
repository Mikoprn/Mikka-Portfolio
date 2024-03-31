// Theme
const body = document.querySelector("body");
themeButton = document.querySelector(".theme__button");

let theme = localStorage.getItem("theme");
if (theme && theme === "light") {
  body.classList.add("light-mode");
  themeButton.classList.add("active");
}

themeButton.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (!body.classList.contains("light-mode")) {
    return localStorage.setItem("theme", "dark");
  }
  localStorage.setItem("theme", "light");
});

themeButton.addEventListener("click", () => {
  themeButton.classList.toggle("active");
});

// Footer year
const year = document.getElementById("year");
year.innerText = new Date().getFullYear();
