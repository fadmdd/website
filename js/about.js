(function () {
  'use strict';

  const sections     = document.querySelectorAll('.about-section');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  // Smooth scroll to section on sidebar click
  sidebarLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.dataset.target;
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Highlight active sidebar link based on scroll position
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      sidebarLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.target === id);
      });
    });
  }, {
    threshold: 0,
    rootMargin: '-30% 0px -65% 0px'
  });

  sections.forEach(s => sectionObserver.observe(s));

  // Activate first link on load
  if (sidebarLinks.length) sidebarLinks[0].classList.add('active');
}());
