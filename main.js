// Plain English / Under the hood toggle on log entries
document.querySelectorAll('[data-toggle]').forEach((group) => {
  const buttons = group.querySelectorAll('button[data-mode]');
  const panels = document.querySelectorAll('.body[data-mode]');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.mode;
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      panels.forEach((p) => { p.hidden = p.dataset.mode !== mode; });
    });
  });
});

// Topic filter on the log page
const filters = document.querySelector('.filters');
if (filters) {
  const rows = document.querySelectorAll('.entries .row[data-tag]');
  filters.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const tag = btn.dataset.tag;
      filters.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      rows.forEach((r) => { r.hidden = tag !== 'all' && r.dataset.tag !== tag; });
    });
  });
}
