/*
  SMART MUNIM WEBSITE SETTINGS
  This is the direct link to the latest GitHub Release APK asset.
  NOTE: The repository is private, so only users with repository access can download it.
*/
const APK_DOWNLOAD_URL = "./Smart-munims-debug-build-19.apk";

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.querySelectorAll(".download-link").forEach(link => {
  if (APK_DOWNLOAD_URL.startsWith("http://") || APK_DOWNLOAD_URL.startsWith("https://") || APK_DOWNLOAD_URL.startsWith("./")) {
    link.href = APK_DOWNLOAD_URL;
    link.removeAttribute("target");
    link.removeAttribute("rel");
    link.setAttribute("download", "");
  } else {
    link.href = "#download";
    link.addEventListener("click", event => {
      event.preventDefault();
      document.getElementById("download-status").textContent =
        "The official APK link will be connected before the website goes live.";
    });
  }
});
