// Просто небольшой эффект при загрузке
document.addEventListener('DOMContentLoaded', () => {
  console.log('Сайт vertel загружен. XIVIVIDE × Сырная Броня.');
  
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s, transform 0.5s';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 200);
  });
});