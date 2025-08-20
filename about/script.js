document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year'); if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Simple tabs
  const tabs = [...document.querySelectorAll('.tab')];
  const panels = [...document.querySelectorAll('.panel')];

  function activate(id) {
    tabs.forEach(t => t.classList.toggle('is-active', t.id === 'tab-' + id));
    panels.forEach(p => {
      const on = p.id === 'panel-' + id;
      p.classList.toggle('is-active', on);
      p.hidden = !on;
    });
    history.replaceState(null, '', '#' + id);
  }

  tabs.forEach(t => t.addEventListener('click', () => activate(t.id.replace('tab-',''))));

  // Deep-link: /about/#cv | #grades
  const hash = location.hash.replace('#','') || 'grades';
  if (['grades','cv'].includes(hash)) activate(hash);
});