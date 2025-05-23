const certifications = [
  {
    title: "Dev Certified for Android",
    issuer: "dev.cert by dev.id",
    issuedDate: "January 2025",
    id: "7EVZNEPVY3",
    credentialUrl: "https://dev.id/certificate/verify/7EVZNEPVY3",
    logo: "images/logo-cert-company/logo-dev-cert.jpg",
  },
  {
    title: "Certified Application Security Engineer - Java",
    issuer: "EC-Council",
    issuedDate: "December 2024",
    id: "ECC2819643507",
    credentialUrl:
      "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=g2ojapKW7y6r/Ylg5qAMinlhOSSBvYhcimSSCDTSSxw=",
    logo: "images/logo-cert-company/logo-ec-council.png",
  },
  {
    title: "Flutter Shop App | State Management BLoC | Backend [2024]",
    issuer: "Udemy",
    issuedDate: "May 2024",
    id: "UC-35b90092-58a1-49b2-8741-ad51182d9c25",
    credentialUrl: "https://ude.my/UC-35b90092-58a1-49b2-8741-ad51182d9c25",
    logo: "images/logo-cert-company/logo-udemy.svg",
  },
  {
    title: "Belajar Membuat Aplikasi Flutter untuk Pemula",
    issuer: "Dicoding Indonesia",
    issuedDate: "January 2024",
    id: "GRX5Q4KDRZ0M",
    credentialUrl: "https://www.dicoding.com/certificates/GRX5Q4KDRZ0M",
    logo: "images/logo-cert-company/logo-dicoding.jpeg",
  },
  {
    title: "Belajar Membuat Aplikasi Android dengan Jetpack Compose",
    issuer: "Dicoding Indonesia",
    issuedDate: "Oct 2023",
    id: "07Z68715JXQR",
    credentialUrl: "https://www.dicoding.com/certificates/07Z68715JXQR",
    logo: "images/logo-cert-company/logo-dicoding.jpeg",
  },
  {
    title: "Kotlin for Java Developers",
    issuer: "Coursera",
    issuedDate: "April 2022",
    id: "HD3H4HZCZFNJ",
    credentialUrl: "https://coursera.org/verify/HD3H4HZCZFNJ",
    logo: "images/logo-cert-company/logo-coursera-2.svg",
  },

  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    issuedDate: "August 2021",
    id: "F4F36EAD59A6",
    credentialUrl: "https://www.hackerrank.com/certificates/f4f36ead59a6",
    logo: "images/logo-cert-company/logo-hackerrank.png",
  },
];

export function renderCertifications() {
  const containerCert = document.getElementById("certification-list");
  containerCert.innerHTML = "";

  certifications.forEach((cert) => {
    const card = document.createElement("div");
    card.className =
      "relative border-l-4 border-primary pl-4 py-4 hover:bg-gray-100 transition-all duration-300";

    card.innerHTML = `
      <div class="flex flex-row justify-between items-stretch h-full">
        <div class="flex flex-col">
          <h4 class="text-lg font-semibold text-secondary">${cert.title}</h4>
          <p class="text-primary font-medium">${cert.issuer}</p>
          <p class="text-gray-600 text-sm mt-1">Diterbitkan: ${cert.issuedDate}</p>
          <p class="text-gray-600 text-sm">ID: ${cert.id}</p>
        </div>

        <div class="flex flex-col justify-between items-end ml-4 mr-4">
          <img src="${cert.logo}" alt="Logo" class="w-8 h-8 object-contain mt-2" />
          <a href="${cert.credentialUrl}" class="text-primary hover:text-secondary text-sm inline-flex items-center mt-2">
            <i class="far fa-eye mr-1"></i> Credential
          </a>
        </div>
      </div>
    `;

    containerCert.appendChild(card);
  });

  // Setup scroll buttons
  setupScrollButtons();
}

// Fungsi untuk mengatur tombol scroll
function setupScrollButtons() {
  const container = document.getElementById("certification-container");
  const scrollTopBtn = document.getElementById("scroll-top");
  const scrollBottomBtn = document.getElementById("scroll-bottom");

  if (!container || !scrollTopBtn || !scrollBottomBtn) return;

  // Fungsi untuk memeriksa posisi scroll
  function checkScrollPosition() {
    // Tampilkan/sembunyikan tombol berdasarkan posisi scroll
    if (container.scrollTop > 20) {
      scrollTopBtn.classList.remove("hidden");
    } else {
      scrollTopBtn.classList.add("hidden");
    }

    if (
      container.scrollHeight - container.scrollTop - container.clientHeight >
      20
    ) {
      scrollBottomBtn.classList.remove("hidden");
    } else {
      scrollBottomBtn.classList.add("hidden");
    }
  }

  // Event handlers untuk tombol
  scrollTopBtn.addEventListener("click", () => {
    container.scrollTo({ top: 0, behavior: "smooth" });
  });

  scrollBottomBtn.addEventListener("click", () => {
    container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  });

  // Tambahkan event listener untuk scroll
  container.addEventListener("scroll", checkScrollPosition);

  // Periksa posisi awal
  checkScrollPosition();
}
