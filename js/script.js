document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const navPanel = document.getElementById('navPanel');

navToggle.addEventListener('click', () => {
  const isOpen = navPanel.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('nav-open', isOpen);
});

navPanel.querySelectorAll('.sidebar-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    navPanel.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
    document.body.classList.remove('nav-open');
  });
});

const revealEls = document.querySelectorAll('.section');

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
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

const spySections = document.querySelectorAll('main.content section[id]');
const navLinkByTarget = new Map();

navPanel.querySelectorAll('.sidebar-nav a[href^="#"]').forEach((link) => {
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

const scrollProgress = document.getElementById('scrollProgress');

if (scrollProgress) {
  let ticking = false;

  const updateProgress = () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateProgress);
      ticking = true;
    }
  }, { passive: true });

  updateProgress();
}
