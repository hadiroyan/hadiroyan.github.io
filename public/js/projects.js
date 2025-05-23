const projects = [
  {
    title: "Spring Boot REST API with MySQL",
    description:
      "REST API menggunakan Spring Boot dan MySQL. Cocok untuk backend aplikasi web dan mobile.",
    image: "public/images/projects/project-spring-mysql.png",
    live: "https:/github.com/hadiroyan/spring-boot-rest-api-mysql",
    source: "https:/github.com/hadiroyan/spring-boot-rest-api-mysql",
    category: "backend",
  },
  {
    title: "Warung Pintar Android App",
    description:
      "Aplikasi Android berbasis Kotlin untuk mendukung digitalisasi warung tradisional.",
    image: "public/images/projects/project-android-warungpintar.png",
    live: "https:/github.com/hadiroyan/warung-pintar",
    source: "https:/github.com/hadiroyan/warung-pintar",
    category: "mobile",
  },
  {
    title: "Spring Security JWT Demo",
    description:
      "Contoh implementasi otorisasi menggunakan Spring Security dan JWT.",
    image: "public/images/projects/project-spring-security-jwt.png",
    live: "https:/github.com/hadiroyan/spring-security-jwt-demo",
    source: "https:/github.com/hadiroyan/spring-security-jwt-demo",
    category: "security",
  },
  {
    title: "Story App Android",
    description:
      "Submission aplikasi Android intermediate dari Dicoding, fitur login dan berbagi cerita.",
    image: "public/images/projects/project-android-storyapp.png",
    live: "https:/github.com/hadiroyan/story-app-android",
    source: "https:/github.com/hadiroyan/story-app-android",
    category: "mobile",
  },
  {
    title: "OpenMusic API Back-End",
    description:
      "Back-end API untuk aplikasi musik menggunakan Node.js dan PostgreSQL.",
    image: "public/images/projects/project-nodejs-postgresql.png",
    live: "https:/github.com/hadiroyan/openmusic-api-back-end",
    source: "https:/github.com/hadiroyan/openmusic-api-back-end",
    category: "backend",
  },
];

export function renderProjects() {
  const container = document.getElementById("project-container");

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className =
      "project-card group relative rounded-lg overflow-hidden shadow-lg";
    card.setAttribute("data-category", project.category);

    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover" />
        <div class="project-overlay absolute inset-0 bg-blue-600 bg-opacity-90 opacity-0 transition-opacity flex flex-col justify-center items-center p-6 text-white">
            <h3 class="text-xl font-bold mb-2">${project.title}</h3>
            <p class="text-center mb-4">${project.description}</p>
            <div class="flex space-x-3">
                <a href="${project.source}" target="_blank" class="border border-white text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-full font-medium">Source Code</a>
            </div>
      </div>`;

    container.appendChild(card);
  });
}
