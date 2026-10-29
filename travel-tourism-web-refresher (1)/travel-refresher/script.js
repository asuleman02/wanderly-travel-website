// Student learning project. AI-assisted starting code; see README.md.
const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');
const themeToggle = document.querySelector('#themeToggle');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  menuToggle.textContent = '☰';
}));

themeToggle.addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark');
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.textContent = dark ? '☀️ Light mode' : '🌙 Dark mode';
});

const filterButtons = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.destination-card');
const filterStatus = document.querySelector('#filterStatus');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filterButtons.forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  let count = 0;
  cards.forEach(card => {
    card.hidden = category !== 'all' && card.dataset.category !== category;
    if (!card.hidden) count++;
  });
  filterStatus.textContent = `${count} destination${count === 1 ? '' : 's'} shown.`;
}));

const placeInfo = {
  Bali: 'Best for relaxing beaches, cultural experiences and tropical scenery. Explore local temples and try Indonesian food.',
  Paris: 'Best for museums, neighbourhood walks and famous landmarks. Enjoy the Seine, art galleries and local cafés.',
  'Swiss Alps': 'Best for hiking, mountain villages and scenic train journeys. Check weather and trail conditions before setting off.'
};
const detailsPanel = document.querySelector('#detailsPanel');
document.querySelectorAll('.details-button').forEach(button => button.addEventListener('click', () => {
  const place = button.dataset.place;
  document.querySelector('#detailsTitle').textContent = `Discover ${place}`;
  document.querySelector('#detailsText').textContent = placeInfo[place];
  detailsPanel.hidden = false;
  detailsPanel.focus();
}));
document.querySelector('#closeDetails').addEventListener('click', () => { detailsPanel.hidden = true; });

const tripForm = document.querySelector('#tripForm');
const formMessage = document.querySelector('#formMessage');
tripForm.addEventListener('submit', event => {
  event.preventDefault(); // Demo only: do not send information to a server.
  const name = document.querySelector('#travellerName').value.trim();
  const destination = document.querySelector('#destination').value;
  const month = document.querySelector('#travelMonth').value;
  if (!name || !destination || !month) {
    formMessage.textContent = 'Please complete all three fields.';
    return;
  }
  const [year, monthNumber] = month.split('-').map(Number);
  const selectedMonth = new Date(year, monthNumber - 1, 1);
  const thisMonth = new Date();
  thisMonth.setDate(1);
  thisMonth.setHours(0, 0, 0, 0);
  if (selectedMonth < thisMonth) {
    formMessage.textContent = 'Please choose this month or a future month.';
    return;
  }
  const prettyMonth = selectedMonth.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
  formMessage.textContent = `Great idea, ${name}! ${destination} in ${prettyMonth} sounds exciting. This is a demo, so no booking has been made.`;
  tripForm.reset();
});
