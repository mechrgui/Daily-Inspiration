const quotes = [
  { text: "You are capable of amazing things.", author: "Unknown" },
  { text: "Keep going. Everything you need will come.", author: "Unknown" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Don’t wait. The time will never be just right.", author: "Napoleon Hill" },
  { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" }
];

const cards = document.querySelectorAll('.quote-card');
const refreshBtn = document.getElementById('refresh-quotes');
const toggleBtn = document.getElementById('toggle-theme');

// Generate random selection of quotes
function getRandomQuotes(count) {
  return quotes.sort(() => 0.5 - Math.random()).slice(0, count);
}

// Load quotes into the cards
function loadQuotes() {
  const selectedQuotes = getRandomQuotes(cards.length);
  cards.forEach((card, index) => {
    card.classList.remove('fade');
    void card.offsetWidth; // Force reflow for animation
    card.classList.add('fade');

    card.innerHTML = `
      <p>"${selectedQuotes[index].text}"</p>
      <span>— ${selectedQuotes[index].author}</span>
    `;
  });
}

// Theme toggle
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Refresh quotes
refreshBtn.addEventListener('click', loadQuotes);

// Initial load
loadQuotes();
