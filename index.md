---
layout: default
title: Елизавета - Frontend Developer
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
        <h1>Елизавета</h1>
        <p class="subtitle">Frontend • UI/UX • Developer</p>
      </div>
    </section>

    <!-- ОБО МНЕ -->
    <section id="about">
      <div class="card">
        <h2>Обо мне</h2>
        <p>Создаю быстрые, красивые и современные интерфейсы.</p>
      </div>
    </section>

    <!-- НАВЫКИ -->
    <section id="skills">
      <div class="card">
        <h2>Навыки</h2>
        <div class="skills-grid">
          <span class="skill-tag">HTML</span>
          <span class="skill-tag">CSS</span>
          <span class="skill-tag">SCSS</span>
          <span class="skill-tag">JavaScript</span>
          <span class="skill-tag">TypeScript</span>
          <span class="skill-tag">React</span>
          <span class="skill-tag">Vue</span>
          <span class="skill-tag">Next.js</span>
          <span class="skill-tag">Redux</span>
          <span class="skill-tag">Git</span>
          <span class="skill-tag">Figma</span>
          <span class="skill-tag">Photoshop</span>
          <span class="skill-tag">UI/UX</span>
          <span class="skill-tag">1C</span>
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
          <!-- Замените названия файлов на свои -->
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
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/11.jpg' | relative_url }}" alt="Сертификат 11"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/12.jpg' | relative_url }}" alt="Сертификат 12"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/13.jpg' | relative_url }}" alt="Сертификат 13"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/14.jpg' | relative_url }}" alt="Сертификат 14"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/15.jpg' | relative_url }}" alt="Сертификат 15"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/16.jpg' | relative_url }}" alt="Сертификат 16"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/17.jpg' | relative_url }}" alt="Сертификат 17"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/18.jpg' | relative_url }}" alt="Сертификат 18"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/19.jpg' | relative_url }}" alt="Сертификат 19"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/20.jpg' | relative_url }}" alt="Сертификат 20"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/21.jpg' | relative_url }}" alt="Сертификат 21"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/22.jpg' | relative_url }}" alt="Сертификат 22"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/23.jpg' | relative_url }}" alt="Сертификат 23"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/24.jpg' | relative_url }}" alt="Сертификат 24"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/25.jpg' | relative_url }}" alt="Сертификат 25"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/26.jpg' | relative_url }}" alt="Сертификат 26"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/27.jpg' | relative_url }}" alt="Сертификат 27"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/28.jpg' | relative_url }}" alt="Сертификат 28"></div>
          <div class="certificate-item"><img src="{{ '/assets/images/certificates/29.jpg' | relative_url }}" alt="Сертификат 29"></div>
        </div>
      </div>
    </section>

    <!-- КОНТАКТЫ -->
    <section id="contacts">
      <div class="card">
        <h2>Контакты</h2>
        <div class="contact-info">
          <p>Email: <a href="mailto:elizavetaliask@mail.ru">elizavetaliask@mail.ru</a></p>
          <p>Telegram: <a href="https://t.me/vetkaass" target="_blank">@vetkaass</a></p>
        </div>
      </div>
    </section>

  </main>

  <script src="{{ '/assets/js/main.js' | relative_url }}"></script>
</body>
</html>
