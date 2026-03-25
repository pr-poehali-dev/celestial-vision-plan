import { useState, useEffect } from "react"
import { Toaster } from "@/components/ui/toaster"
import { Avatar } from "@/components/Avatar"
import { SocialIcon } from "@/components/SocialIcon"
import Icon from "@/components/ui/icon"

// ─── Единый конфиг ссылок ────────────────────────────────────────────────────
// Чтобы поменять URL — меняй только здесь, не трогая разметку ниже
const LINKS = {
  telegram:    "https://t.me/RTrader11",
  vipApp:      "https://web-app-hosting--preview.poehali.dev/",
  reflections: "https://t.me/traders_reflections",
  tournaments: "https://web-app-hosting--preview.poehali.dev/", // временный — заменить на URL сайта‑хаба
  chat:        "https://t.me/+We1CNiMHWOYxOWQy",
  reviews:     "https://t.me/RTraderReviews",
  knowledge:   "https://t.me/+oph99Gpiy_FmYjUy",
  vk:          "https://vk.com/RTrader11",
  rutube:      "https://rutube.ru/channel/71487062",
  tpulse:      "https://www.tbank.ru/invest/social/profile/RTrader11/",
}

const LOGO_URL = "https://cdn.poehali.dev/files/a5faa196-2609-46d4-ab06-89def373abec.jpg"

// ─── Пункты навигации ─────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: "О платформе",        anchor: "about" },
  { label: "Кому подойдёт",      anchor: "for-whom" },
  { label: "Что внутри",         anchor: "inside" },
  { label: "VIP‑подписка",       anchor: "vip" },
  { label: "Конкурсы",           anchor: "tournaments" },
  { label: "Об авторе",          anchor: "author" },
  { label: "FAQ",                anchor: "faq" },
]

