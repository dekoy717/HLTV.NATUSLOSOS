// ===== DATA =====
const players = [
  {
    id: 1,
    nickname: "frozzen",
    role: "рифлер",
    country: "Россия",
    flag: "\ud83c\uddf7\ud83c\uddfa",
    image: "image/frozzenn.png",
    rating: "1.24",
    kills: "1847",
    hs: "58%",
    bio: "Rifler команды, известен своей универсальностью, хладнокровием и умением доигрывать сложные раунды. Особенно опасен в clutch-ситуациях, где регулярно переворачивает исход в пользу команды. Благодаря опыту игры на AWP, обладает отличным пониманием таймингов и позиций. Один из самых надежных игроков состава, часто предлагает идеи по ходу раунда и помогает команде принимать правильные решения в ключевые моменты."
  },
  {
    id: 2,
    nickname: "dekoy",
    role: "IGL / AWP",
    country: "\u0420\u043e\u0441\u0441\u0438\u044f",
    flag: "\ud83c\uddf7\ud83c\uddfa",
    image: "image/dekoy.png",
    rating: "1.18",
    kills: "2103",
    hs: "46%",
    bio: "IGL команды, отвечающий за тактическое руководство и координацию состава. Обеспечивает тиммейтов гранатами, флешками и смоками, создавая преимущества в ключевых моментах раунда. Часто жертвует личной экономикой, покупая оружие для команды. Играет на общий результат, ставя успех состава выше собственной статистики, и обеспечивает стабильность и контроль по ходу всей игры."
  },
  {
    id: 3,
    nickname: "gimbat",
    role: "люркер",
    country: "\u0420\u043e\u0441\u0441\u0438\u044f",
    flag: "\ud83c\uddf7\ud83c\uddfa",
    image: "image/gimbat.png",
    rating: "1.12",
    kills: "1654",
    hs: "51%",
    bio: "Lurker команды, отличающийся спокойствием и высоким игровым интеллектом. Специализируется на сборе информации и контроле карты, создавая преимущество для команды. Умеет находить неожиданные тайминги и наказывать соперника за ошибки. Мастер позиционной игры, эффективно действует в одиночку и вскрывает оборону соперника, открывая возможности для успешных действий состава."
  },
  {
    id: 4,
    nickname: "gamblet",
    role: "рифлер",
    country: "\u0420\u043e\u0441\u0441\u0438\u044f",
    flag: "\ud83c\uddf7\ud83c\uddfa",
    image: "image/gamblet.png",
    rating: "1.09",
    kills: "1589",
    hs: "48%",
    bio: "Rifler команды, универсальный игрок, способный адаптироваться под любую ситуацию. При необходимости может взять на себя роль второго снайпера, усиливая огневую мощь состава. Отличается эмоциональностью и громкой коммуникацией, создавая энергию и поддерживая темп команды. Уверенно действует в разных ролях, вносит импакт в ключевых моментах и помогает команде сохранять давление на соперника."
  },
  {
    id: 5,
    nickname: "siwisko",
    role: "рифлер",
    country: "Кыргызстан",
    flag: "🇰🇬",
    image: "image/siwisko.png",
    rating: "1.34",
    kills: "1421",
    hs: "62%",
    bio: "Rifler команды, являющийся основной огневой мощью состава. Отличается уверенной стрельбой и высоким уровнем индивидуального мастерства. Особенно опасен при игре с AK-47, раскрывая весь свой потенциал и доминируя в перестрелках. Способен стабильно выигрывать дуэли и создавать численное преимущество. Его агрессия и точность делают его ключевым игроком атаки и опорой команды в решающих моментах."
  }
];

const news = [
  {
    title: "HooXi сдулся — Расмус отыгрывает худший год в карьере.",
    date: "15 \u0444\u0435\u0432\u0440\u0430\u043b\u044f 2026",
    image: "image/news1.jpg"
  },
  {
    title: "Шел четвертый день PGL Cluj-Napoca 2026: 🇷🇺 donk до сих пор не вошел в пятерку лучших...",
    date: "10 \u0444\u0435\u0432\u0440\u0430\u043b\u044f 2026",
    image: "image/news2.jpg"
  },
  {
    title: "Gimbat впечатлил на последней карте! Gimbat показал свою лучшую игру в 2026 году, выйдя с K/D 8 и набив впечатляющие 32 убийства на карте.",
    date: "2 \u0444\u0435\u0432\u0440\u0430\u043b\u044f 2026",
    image: "image/news5.png"
  }
];

