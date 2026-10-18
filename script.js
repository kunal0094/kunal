// Image fallback if a photo is missing
const ph = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="#e9e4dc"/><text x="50%" y="50%" fill="#8a8173" font-size="22" text-anchor="middle" font-family="sans-serif">Photo coming soon</text></svg>');
document.querySelectorAll('img').forEach(i => i.addEventListener('error', () => { i.onerror = null; i.src = ph; }));

// Single page: show one section at a time, no scrolling
const sections = document.querySelectorAll('.page-section');
const links = document.querySelectorAll('.nav-link');
function show(id) {
  if (!document.getElementById(id)) id = 'home';
  sections.forEach(s => s.classList.toggle('active', s.id === id));
  links.forEach(l => l.classList.toggle('active', l.dataset.target === id));
  window.scrollTo(0, 0);
  const m = document.getElementById('menu');
  if (m.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(m).hide();
}
document.addEventListener('click', e => {
  const t = e.target.closest('[data-target]');
  if (t) { e.preventDefault(); show(t.dataset.target); }
});
show('home');
