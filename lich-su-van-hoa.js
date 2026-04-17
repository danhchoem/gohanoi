// Tabs, Scroll Reveal + Detail Modal
const tabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-pane');
const historyItems = document.querySelectorAll('.history-item');
const modals = document.querySelectorAll('.detail-btn');
const modal = document.getElementById('detail-modal');
const modalClose = document.querySelector('.modal-close');
const modalContent = document.getElementById('modal-content');


// Tab switch
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});


// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });


historyItems.forEach(item => observer.observe(item));


// Detail Modal
modals.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const item = e.target.closest('.history-item');
    modalContent.innerHTML = `
      <h2>${item.querySelector('h2').textContent}</h2>
      <img src="${item.querySelector('img').src}" alt="">
      <p>${item.querySelector('p').textContent}</p>
    `;
    modal.classList.add('active');
  });
});


modalClose.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('active');
});