const tournaments = [
  {
    name: "ESL Pro League Season 21",
    info: "Prize Pool: $850,000 \u2022 16 \u043a\u043e\u043c\u0430\u043d\u0434",
    status: "active",
    statusText: "\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439"
  },
  {
    name: "BLAST Premier Spring 2026",
    info: "Prize Pool: $425,000 \u2022 12 \u043a\u043e\u043c\u0430\u043d\u0434",
    status: "upcoming",
    statusText: "\u0421\u043a\u043e\u0440\u043e"
  },
  {
    name: "IEM Katowice 2026",
    info: "Prize Pool: $1,000,000 \u2022 24 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",
    status: "open",
    statusText: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"
  }
];

// ===== ACADEMY DATA =====
const academyPlayers = [
  {
    id: 101,
    nickname: "darklord",
    role: "\u0420\u0438\u0444\u043b\u0435\u0440",
    country: "кыргызстан",
    flag: "🇰🇬",
    image: "image/aka2.jpg",
    rating: "0.98",
    kills: "876",
    hs: "52%",
    bio: "\u041c\u043e\u043b\u043e\u0434\u043e\u0439 \u0442\u0430\u043b\u0430\u043d\u0442 \u0438\u0437 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430, \u043f\u0440\u043e\u0448\u0451\u043b \u043e\u0442\u0431\u043e\u0440 \u0432 \u0430\u043a\u0430\u0434\u0435\u043c\u0438\u044e \u0438 \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0442\u0440\u0435\u043d\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0441 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u043c \u0441\u043e\u0441\u0442\u0430\u0432\u043e\u043c."
  },
  {
    id: 102,
    nickname: "br0nx",
    role: "\u0421\u043d\u0430\u0439\u043f\u0435\u0440",
    country: "\u0420\u043e\u0441\u0441\u0438\u044f",
    flag: "\ud83c\uddf7\ud83c\uddfa",
    image: "image/aka1.png",
    rating: "1.02",
    kills: "943",
    hs: "46%",
    bio: "\u041f\u0435\u0440\u0441\u043f\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439 AWP-\u0435\u0440, \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u044b\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043d\u0430 FPL-C \u0438 \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0442\u0443\u0440\u043d\u0438\u0440\u0430\u0445."
  }
];

const matches = [
  {
    opponent: "Spirit Academy",
    score: "2 : 1",
    date: "14 \u0444\u0435\u0432. 2026",
    result: "loss"
  },
  {
    opponent: "Spirit Academy",
    score: "0 : 2",
    date: "12 \u0444\u0435\u0432. 2026",
    result: "loss"
  },
  {
    opponent: "MIBR Academy",
    score: "2 : 0",
    date: "10 \u0444\u0435\u0432. 2026",
    result: "win"
  },
  {
    opponent: "Spirit Academy",
    score: "1 : 2",
    date: "8 \u0444\u0435\u0432. 2026",
    result: "loss"
  },
  {
    opponent: "ClayMakers",
    score: "2 : 0",
    date: "5 \u0444\u0435\u0432. 2026",
    result: "win"
  }
];

// ===== RENDER =====

function renderPlayers() {
  const grid = document.getElementById("players-grid");
  grid.innerHTML = players
    .map(
      (p) => `
    <div class="player-card" onclick="openModal(${p.id})">
      <div class="player-img-wrapper">
        <img src="${p.image}" alt="${p.nickname}" loading="lazy" />
      </div>
      <div class="player-info">
        <div class="player-nickname">${p.nickname}</div>
        <div class="player-role">${p.role}</div>
        <div class="player-country">
          <span class="flag">${p.flag}</span>
          ${p.country}
        </div>
      </div>
    </div>`
    )
    .join("");
}

