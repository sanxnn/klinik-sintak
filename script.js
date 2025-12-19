// =============== Theme Toggle ===============
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
let currentTheme = savedTheme || (systemDark ? 'dark' : 'light');

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  themeToggle.innerHTML = theme === 'dark' 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';
  localStorage.setItem('theme', theme);
  currentTheme = theme;
}

applyTheme(currentTheme);

themeToggle.addEventListener('click', () => {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
});


// =============== Multilingual Data ===============
const translations = {
  id: {
    hero: {
      title1: "Solusi Teknologi,",
      title2: "Dirancang dengan Presisi",
      desc: "KlinikSintak membantu bisnis Anda tumbuh dengan aplikasi web & mobile yang scalable, aman, dan mudah dikembangkan — dibangun dengan <strong>clean code</strong> dan prinsip engineering terbaik.",
      cta: "Konsultasi Gratis"
    },
    nav: {
      layanan: "Layanan",
      portfolio: "Portfolio",
      kontak: "Kontak"
    },
    services: {
      title: "Layanan Kami",
      desc: "Dibangun untuk bisnis yang ingin berkembang dengan fondasi teknologi yang kuat.",
      items: [
        { title: "Web Development", desc: "Aplikasi web custom: dashboard, SaaS, e-commerce, sistem internal — menggunakan Laravel, React, Node.js." },
        { title: "Mobile Apps", desc: "Android & iOS dengan Flutter atau Kotlin — performa tinggi, UI/UX intuitif, integrasi API aman." },
        { title: "API & Integrasi", desc: "REST/GraphQL API, integrasi dengan sistem lama (legacy), payment gateway, dan third-party services." }
      ]
    },
    portfolio: {
      title: "Portofolio Kami",
      desc: "Berbagai solusi digital yang kami bangun untuk bisnis, UMKM, dan institusi.",
      items: [
        { title: "Website Company Profile", desc: "Website profesional untuk perusahaan, startup, dan institusi — menampilkan profil, layanan, portofolio, dan kontak dengan desain modern." },
        { title: "Landing Page Produk & Event", desc: "Landing page fokus konversi untuk promosi produk, event, atau campaign digital dengan performa cepat dan SEO-friendly." },
        { title: "Sistem Digital UMKM", desc: "Solusi digital untuk UMKM: katalog produk, pemesanan online, manajemen pelanggan, dan integrasi WhatsApp." },
        { title: "Aplikasi Web Custom", desc: "Aplikasi web sesuai kebutuhan bisnis seperti dashboard, sistem internal, dan manajemen data berbasis web." }
      ]
    },
    contact: {
      title: "Mulai Proyek Anda",
      desc: "Konsultasi gratis — tanpa kewajiban. Kami akan bantu definisikan kebutuhan teknis & estimasi biaya.",
      info: "Kontak Langsung",
      email: "admin@kliniksintak.web.id",
      wa: "+62 878-6242-4607",
      location: "Jember, Jawa Timur",
      form: {
        name: "Nama Anda",
        contact: "Email atau WhatsApp",
        message: "Ceritakan proyek Anda (fitur, timeline, dll)",
        submit: "Kirim Permintaan"
      }
    },
    footer: {
      tagline: "Clean Code • Scalable Architecture • User-Centric Design",
      copyright: "© 2025 KlinikSintak. Hak cipta dilindungi."
    }
  },
  en: {
    hero: {
      title1: "Technology Solutions,",
      title2: "Designed with Precision",
      desc: "KlinikSintak helps your business grow with scalable, secure, and maintainable web & mobile apps — built with <strong>clean code</strong> and engineering best practices.",
      cta: "Free Consultation"
    },
    nav: {
      layanan: "Services",
      portfolio: "Portfolio",
      kontak: "Contact"
    },
    services: {
      title: "Our Services",
      desc: "Built for businesses aiming to scale with robust technological foundations.",
      items: [
        { title: "Web Development", desc: "Custom web apps: dashboards, SaaS, e-commerce, internal systems — using Laravel, React, Node.js." },
        { title: "Mobile Apps", desc: "Android & iOS with Flutter or Kotlin — high performance, intuitive UI/UX, secure API integration." },
        { title: "API & Integrations", desc: "REST/GraphQL APIs, legacy system integration, payment gateways, and third-party services." }
      ]
    },
    portfolio: {
      title: "Our Portfolio",
      desc: "Digital solutions we’ve built for businesses, MSMEs, and institutions.",
      items: [
        { title: "Company Profile Website", desc: "Professional websites for companies, startups, and institutions — showcasing profile, services, portfolio, and contact with modern design." },
        { title: "Product & Event Landing Pages", desc: "High-conversion landing pages for product launches, events, or digital campaigns — fast and SEO-friendly." },
        { title: "MSME Digital Systems", desc: "Digital solutions for MSMEs: product catalogs, online orders, customer management, and WhatsApp integration." },
        { title: "Custom Web Apps", desc: "Tailored web applications for business needs: dashboards, internal tools, and data management systems." }
      ]
    },
    contact: {
      title: "Start Your Project",
      desc: "Free consultation — no obligation. We’ll help define technical requirements & cost estimates.",
      info: "Direct Contact",
      email: "admin@kliniksintak.web.id",
      wa: "+62 878-6242-4607",
      location: "Jember, East Java",
      form: {
        name: "Your Name",
        contact: "Email or WhatsApp",
        message: "Tell us about your project (features, timeline, etc.)",
        submit: "Send Request"
      }
    },
    footer: {
      tagline: "Clean Code • Scalable Architecture • User-Centric Design",
      copyright: "© 2025 KlinikSintak. All rights reserved."
    }
  }
};