// ─── CSS ─────────────────────────────────────────────────────────────────────
const backgroundStyle = `
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
    background: rgba(13,14,44,0.85);
    border-bottom: 1px solid rgba(255,255,255,0.07);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
  .nav-pill {
    color: rgba(255,255,255,0.55);
    font-size: 13px;
    font-weight: 500;
    padding: 6px 14px;
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
    background: rgba(255,255,255,0.08);
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
    transition: border-color 0.2s;
  }
  .card-glass:hover { border-color: rgba(255,255,255,0.14); }
  .vip-card {
    background: linear-gradient(135deg, rgba(255,180,0,0.1), rgba(255,60,80,0.06));
    border: 1px solid rgba(255,180,0,0.2);
  }
  .faq-item { border-bottom: 1px solid rgba(255,255,255,0.05); }

  /* Кнопки */
  .btn-primary { background: linear-gradient(135deg, #3b82f6, #6366f1); transition: opacity 0.2s; }
  .btn-primary:hover { opacity: 0.88; }
  .btn-vip { background: linear-gradient(135deg, #FFB800, #FF3C50); transition: opacity 0.2s; }
  .btn-vip:hover { opacity: 0.88; }

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
const features = [
  {
    icon: "BookOpen", iconStyle: "icon-accent", iconColor: "text-indigo-300",
    title: "Обучение и база знаний",
    desc: "Структурированные материалы — от основ до продвинутых стратегий",
    href: null,
  },
  {
    icon: "TrendingUp", iconStyle: "icon-accent", iconColor: "text-indigo-300",
    title: "Аналитика и торговые идеи",
    desc: "Разборы рынка, точки входа и актуальные сделки от практикующего трейдера",
    href: null,
  },
  {
    icon: "Users", iconStyle: "icon-accent", iconColor: "text-indigo-300",
    title: "Комьюнити трейдеров",
    desc: "Живое общение, разборы сделок и поддержка единомышленников в Telegram",
    href: null,
  },
  {
    icon: "Crown", iconStyle: "icon-accent", iconColor: "text-indigo-300",
    title: "VIP‑формат",
    desc: "Закрытый канал с персональными идеями, точным входом и сопровождением",
    href: null,
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

const avatars = [
  { initials: "НО", label: "Новичок — осваивает рынок с нуля" },
  { initials: "АТ", label: "Активный трейдер — ищет точные идеи" },
  { initials: "ИП", label: "Инвестор — пассивный подход и надёжность" },
  { initials: "ФС", label: "Фрилансер — диверсифицирует доходы" },
]

const vipBullets = [
  { icon: "Zap",           text: "Торговые идеи несколько раз в неделю — конкретные, с точкой входа и стопом" },
  { icon: "BarChart2",     text: "Акции, фьючерсы, крипто — широкий охват рынков" },
  { icon: "Shield",        text: "Жёсткий риск‑менеджмент: никакой «ставки всё»" },
  { icon: "MessageCircle", text: "Разборы сделок и обратная связь в закрытом чате" },
  { icon: "Lock",          text: "Доступ через закрытый Telegram‑канал и веб‑приложение VIP‑клуба" },
]

const faq = [
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

// ─── Хелпер плавного скролла ─────────────────────────────────────────────────
function scrollTo(anchor: string) {
  const el = document.getElementById(anchor)
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
}

// ─── Компонент ────────────────────────────────────────────────────────────────
export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeAnchor, setActiveAnchor] = useState<string>("")
  const [navSticky, setNavSticky] = useState(false)

  // Следим за скроллом — подсвечиваем активный раздел
  useEffect(() => {
    const anchors = NAV_ITEMS.map(n => n.anchor)
    const onScroll = () => {
      setNavSticky(window.scrollY > 60)
      for (let i = anchors.length - 1; i >= 0; i--) {
        const el = document.getElementById(anchors[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveAnchor(anchors[i])
          return
        }
      }
      setActiveAnchor("")
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <main
      className="min-h-screen text-white"
      style={{ background: "radial-gradient(ellipse at 50% 0%, #1a1a4e 0%, #0D0E2C 50%, #070712 100%)" }}
    >
      <style>{backgroundStyle}</style>
      <div className="bg-pattern" />
      <div className="content">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section id="about" className="flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 max-w-2xl mx-auto">
          <div className="mb-8 flex items-center gap-3">
            <img src={LOGO_URL} alt="RTrader логотип" className="logo-img" />
            <div className="text-left">
              <div className="text-2xl font-extrabold tracking-tight leading-none">
                R<span style={{ color: "#FFB800" }}>Trade</span>R
              </div>
              <div className="text-xs text-gray-400 tracking-widest uppercase">Investing</div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 leading-tight">
            Торгуй осознанно.<br />
            <span className="gradient-text">Расти вместе с рынком.</span>
          </h1>

          <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
            RTrader — онлайн‑платформа для тех, кто хочет понимать рынок, не просто получать точные торговые идеи,
            но по‑настоящему развиваться в трейдинге и участвовать в турнирах без реального риска.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-xl"
            >
              <Icon name="Send" size={18} />
              В Telegram‑канал
            </a>
            <a
              href={LINKS.vipApp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-vip flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-xl"
            >
              <Icon name="Crown" size={18} />
              VIP‑подписка
            </a>
          </div>

          <div className="flex items-center justify-center mt-10">
            <div className="flex -space-x-2 mr-4">
              <div className="avatar-ring"><Avatar initials="АК" index={0} /></div>
              <div className="avatar-ring"><Avatar initials="МП" index={1} /></div>
              <div className="avatar-ring"><Avatar initials="ЕС" index={2} /></div>
            </div>
            <p className="text-gray-300 font-medium">2 500+ трейдеров уже внутри</p>
          </div>
        </section>

        {/* ── НАВИГАЦИЯ ────────────────────────────────────────────────────── */}
        <div
          className={`nav-bar w-full py-2 transition-all duration-300 ${navSticky ? "sticky top-0" : ""}`}
          style={{ zIndex: 50 }}
        >
          <div className="nav-scroll flex items-center gap-1 px-4 max-w-3xl mx-auto">
            {NAV_ITEMS.map(item => (
              <button
                key={item.anchor}
                className={`nav-pill ${activeAnchor === item.anchor ? "active" : ""}`}
                onClick={() => scrollTo(item.anchor)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── КОМУ ПОДОЙДЁТ ────────────────────────────────────────────────── */}
        <section id="for-whom" className="px-6 py-14 max-w-3xl mx-auto" style={{ scrollMarginTop: "60px" }}>
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-100">Кому подойдёт RTrader</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {avatars.map((a, i) => (
              <div key={i} className="card-glass rounded-2xl p-5 flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)" }}
                >
                  {a.initials}
                </div>
                <p className="text-gray-300 text-sm leading-snug">{a.label}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="section-divider border max-w-3xl mx-auto" />

        {/* ── ЧТО ВНУТРИ ───────────────────────────────────────────────────── */}
        <section id="inside" className="px-6 py-14 max-w-3xl mx-auto" style={{ scrollMarginTop: "60px" }}>
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-100">Что внутри RTrader</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f, i) => {
              const inner = (
                <div className="flex gap-4">
                  <div className={`w-10 h-10 rounded-xl ${f.iconStyle} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={f.icon} fallback="Star" size={20} className={f.iconColor} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1 flex items-center gap-1">
                      {f.title}
                      {f.href && <Icon name="ArrowUpRight" size={13} className="opacity-40 mt-px" />}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              )
              return f.href ? (
                <a
                  key={i}
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-glass rounded-2xl p-6 block"
                  style={{ textDecoration: "none" }}
                >
                  {inner}
                </a>
              ) : (
                <div key={i} className="card-glass rounded-2xl p-6">{inner}</div>
              )
            })}
          </div>
        </section>

        <hr className="section-divider border max-w-3xl mx-auto" />

        {/* ── VIP ──────────────────────────────────────────────────────────── */}
        <section id="vip" className="px-6 py-14 max-w-2xl mx-auto text-center" style={{ scrollMarginTop: "60px" }}>
          <div
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(255,184,0,0.12)", border: "1px solid rgba(255,184,0,0.25)", color: "#FFB800" }}
          >
            <Icon name="Crown" size={14} />
            VIP‑подписка
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Торговые идеи, которым можно доверять</h2>
          <p className="text-gray-400 mb-8 text-sm">
            Закрытый канал с конкретными сделками, точными входами и жёстким риск‑менеджментом.
          </p>
          <div className="vip-card rounded-2xl p-6 text-left mb-8 space-y-4">
            {vipBullets.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(255,184,0,0.15)", border: "1px solid rgba(255,184,0,0.2)" }}
                >
                  <Icon name={b.icon} fallback="Star" size={16} style={{ color: "#FFB800" }} />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
          <a
            href={LINKS.vipApp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-vip inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-xl"
          >
            <Icon name="Crown" size={18} />
            Перейти в VIP‑приложение
          </a>
        </section>

        <hr className="section-divider border max-w-3xl mx-auto" />

        {/* ── КОНКУРСЫ И ТУРНИРЫ ───────────────────────────────────────────── */}
        <section id="tournaments" className="px-6 py-14 max-w-2xl mx-auto text-center" style={{ scrollMarginTop: "60px" }}>
          <div
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.25)", color: "#a855f7" }}
          >
            <Icon name="Trophy" size={14} />
            Конкурсы и турниры
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Соревнуйся — прокачивай навык</h2>
          <p className="text-gray-300 mb-3 text-sm leading-relaxed max-w-lg mx-auto">
            Суть турниров — виртуальная торговля с турнирной таблицей. Участники в течение месяца ведут выбранный актив на{" "}
            <strong className="text-white">демо‑счёте</strong>, соревнуются по доходности, поднимаются в рейтинге и тренируются{" "}
            <strong className="text-white">без риска для реальных денег</strong>.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Идеально для тех, кто хочет набрать опыт и уверенность перед торговлей реальными деньгами.
          </p>
          <a
            href={LINKS.tournaments}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
            style={{ border: "1px solid rgba(168,85,247,0.35)", background: "rgba(168,85,247,0.08)" }}
          >
            <Icon name="Trophy" size={18} />
            Смотреть турниры
          </a>
        </section>

        <hr className="section-divider border max-w-3xl mx-auto" />

        {/* ── ОБ АВТОРЕ ────────────────────────────────────────────────────── */}
        <section id="author" className="px-6 py-14 max-w-2xl mx-auto" style={{ scrollMarginTop: "60px" }}>
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-100">Об авторе</h2>
          <div className="card-glass rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-8">
            <img
              src={LOGO_URL}
              alt="RTrader автор"
              className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              style={{ border: "2px solid rgba(255,184,0,0.3)" }}
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold mb-1">@zeryansky7</h3>
              <p className="text-sm mb-4" style={{ color: "#FFB800" }}>Практикующий трейдер · Автор RTrader</p>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Icon name="Calendar" size={15} className="text-gray-500" />
                  Опыт в трейдинге — более 7 лет
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Icon name="BarChart2" size={15} className="text-gray-500" />
                  Рынки: акции, фьючерсы, криптовалюта
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Icon name="Target" size={15} className="text-gray-500" />
                  Стиль: свинг‑трейдинг с техническим анализом
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Icon name="Users" size={15} className="text-gray-500" />
                  Обучил более 500 трейдеров
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="section-divider border max-w-3xl mx-auto" />

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section id="faq" className="px-6 py-14 max-w-2xl mx-auto" style={{ scrollMarginTop: "60px" }}>
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-100">Частые вопросы</h2>
          <div className="space-y-0">
            {faq.map((item, i) => (
              <div key={i} className="faq-item py-4">
                <button
                  className="w-full text-left flex items-center justify-between gap-4 group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-gray-100 group-hover:text-white transition-colors">
                    {item.q}
                  </span>
                  <Icon
                    name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                    size={18}
                    className="text-gray-500 flex-shrink-0"
                  />
                </button>
                {openFaq === i && (
                  <p className="mt-3 text-gray-400 text-sm leading-relaxed">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <hr className="section-divider border max-w-3xl mx-auto" />

        {/* ── FOOTER ───────────────────────────────────────────────────────── */}
        <footer className="px-6 py-10 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={LOGO_URL} alt="RTrader" className="w-8 h-8 rounded-lg object-cover" />
            <div className="text-left leading-none">
              <div className="font-extrabold text-sm">
                R<span style={{ color: "#FFB800" }}>Trade</span>R
              </div>
              <div className="text-xs text-gray-500 tracking-widest uppercase">Investing</div>
            </div>
          </div>

          <p className="text-gray-500 text-sm mb-6">Торгуй осознанно. Расти вместе с рынком.</p>

          <div className="flex justify-center gap-5 mb-6 flex-wrap">
            <SocialIcon
              href={LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram-канал"
              icon={<Icon name="Send" size={20} className="text-gray-400 hover:text-white transition-colors" />}
            />
            <SocialIcon
              href={LINKS.vk}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VK"
              icon={<Icon name="Users" size={20} className="text-gray-400 hover:text-white transition-colors" />}
            />
            <SocialIcon
              href={LINKS.rutube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="RUTUBE"
              icon={<Icon name="Play" size={20} className="text-gray-400 hover:text-white transition-colors" />}
            />
            <SocialIcon
              href={LINKS.tpulse}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Т-пульс"
              icon={<Icon name="TrendingUp" size={20} className="text-gray-400 hover:text-white transition-colors" />}
            />
          </div>

          <div className="flex justify-center gap-4 mb-4 text-sm flex-wrap">
            <a href={LINKS.chat} target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors">Чат</a>
            <a href={LINKS.reviews} target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors">Отзывы</a>
            <a href={LINKS.knowledge} target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors">База знаний</a>
            <a href={LINKS.reflections} target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors">Рефлексии трейдера</a>
          </div>

          <p className="text-gray-700 text-xs mb-2">
            Информация в канале не является индивидуальной инвестиционной рекомендацией.
          </p>
          <p className="text-gray-600 text-xs">© 2025 RTrader · Все права защищены</p>
        </footer>

      </div>
      <Toaster />
    </main>
  )
}