function renderNews() {
  const grid = document.getElementById("news-grid");
  grid.innerHTML = news
    .map(
      (n, i) => `
    <div class="news-card">
      <div class="news-img">
        ${n.image ? `<img src="${n.image}" alt="${n.title}" />` : `<svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"/></svg>`}
      </div>
      <div class="news-body">
        <div class="news-date">${n.date}</div>
        <div class="news-title">${n.title}</div>
      </div>
    </div>`
    )
    .join("");
}

function renderTournaments() {
  const grid = document.getElementById("tournaments-grid");
  grid.innerHTML = tournaments
    .map(
      (t) => `
    <div class="tournament-card">
      <div class="tournament-name">${t.name}</div>
      <div class="tournament-info">${t.info}</div>
      <span class="badge badge-${t.status}">${t.statusText}</span>
    </div>`
    )
    .join("");
}

function renderMatches() {
  const list = document.getElementById("matches-list");
  list.innerHTML = matches
    .map(
      (m) => `
    <div class="match-card">
      <div class="match-teams">
        <span>Natus Losos</span>
        <span class="match-vs">vs</span>
        <span>${m.opponent}</span>
      </div>
      <div class="match-score">${m.score}</div>
      <div class="match-meta">
        <span class="match-date">${m.date}</span>
        <span class="badge badge-${m.result}">${m.result === "win" ? "\u041f\u043e\u0431\u0435\u0434\u0430" : "\u041f\u043e\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}</span>
      </div>
    </div>`
    )
    .join("");
}

// ===== ACADEMY RENDER =====

function renderAcademy() {
  const grid = document.getElementById("academy-grid");
  grid.innerHTML = academyPlayers
    .map(
      (p) => `
    <div class="player-card" onclick="openModal(${p.id}, true)">
      <div class="player-img-wrapper">
        <img src="${p.image}" alt="${p.nickname}" loading="lazy" />
      </div>
      <div class="player-info">
        <div class="player-nickname">${p.nickname}</div>
        <div class="player-role">${p.role}</div>
        <div class="player-country">
          <span class="flag">${p.flag}</span>
          ${p.country}
        </div>
      </div>
    </div>`
    )
    .join("");
}

function switchAcademyTab(tab) {
  document.querySelectorAll(".academy-tab").forEach((t) => t.classList.remove("active"));
  document.querySelectorAll(".academy-panel").forEach((p) => p.classList.remove("active"));

  document.getElementById("tab-" + tab).classList.add("active");
  document.getElementById("panel-" + tab).classList.add("active");
}

function submitApplication(e) {
  e.preventDefault();
  document.getElementById("apply-form").style.display = "none";
  document.getElementById("apply-success").style.display = "block";
}

// ===== MODAL =====
function openModal(id, isAcademy) {
  const source = isAcademy ? academyPlayers : players;
  const player = source.find((p) => p.id === id);
  if (!player) return;

  const modal = document.getElementById("modal");
  document.getElementById("modal-avatar").src = player.image;
  document.getElementById("modal-avatar").alt = player.nickname;
  document.getElementById("modal-name").textContent = player.nickname;
  document.getElementById("modal-role").textContent = player.role;
  document.getElementById("modal-country").innerHTML = `${player.flag} ${player.country}`;
  document.getElementById("modal-rating").textContent = player.rating;
  document.getElementById("modal-kills").textContent = player.kills;
  document.getElementById("modal-hs").textContent = player.hs;
  document.getElementById("modal-bio").textContent = player.bio;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// ===== BURGER MENU =====
function toggleMenu() {
  document.getElementById("nav").classList.toggle("open");
  document.querySelector(".burger").classList.toggle("active");
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  renderPlayers();
  renderAcademy();
  renderNews();
  renderTournaments();
  renderMatches();

  // Close modal on overlay click
  document.getElementById("modal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Close modal on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Close burger menu on nav link click
  document.querySelectorAll("#nav a").forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("nav").classList.remove("open");
      document.querySelector(".burger").classList.remove("active");
    });
  });
});
