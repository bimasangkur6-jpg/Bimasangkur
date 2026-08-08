// ===== Tahun otomatis di footer =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Toggle menu mobile =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
});

// Tutup menu saat salah satu link diklik (khusus mobile)
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Buka menu');
  });
});

// ===== Scroll reveal: section muncul (fade + naik) saat masuk layar =====
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  // Browser lama tanpa IntersectionObserver: langsung tampilkan saja
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// ===== Scrollspy: link nav aktif otomatis ikut section yang lagi keliatan =====
const spySections = document.querySelectorAll('main section[id]');
const navLinkByTarget = new Map();

navLinks.querySelectorAll('a[href^="#"]').forEach((link) => {
  navLinkByTarget.set(link.getAttribute('href').slice(1), link);
});

if ('IntersectionObserver' in window && spySections.length) {
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const link = navLinkByTarget.get(entry.target.id);
      if (!link || !entry.isIntersecting) return;
      navLinkByTarget.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  spySections.forEach((section) => spyObserver.observe(section));
}
