// ─── Единый конфиг ссылок ────────────────────────────────────────────────────
// Чтобы поменять URL — меняй только здесь, не трогая разметку ниже
export const LINKS = {
  telegram:    "https://t.me/RTrader11",
  vipApp:      "https://web-app-hosting--preview.poehali.dev/",
  vipBot:      "https://t.me/RTraderVIP_bot",
  reflections: "https://t.me/traders_reflections",
  tournaments: "https://web-app-hosting--preview.poehali.dev/", // временный — заменить на URL сайта‑хаба
  chat:        "https://t.me/+We1CNiMHWOYxOWQy",
  reviews:     "https://t.me/RTraderReviews",
  knowledge:   "https://t.me/+oph99Gpiy_FmYjUy",
  vk:          "https://vk.com/RTrader11",
  rutube:      "https://rutube.ru/channel/71487062",
  tpulse:      "https://www.tbank.ru/invest/social/profile/RTrader11/",
}

export const LOGO_URL = "https://cdn.poehali.dev/files/a5faa196-2609-46d4-ab06-89def373abec.jpg"

// ─── Пункты навигации ─────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: "О платформе",   anchor: "about" },
  { label: "Кому подойдёт", anchor: "for-whom" },
  { label: "Что внутри",    anchor: "inside" },
  { label: "VIP‑подписка",  anchor: "vip" },
  { label: "Конкурсы",      anchor: "tournaments" },
  { label: "Об авторе",     anchor: "author" },
  { label: "FAQ",           anchor: "faq" },
]

// ─── CSS ─────────────────────────────────────────────────────────────────────
export const backgroundStyle = `
  .bg-pattern {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image:
      linear-gradient(to right, rgba(255,255,255,0.015) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.015) 1px, transparent 1px);
    background-size: 28px 28px;
    pointer-events: none;
    z-index: 1;
  }
  .content { position: relative; z-index: 2; }
  .section-divider { border-color: rgba(255,255,255,0.06); }

  /* Навигация */
  .nav-bar {
    background: rgba(10,11,36,0.88);
    border-bottom: 1px solid rgba(255,255,255,0.09);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 4px 24px rgba(0,0,0,0.35);
  }
  .nav-pill {
    color: rgba(255,255,255,0.55);
    font-size: 14px;
    font-weight: 500;
    padding: 7px 15px;
    border-radius: 999px;
    white-space: nowrap;
    transition: color 0.2s, background 0.2s;
    cursor: pointer;
    text-decoration: none;
    border: none;
    background: transparent;
  }
  .nav-pill:hover, .nav-pill.active {
    color: #fff;
    background: rgba(255,255,255,0.09);
  }
  .nav-scroll {
    overflow-x: auto;
    scrollbar-width: none;
  }
  .nav-scroll::-webkit-scrollbar { display: none; }

  /* Карточки */
  .card-glass {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    backdrop-filter: blur(4px);
    transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
  }
  .card-glass:hover {
    transform: translateY(-3px);
    border-color: rgba(99,102,241,0.3);
    box-shadow: 0 8px 28px rgba(99,102,241,0.12);
  }
  .card-glass:hover .card-icon {
    transform: scale(1.12);
    transition: transform 0.18s ease;
  }
  .card-icon { transition: transform 0.18s ease; }
  .vip-card {
    background: linear-gradient(135deg, rgba(255,180,0,0.1), rgba(255,60,80,0.06));
    border: 1px solid rgba(255,180,0,0.2);
  }
  .faq-item { border-bottom: 1px solid rgba(255,255,255,0.05); }

  /* Кнопки */
  .btn-primary { background: linear-gradient(135deg, #3b82f6, #6366f1); transition: opacity 0.2s, transform 0.15s; }
  .btn-primary:hover { opacity: 0.88; transform: scale(1.03); }
  .btn-vip { background: linear-gradient(135deg, #FFB800, #FF3C50); transition: opacity 0.2s, transform 0.15s; }
  .btn-vip:hover { opacity: 0.88; transform: scale(1.03); }
  .btn-sm-web {
    background: linear-gradient(135deg, #3b82f6, #6366f1);
    transition: opacity 0.18s, transform 0.15s, box-shadow 0.18s;
  }
  .btn-sm-web:hover { opacity: 0.88; transform: scale(1.03); box-shadow: 0 0 14px rgba(99,102,241,0.4); }
  .btn-sm-tg {
    background: transparent;
    border: 1px solid rgba(99,102,241,0.4);
    transition: background 0.18s, transform 0.15s, border-color 0.18s, box-shadow 0.18s;
  }
  .btn-sm-tg:hover {
    background: rgba(99,102,241,0.12);
    border-color: rgba(99,102,241,0.65);
    transform: scale(1.03);
    box-shadow: 0 0 14px rgba(99,102,241,0.25);
  }

  /* Анимация появления блоков */
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up {
    opacity: 0;
    animation: fadeSlideUp 0.45s ease forwards;
  }
  .fade-up.visible { animation-play-state: running; }
  .delay-1 { animation-delay: 0.05s; }
  .delay-2 { animation-delay: 0.12s; }
  .delay-3 { animation-delay: 0.19s; }
  .delay-4 { animation-delay: 0.26s; }
  .delay-5 { animation-delay: 0.33s; }
  .delay-6 { animation-delay: 0.40s; }

  /* Типографика */
  .gradient-text {
    background: linear-gradient(135deg, #FFB800, #FF3C50, #a855f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Иконки */
  .icon-accent {
    background: linear-gradient(135deg, rgba(59,130,246,0.25), rgba(99,102,241,0.15));
    border: 1px solid rgba(99,102,241,0.2);
  }
  .icon-accent-purple {
    background: linear-gradient(135deg, rgba(168,85,247,0.2), rgba(99,102,241,0.12));
    border: 1px solid rgba(168,85,247,0.25);
  }
  .icon-accent-teal {
    background: linear-gradient(135deg, rgba(20,184,166,0.2), rgba(59,130,246,0.12));
    border: 1px solid rgba(20,184,166,0.25);
  }

  /* Прочее */
  .avatar-ring { border: 2px solid rgba(255,184,0,0.4); border-radius: 9999px; }
  .logo-img { width: 56px; height: 56px; border-radius: 14px; object-fit: cover; }
  html { scroll-behavior: smooth; }
`