let currentLang = 'id'; // default

// Update text based on language
// Update text based on language
function updateLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Hero
  document.querySelector('.hero h1').innerHTML = `${t.hero.title1}<br /><span>${t.hero.title2}</span>`;
  document.querySelector('.hero p').innerHTML = t.hero.desc;
  document.querySelector('.btn-primary').textContent = t.hero.cta;

  // Navbar
  document.querySelector('a[href="#layanan"]').textContent = t.nav.layanan;
  document.querySelector('a[href="#portfolio"]').textContent = t.nav.portfolio;
  document.querySelector('a[href="#kontak"]').textContent = t.nav.kontak;

  // Services
  document.querySelector('#layanan .section-header h2').textContent = t.services.title;
  document.querySelector('#layanan .section-header p').textContent = t.services.desc;
  document.querySelectorAll('.service-card h3').forEach((el, i) => {
    el.textContent = t.services.items[i].title;
  });
  document.querySelectorAll('.service-card p').forEach((el, i) => {
    el.textContent = t.services.items[i].desc;
  });

  // === PORTFOLIO ===
  // Update section header
  document.querySelector('#portfolio .section-header h2').textContent = t.portfolio.title;
  document.querySelector('#portfolio .section-header p').textContent = t.portfolio.desc;

  // Update project cards (manual, no data-i18n)
  const projectCards = document.querySelectorAll('.project-card');
  if (projectCards.length >= 3) {
    // Card 1: Website Company Profile
    projectCards[0].querySelector('h3').textContent = t.portfolio.items[0].title;
    projectCards[0].querySelector('p').textContent = t.portfolio.items[0].desc;

    // Card 2: Landing Page Produk & Event
    projectCards[1].querySelector('h3').textContent = t.portfolio.items[1].title;
    projectCards[1].querySelector('p').textContent = t.portfolio.items[1].desc;

    // Card 3: Sistem Digital UMKM
    projectCards[2].querySelector('h3').textContent = t.portfolio.items[2].title;
    projectCards[2].querySelector('p').textContent = t.portfolio.items[2].desc;
  }

  // Contact
  document.querySelector('#kontak .section-header h2').textContent = t.contact.title;
  document.querySelector('#kontak .section-header p').textContent = t.contact.desc;
  document.querySelector('.contact-info h3').textContent = t.contact.info;
  document.querySelector('.contact-item:nth-child(2) a').textContent = t.contact.email;
  document.querySelector('.contact-item:nth-child(2) a').href = `mailto:${t.contact.email}`;
  document.querySelector('.contact-item:nth-child(3) a').textContent = t.contact.wa;
  document.querySelector('.contact-item:nth-child(3) a').href = `https://wa.me/6287862424607`;
  document.querySelector('.contact-item:nth-child(4) div').textContent = t.contact.location;

  // Form placeholders
  document.querySelector('.contact-form input[type="text"]').placeholder = t.contact.form.name;
  document.querySelector('.contact-form input[type="email"]').placeholder = t.contact.form.contact;
  document.querySelector('.contact-form textarea').placeholder = t.contact.form.message;
  document.querySelector('.contact-form .btn-primary').textContent = t.contact.form.submit;

  // Footer
  document.querySelector('.footer p:first-of-type').innerHTML = `<strong>KlinikSintak</strong> — ${t.footer.tagline}`;
  document.querySelector('.footer p:last-of-type').textContent = t.footer.copyright;

  // Update UI button
  document.getElementById('lang-toggle').textContent = lang === 'id' ? 'ID' : 'EN';
  localStorage.setItem('lang', lang);
}

// =============== Language Toggle ===============
document.getElementById('lang-toggle').addEventListener('click', function() {
  const newLang = currentLang === 'id' ? 'en' : 'id';
  updateLanguage(newLang);
});


// =============== Scroll Animations ===============
function animateOnScroll() {
  const fadeElements = document.querySelectorAll('.fade-in, .slide-up');
  fadeElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop < window.innerHeight - elementVisible) {
      el.classList.add('appear');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);


// =============== Smooth Scroll ===============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});


// =============== Form Handling ===============
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    if (name && email) {
      alert(currentLang === 'id' 
        ? '✅ Terima kasih!\nPermintaan Anda telah terkirim. Kami akan segera menghubungi Anda via WhatsApp/Email.'
        : '✅ Thank you!\nYour request has been sent. We’ll contact you shortly via WhatsApp/Email.'
      );
      this.reset();
    } else {
      alert(currentLang === 'id' 
        ? '⚠️ Harap isi nama dan kontak Anda.'
        : '⚠️ Please fill in your name and contact info.'
      );
    }
  });
}

