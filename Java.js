// Button smooth scroll
document.getElementById('exploreBtn').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
const allCardsGrid = document.querySelector('.all-cards-grid');

for (let i = 1; i <= 123; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = `Card ${i}`; // Keyinchalik istalgan matn bilan almashtirishingiz mumkin
    allCardsGrid.appendChild(card);
}


// Til almashtirish uchun
const elements = document.querySelectorAll('[data-uz]');
elements.forEach(el => {
    if(currentLang === 'uz') {
        el.textContent = el.getAttribute('data-en');
        if(el.placeholder) el.placeholder = el.getAttribute('data-en-placeholder');
    } else {
        el.textContent = el.getAttribute('data-uz');
        if(el.placeholder) el.placeholder = el.getAttribute('data-uz-placeholder');
    }
});