// ─── Данные ───────────────────────────────────────────────────────────────────
export const features = [
  {
    icon: "BookOpen", iconStyle: "icon-accent", iconColor: "text-indigo-300",
    title: "Обучение и база знаний",
    desc: "Структурированные материалы — от основ до продвинутых стратегий",
    href: null as string | null,
  },
  {
    icon: "TrendingUp", iconStyle: "icon-accent", iconColor: "text-indigo-300",
    title: "Аналитика и торговые идеи",
    desc: "Разборы рынка, точки входа и актуальные сделки от практикующего трейдера",
    href: null as string | null,
  },
  {
    icon: "Users", iconStyle: "icon-accent", iconColor: "text-indigo-300",
    title: "Комьюнити трейдеров",
    desc: "Живое общение, разборы сделок и поддержка единомышленников в Telegram",
    href: null as string | null,
  },
  {
    icon: "Crown", iconStyle: "icon-accent", iconColor: "text-indigo-300",
    title: "VIP‑формат",
    desc: "Закрытый канал с персональными идеями, точным входом и сопровождением",
    href: null as string | null,
  },
  {
    icon: "Trophy", iconStyle: "icon-accent-purple", iconColor: "text-purple-300",
    title: "Конкурсы и турниры",
    desc: "Виртуальная торговля с турнирной таблицей: месяц торговли на демо‑счёте, рост в рейтинге и соревнование по доходности без реального риска.",
    href: LINKS.tournaments,
  },
  {
    icon: "BookMarked", iconStyle: "icon-accent-teal", iconColor: "text-teal-300",
    title: "Рефлексии трейдера",
    desc: "Статьи и заметки о психологии трейдинга, дисциплине и работе с эмоциями. Разбор типичных ошибок и внутренних состояний трейдера.",
    href: LINKS.reflections,
  },
]

export const avatars = [
  { initials: "НО", label: "Новичок — осваивает рынок с нуля" },
  { initials: "АТ", label: "Активный трейдер — ищет точные идеи" },
  { initials: "ИП", label: "Инвестор — пассивный подход и надёжность" },
  { initials: "ФС", label: "Фрилансер — диверсифицирует доходы" },
]

export const vipBullets = [
  { icon: "Zap",           text: "Торговые идеи несколько раз в неделю — конкретные, с точкой входа и стопом" },
  { icon: "BarChart2",     text: "Акции, фьючерсы, крипто — широкий охват рынков" },
  { icon: "Shield",        text: "Жёсткий риск‑менеджмент: никакой «ставки всё»" },
  { icon: "MessageCircle", text: "Разборы сделок и обратная связь в закрытом чате" },
  { icon: "Lock",          text: "Доступ через закрытый Telegram‑канал и веб‑приложение VIP‑клуба" },
]

export const faq = [
  {
    q: "Что такое RTrader?",
    a: "RTrader — онлайн‑платформа и сообщество для трейдеров. Здесь аналитика, обучение, конкурсы на демо‑счётах, материалы по психологии трейдинга и VIP‑подписка с персональными торговыми идеями.",
  },
  {
    q: "Чем VIP отличается от бесплатного канала?",
    a: "В VIP — конкретные сделки с точками входа/выхода, стоп‑лоссами и сопровождением. Доступ через закрытый Telegram‑канал и веб‑приложение. Бесплатный канал — общая аналитика и обучающие материалы.",
  },
  {
    q: "Что такое конкурсы и турниры?",
    a: "Виртуальная торговля с турнирной таблицей: в течение месяца участники ведут выбранный актив на демо‑счёте, соревнуются по доходности и поднимаются в рейтинге. Никакого реального финансового риска.",
  },
  {
    q: "Я новичок. Мне подойдёт?",
    a: "Да! Для новичков есть база знаний и структурированное обучение. Поддержка комьюнити помогает не потеряться на старте. Конкурсы на демо — отличный способ набрать опыт без риска.",
  },
  {
    q: "Как связаться с автором?",
    a: "Напишите в Telegram‑чат (@zeryansky7) или в комьюнити‑чат. Ссылки в подвале страницы.",
  },
]