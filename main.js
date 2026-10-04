'use strict';
const links = window.ARISE_LINKS || {};
document.querySelectorAll('[data-resource]').forEach(button => {
  const kind = button.dataset.resource;
  const url = links[kind];
  if (url && /^https:\/\//i.test(url)) {
    const anchor = document.createElement('a');
    anchor.className = 'resource';
    anchor.href = url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.innerHTML = button.innerHTML;
    anchor.querySelector('.sr-only')?.remove();
    button.replaceWith(anchor);
  }
});
const pending = ['arxiv', 'video'].filter(key => !/^https:\/\//i.test(links[key] || ''));
document.getElementById('resource-status').textContent = pending.length ? pending.map(key => key === 'arxiv' ? 'arXiv' : 'Video').join(' and ') + ' link' + (pending.length > 1 ? 's' : '') + ' coming soon.' : '';
