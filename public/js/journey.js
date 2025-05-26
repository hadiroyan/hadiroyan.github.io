const journeys = [
  {
    date: "Sep 2021 - Dec 2024",
    title: "Full Stack Java Developer Student",
    institution: "Metrodata Academy",
    icon: "fas fa-graduation-cap",
    iconColor: "blue",
    bgColor: "blue",
    items: [
      "Learn fundamental skills in SQL, Java, and Object Oriented Programming",
      "Learn application development using JDBC, MVC architecture, and Spring Boot framework with ORM",
      "Studied advanced topics including System Architecture, RESTful Web Services, and Web Design",
      "Achieved Certified Application Security Engineer Java (CASE Java)",
    ],
  },
  {
    date: "Jul 2023 - Jan 2024",
    title: "Mobile Development Student",
    institution: "Bangkit Academy",
    icon: "fas fa-graduation-cap",
    iconColor: "green",
    bgColor: "green",
    subtitle: "Led by Google, Tokopedia, Gojek, & Traveloka",
    items: [
      "Learn Android development, Kotlin programming, Android Studio",
      "Learn skills in modern UI development using Jetpack Compose",
      "Learn SOLID principles and best practices for scalable software design",
      " Implement skills in a capstone project in the form of a Warung Pintar application.",
    ],
  },
  {
    date: "Oct 2022 - Dec 2022",
    title: "Web Developer Intern",
    institution: "Crewnesia",
    icon: "fas fa-code",
    iconColor: "purple",
    bgColor: "purple",
    items: [
      "Assisted in developing the company's profile website",
      "Worked with team to complete website features",
    ],
  },
  {
    date: "Aug 2021 - Dec 2021",
    title: "Technical Trading Staff",
    institution: "PT Salak Bisnis International",
    icon: "fas fa-chart-line",
    iconColor: "orange",
    bgColor: "orange",
    items: [
      "Responsible for managing technical operations of automated trading bots using MetaTrader 4 (MT4)",
      "Monitoring server performance and ensuring all trading bots run smoothly on Windows Server",
      "Providing demos and technical support on bot functionality and monitoring tools",
    ],
  },
];

function getColorClasses(color) {
  const colorMap = {
    blue: {
      bg: "bg-blue-600",
      bgLight: "bg-blue-100",
      text: "text-blue-800",
      textIcon: "text-blue-600",
    },
    green: {
      bg: "bg-green-600",
      bgLight: "bg-green-100",
      text: "text-green-800",
      textIcon: "text-green-600",
    },
    purple: {
      bg: "bg-purple-600",
      bgLight: "bg-purple-100",
      text: "text-purple-800",
      textIcon: "text-purple-600",
    },
    red: {
      bg: "bg-red-600",
      bgLight: "bg-red-100",
      text: "text-red-800",
      textIcon: "text-red-600",
    },
    orange: {
      bg: "bg-orange-600",
      bgLight: "bg-orange-100",
      text: "text-orange-800",
      textIcon: "text-orange-600",
    },
  };

  return colorMap[color] || colorMap.blue;
}

export function renderjourney() {
  const container = document.getElementById("journey-container");

  journeys.forEach((exp, index) => {
    const isLeft = index % 2 === 0;
    const delay = index * 200;
    const colors = getColorClasses(exp.bgColor);

    const timelineItem = document.createElement("div");
    timelineItem.className = `timeline-item opacity-0 transform translate-y-8`;
    timelineItem.setAttribute("data-aos", "fade-up");
    timelineItem.setAttribute("data-delay", delay.toString());

    timelineItem.innerHTML = `
      <div class="relative flex flex-col xl:flex-row xl:items-center">
        <!-- Timeline dot -->
        <div class="absolute left-6 xl:left-1/2 transform xl:-translate-x-1/2 w-4 h-4 ${
          colors.bg
        } rounded-full border-4 border-white shadow-lg z-10"></div>

        <!-- Content wrapper for XL screens -->
        <div class="flex flex-col xl:flex-row xl:w-full xl:items-center">
          ${
            isLeft
              ? `
            <!-- Left side content -->
            <div class="ml-16 xl:ml-0 xl:w-1/2 xl:pr-8">
              <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 xl:ml-auto xl:max-w-md">
                <div class="flex items-center justify-between mb-2 xl:flex-row-reverse">
                  <span class="${colors.bgLight} ${
                  colors.text
                } text-sm font-medium px-3 py-1 rounded-full">${exp.date}</span>
                </div>
                <div class="xl:text-right">
                  <h3 class="text-xl font-bold text-gray-800 mb-2">
                    <i class="${exp.icon} ${
                  colors.textIcon
                } mr-2 xl:ml-2 xl:mr-0"></i>
                    ${exp.title}
                  </h3>
                  <h4 class="text-lg font-semibold text-gray-700 mb-2">
                    ${exp.institution}
                    ${
                      exp.subtitle
                        ? `<div class="text-sm text-gray-500 mt-1">${exp.subtitle}</div>`
                        : ""
                    }
                  </h4>
                  <ul class="text-gray-600 space-y-2">
                    ${exp.items
                      .map(
                        (item) => `
                      <li class="flex items-start xl:justify-end xl:flex-row-reverse">
                        <span class="xl:text-right">${item}</span>
                        <i class="fas fa-check text-green-500 mr-2 xl:ml-2 xl:mr-0 mt-1 text-sm flex-shrink-0"></i>
                      </li>`
                      )
                      .join("")}
                  </ul>
                </div>
              </div>
            </div>
            <!-- Right spacer -->
            <div class="hidden xl:block xl:w-1/2"></div>
          `
              : `
            <!-- Left spacer -->
            <div class="hidden xl:block xl:w-1/2"></div>
            <!-- Right side content -->
            <div class="ml-16 xl:ml-0 xl:w-1/2 xl:pl-8">
              <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 xl:mr-auto xl:max-w-md">
                <div class="flex items-center justify-between mb-2">
                  <span class="${colors.bgLight} ${
                  colors.text
                } text-sm font-medium px-3 py-1 rounded-full">${exp.date}</span>
                </div>
                <h3 class="text-xl font-bold text-gray-800 mb-2">
                  <i class="${exp.icon} ${colors.textIcon} mr-2"></i>
                  ${exp.title}
                </h3>
                <h4 class="text-lg font-semibold text-gray-700 mb-2">
                  ${exp.institution}
                  ${
                    exp.subtitle
                      ? `<div class="text-sm text-gray-500 mt-1">${exp.subtitle}</div>`
                      : ""
                  }
                </h4>
                <ul class="text-gray-600 space-y-2">
                  ${exp.items
                    .map(
                      (item) => `
                    <li class="flex items-start">
                      <i class="fas fa-check text-green-500 mr-2 mt-1 text-sm flex-shrink-0"></i>
                      <span>${item}</span>
                    </li>`
                    )
                    .join("")}
                </ul>
              </div>
            </div>
          `
          }
        </div>
      </div>
    `;

    container.appendChild(timelineItem);
  });
}
