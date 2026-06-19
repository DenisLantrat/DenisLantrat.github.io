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
        <p>Создаю свои проекты. В свободное люблю фотографировать.</p>
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
            <div class="stat-number">5</div>
            <div class="stat-label">Проектов</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">29</div>
            <div class="stat-label">Сертификатов</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">3</div>
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
          <div class="certificate-item"><img src="{{ '/cert_01_sql.png' | relative_url }}" alt="SQL"></div>
          <div class="certificate-item"><img src="{{ '/cert_02_gramota.png' | relative_url }}" alt="Грамота СТЭТ"></div>
          <div class="certificate-item"><img src="{{ '/cert_03_gruppa.png' | relative_url }}" alt="Группа"></div>
          <div class="certificate-item"><img src="{{ '/cert_04_foto.png' | relative_url }}" alt="Диплом Фотоконкурс"></div>
          <div class="certificate-item"><img src="{{ '/cert_05_vesna.png' | relative_url }}" alt="Дипломная студенческая весна"></div>
          <div class="certificate-item"><img src="{{ '/cert_06_diktant.png' | relative_url }}" alt="Диктант Победы"></div>
          <div class="certificate-item"><img src="{{ '/cert_07_kuratorstvo2.png' | relative_url }}" alt="Кураторство 2"></div>
          <div class="certificate-item"><img src="{{ '/cert_08_kuratorstvo.png' | relative_url }}" alt="Кураторство"></div>
          <div class="certificate-item"><img src="{{ '/cert_09_media.png' | relative_url }}" alt="Медиа-школа"></div>
          <div class="certificate-item"><img src="{{ '/cert_10_mediac.png' | relative_url }}" alt="Медиачетверг"></div>
          <div class="certificate-item"><img src="{{ '/cert_11_vesna_cert.png' | relative_url }}" alt="Сертификат студенческой весны"></div>
          <div class="certificate-item"><img src="{{ '/cert_12_topchan.png' | relative_url }}" alt="Топчан"></div>
          <div class="certificate-item"><img src="{{ '/cert_13_topchan1.png' | relative_url }}" alt="Топчан 1"></div>
          <div class="certificate-item"><img src="{{ '/cert_14_traektoria.png' | relative_url }}" alt="Траектория будущего"></div>
          <div class="certificate-item"><img src="{{ '/cert_15_komanda.png' | relative_url }}" alt="Команда"></div>
          <div class="certificate-item"><img src="{{ '/cert_16_chempionat.png' | relative_url }}" alt="Чемпионат"></div>
          <div class="certificate-item"><img src="{{ '/cert_17_3d.png' | relative_url }}" alt="3D-моделирование"></div>
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
