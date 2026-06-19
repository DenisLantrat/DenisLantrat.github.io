---
layout: default
title: Денис Лантрат - Программист
---

<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ page.title }}</title>
  <link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">
</head>
<body>

  <!-- БОКОВОЕ МЕНЮ -->
  <aside class="sidebar" id="sidebar">
    <button class="menu-toggle" id="menuToggle" aria-label="Меню">
      <span></span>
    </button>
    <nav>
      <a href="#home" class="active">Главная</a>
      <a href="#about">Обо мне</a>
      <a href="#skills">Навыки</a>
      <a href="#experience">Опыт</a>
      <a href="#certificates">Сертификаты</a>
      <a href="#contacts">Контакты</a>
    </nav>
  </aside>

  <!-- ОСНОВНОЙ КОНТЕНТ -->
  <main class="main-content">

    <!-- ГЛАВНАЯ -->
    <section id="home" class="hero">
      <div>
        <h1>Денис Лантрат</h1>
        <p class="subtitle">Программист</p>
      </div>
    </section>

    <!-- ОБО МНЕ -->
    <section id="about">
      <div class="card">
        <h2>Обо мне</h2>
        <p>Создаю свои проекты. В свободное время увлекаюсь фотографией.</p>
      </div>
    </section>

    <!-- НАВЫКИ -->
    <section id="skills">
      <div class="card">
        <h2>Навыки</h2>
        <div class="skills-grid">
          <span class="skill-tag">HTML</span>
          <span class="skill-tag">CSS</span>
          <span class="skill-tag">JavaScript</span>
          <span class="skill-tag">Python</span>
          <span class="skill-tag">Git</span>
          <span class="skill-tag">VS Code</span>
        </div>
      </div>
    </section>

    <!-- ОПЫТ -->
    <section id="experience">
      <div class="card">
        <h2>Опыт</h2>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">10+</div>
            <div class="stat-label">Проектов</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">29</div>
            <div class="stat-label">Сертификатов</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">3+</div>
            <div class="stat-label">Года опыта</div>
          </div>
        </div>
      </div>
    </section>

    <!-- СЕРТИФИКАТЫ -->
    <section id="certificates">
      <div class="card">
        <h2>Сертификаты</h2>
        <div class="certificates-grid">
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/1.jpg' | relative_url }}" alt="Сертификат 1"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/2.jpg' | relative_url }}" alt="Сертификат 2"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/3.jpg' | relative_url }}" alt="Сертификат 3"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/4.jpg' | relative_url }}" alt="Сертификат 4"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/5.jpg' | relative_url }}" alt="Сертификат 5"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/6.jpg' | relative_url }}" alt="Сертификат 6"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/7.jpg' | relative_url }}" alt="Сертификат 7"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/8.jpg' | relative_url }}" alt="Сертификат 8"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/9.jpg' | relative_url }}" alt="Сертификат 9"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/10.jpg' | relative_url }}" alt="Сертификат 10"></div>
        </div>
      </div>
    </section>

    <!-- КОНТАКТЫ -->
    <section id="contacts">
      <div class="card">
        <h2>Контакты</h2>
        <div class="contact-info">
          <p>Email: <a href="mailto:Denchik210806@yandex.ru">Denchik210806@yandex.ru</a></p>
          <p>Telegram: <a href="https://t.me/denislantrat" target="_blank">@denislantrat</a></p>
        </div>
      </div>
    </section>

  </main>

  <script src="{{ '/assets/js/main.js' | relative_url }}"></script>
</body>
</html>
