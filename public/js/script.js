import { renderCertifications } from "./certifications.js";
import { renderProjects } from "./projects.js";
import { renderjourney } from "./journey.js";

document.addEventListener("DOMContentLoaded", () => {
  renderCertifications();
  renderProjects();
  renderjourney();

  // Initialize AOS animation
  if (typeof AOS !== "undefined") {
    AOS.refresh();
  }
});
