const techStackData = [
  {
    category: "Databases",
    icon: "🗄️",
    technologies: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    technologies: [
      {
        name: "Spring Framework",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        filter: "filter invert",
      },
    ],
  },
  {
    category: "Mobile Development",
    icon: "📱",
    technologies: [
      {
        name: "Android (Kotlin)",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      },
      {
        name: "Flutter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
    ],
  },
  {
    category: "Cloud & Tools",
    icon: "☁️ 🛠️",
    technologies: [
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Postman",
        icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },
    ],
  },
];

export function renderTechStack() {
  const techGrid = document.getElementById("tech-grid");

  techStackData.forEach((category) => {
    const categoryCard = document.createElement("div");
    categoryCard.className =
      "tech-card group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white transition-all duration-500 hover:scale-105 hover:shadow-xl";

    // Category header
    const header = `
            <div class="text-center mb-6">
                <div class="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">${category.icon}</div>
                <h3 class="text-xl font-semibold text-white/70 mb-2 group-hover:text-white transition-colors duration-300">
                    ${category.category}
                </h3>
                <div class="h-1 w-16 bg-cyan-400 mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
            </div>
        `;

    // Technologies list
    const technologiesList = category.technologies
      .map(
        (tech) => `
            <div class="tech-item flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div class="w-8 h-8 flex-shrink-0 flex items-center justify-center">
                    <img src="${tech.icon}" alt="${
          tech.name
        }" class="w-8 h-8 object-contain hover:scale-110 transition-transform duration-300 ${
          tech.filter || ""
        }">
                </div>
                <span class="text-blue-100 font-medium group-hover:text-white transition-colors duration-300">${
                  tech.name
                }</span>
            </div>
        `
      )
      .join("");

    categoryCard.innerHTML =
      header + `<div class="space-y-4">${technologiesList}</div>`;
    techGrid.appendChild(categoryCard);
  });
}
