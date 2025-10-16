export default function initThemeToggle() {
  const html = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }

  toggleBtn?.addEventListener("click", () => {
    const isDark = html.classList.toggle("dark");
    localStorage.theme = isDark ? "dark" : "light";
  });
}
