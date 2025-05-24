import { renderCertifications } from "./certifications.js";
import { renderProjects } from "./projects.js";
import { renderjourney } from "./journey.js";

document.addEventListener("DOMContentLoaded", () => {
  renderCertifications();
  renderProjects();
  renderjourney();

  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");

  mobileMenuButton.addEventListener("click", function () {
    // Toggle mobile menu visibility
    mobileMenu.classList.toggle("hidden");

    // Toggle icon between hamburger and X
    if (mobileMenu.classList.contains("hidden")) {
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    } else {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-times");
    }
  });

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    });
  });

  // Initialize AOS animation
  if (typeof AOS !== "undefined") {
    AOS.refresh();
  }
});
