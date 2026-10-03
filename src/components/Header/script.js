export default function initThemeToggle() {
  const html = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");

  // Check if user has manually set a theme preference
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    html.classList.add("dark");
  } else if (savedTheme === "light") {
    html.classList.remove("dark");
  } else {
    // Default to light theme to prevent conflicts with system dark mode
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }

  toggleBtn?.addEventListener("click", () => {
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}
