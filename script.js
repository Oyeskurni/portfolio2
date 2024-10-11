const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

// Set the initial theme based on saved preference or system preference
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.setAttribute("data-theme", "dark");
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  let newTheme = "light";

  if (currentTheme === "light") {
    newTheme = "dark";
  }

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme); // Save user's preference
});
