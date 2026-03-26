document.addEventListener('DOMContentLoaded', () => {
  // Active nav
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href').split('/').pop() === path) a.classList.add('active');
  });

  // Scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sibs = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
        setTimeout(() => entry.target.classList.add('visible'), sibs.indexOf(entry.target) * 70);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Newsletter
  const nl = document.getElementById('newsletterForm');
  if (nl) nl.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('newsletterMsg').style.display = 'block';
    nl.reset();
  });

  // Contact
  const cf = document.getElementById('contactForm');
  if (cf) cf.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('contactMsg').style.display = 'block';
    cf.reset();
  });
});
