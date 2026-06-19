// Кастомный курсор
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);

let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;
  cursorGlow.style.left = currentX + 'px';
  cursorGlow.style.top = currentY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('.card, .skill-tag, .certificate-item, a, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursorGlow.classList.add('active'));
  el.addEventListener('mouseleave', () => cursorGlow.classList.remove('active'));
});

// Меню
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
});

document.querySelectorAll('.sidebar nav a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});

// Подсветка активного пункта
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.sidebar nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.pageYOffset >= section.offsetTop - 200) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});

// Анимация карточек
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'all 0.6s ease-out';
  observer.observe(card);
});

// Просмотр сертификатов
document.querySelectorAll('.certificate-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const modal = document.createElement('div');
    modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;align-items:center;justify-content:center;z-index:10000;cursor:pointer;';
    const modalImg = document.createElement('img');
    modalImg.src = img.src;
    modalImg.style.cssText = 'max-width:90%;max-height:90%;border-radius:8px;';
    modal.appendChild(modalImg);
    document.body.appendChild(modal);
    modal.addEventListener('click', () => modal.remove());
  });
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
