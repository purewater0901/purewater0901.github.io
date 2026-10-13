// All content is readable without JavaScript. Filters are a progressive enhancement.
const toolbar = document.querySelector('.publication-toolbar');
const filterButtons = document.querySelectorAll('[data-filter]');
const publications = document.querySelectorAll('.publication');
const publicationCount = document.querySelector('#publication-count');

if (toolbar && publicationCount) {
  publicationCount.textContent = `${publications.length} works`;
  toolbar.hidden = false;
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      let visibleCount = 0;
      publications.forEach((publication) => {
        const visible = filter === 'all' || publication.dataset.type === filter;
        publication.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      filterButtons.forEach((item) => {
        item.setAttribute('aria-pressed', String(item === button));
      });
      publicationCount.textContent = `${visibleCount} ${visibleCount === 1 ? 'work' : 'works'}`;
    });
  });
}

// Highlight the navigation link for the section being read.
const navigationLinks = document.querySelectorAll('.site-header nav a');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navigationLinks.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) {
          link.setAttribute('aria-current', 'location');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    });
  }, { rootMargin: '-20% 0px -65% 0px' });
  document.querySelectorAll('main > section[id]').forEach((section) => observer.observe(section));
}
