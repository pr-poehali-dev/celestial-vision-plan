import { useState } from "react"
import { Toaster } from "@/components/ui/toaster"
import { Avatar } from "@/components/Avatar"
import { SocialIcon } from "@/components/SocialIcon"
import Icon from "@/components/ui/icon"

const LOGO_URL = "https://cdn.poehali.dev/files/a5faa196-2609-46d4-ab06-89def373abec.jpg"

const backgroundStyle = `
  .bg-pattern {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
      linear-gradient(to right, rgba(255,255,255,0.015) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.015) 1px, transparent 1px);
    background-size: 28px 28px;
    pointer-events: none;
    z-index: 1;
  }
  .content {
    position: relative;
    z-index: 2;
  }
  .section-divider {
    border-color: rgba(255,255,255,0.06);
  }
  .card-glass {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.07);
    backdrop-filter: blur(4px);
  }
  .vip-card {
    background: linear-gradient(135deg, rgba(255,180,0,0.1), rgba(255,60,80,0.06));
    border: 1px solid rgba(255,180,0,0.2);
  }
  .faq-item {
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .btn-primary {
    background: linear-gradient(135deg, #3b82f6, #6366f1);
    transition: opacity 0.2s;
  }
  .btn-primary:hover { opacity: 0.88; }
  .btn-vip {
    background: linear-gradient(135deg, #FFB800, #FF3C50);
    transition: opacity 0.2s;
  }
  .btn-vip:hover { opacity: 0.88; }
  .gradient-text {
    background: linear-gradient(135deg, #FFB800, #FF3C50, #a855f7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .icon-accent {
    background: linear-gradient(135deg, rgba(59,130,246,0.25), rgba(99,102,241,0.15));
    border: 1px solid rgba(99,102,241,0.2);
  }
  .avatar-ring {
    border: 2px solid rgba(255,184,0,0.4);
  }
  .logo-img {
    width: 56px;
    height: 56px;
    border-radius: 14px;
    object-fit: cover;
  }
`

const features = [
  { icon: "BookOpen", title: "Обучение и база знаний", desc: "Структурированные материалы — от основ до продвинутых стратегий" },
  { icon: "TrendingUp", title: "Аналитика и торговые идеи", desc: "Разборы рынка, точки входа и актуальные сделки от практикующего трейдера" },
  { icon: "Users", title: "Комьюнити трейдеров", desc: "Живое общение, разборы сделок и поддержка единомышленников в Telegram" },
  { icon: "Crown", title: "VIP‑формат", desc: "Закрытый канал с персональными идеями, точным входом и сопровождением" },
]

const avatars = [
  { initials: "НО", label: "Новичок — осваивает рынок с нуля" },
  { initials: "АТ", label: "Активный трейдер — ищет точные идеи" },
  { initials: "ИП", label: "Инвестор — пассивный подход и надёжность" },
  { initials: "ФС", label: "Фрилансер — диверсифицирует доходы" },
]

const vipBullets = [
  { icon: "Zap", text: "Торговые идеи несколько раз в неделю — конкретные, с точкой входа и стопом" },
  { icon: "BarChart2", text: "Акции, фьючерсы, крипто — широкий охват рынков" },
  { icon: "Shield", text: "Жёсткий риск‑менеджмент: никакой «ставки всё»" },
  { icon: "MessageCircle", text: "Разборы сделок и обратная связь в закрытом чате" },
]

const faq = [
  { q: "Что такое RTrader?", a: "RTrader — образовательный хаб и сообщество для трейдеров. Здесь аналитика, обучение, конкурсы и VIP‑подписка с персональными торговыми идеями." },
  { q: "Чем VIP отличается от бесплатного канала?", a: "В VIP — конкретные сделки с точками входа/выхода, стоп‑лоссами и сопровождением. Бесплатный канал — общая аналитика и обучающие материалы." },
  { q: "Что такое конкурсы и турниры?", a: "Соревнования на демо‑счёте: участники ведут реальные активы и соревнуются по доходности. Хороший способ прокачать навыки без риска." },
  { q: "Я новичок. Мне подойдёт?", a: "Да! Для новичков есть база знаний и структурированное обучение. Поддержка комьюнити помогает не потеряться на старте." },
  { q: "Как связаться с автором?", a: "Напишите в Telegram‑чат (@zeryansky7) или в комьюнити-чат. Ссылки в подвале страницы." },
]

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main
      className="min-h-screen text-white"
      style={{ background: "radial-gradient(ellipse at 50% 0%, #1a1a4e 0%, #0D0E2C 50%, #070712 100%)" }}
    >
      <style>{backgroundStyle}</style>
      <div className="bg-pattern"></div>
      <div className="content">

        {/* HERO */}
        <section className="flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 max-w-2xl mx-auto">
          {/* Logo */}
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
          <p className="text-lg text-gray-300 mb-10 max-w-xl">
            RTrader — хаб для тех, кто хочет понимать рынок, получать точные торговые идеи и развиваться в трейдинге. Бесплатный Telegram‑канал и VIP‑подписка для серьёзного результата.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="https://t.me/RTrader11"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-xl"
            >
              <Icon name="Send" size={18} />
              В Telegram‑канал
            </a>
            <a
              href="https://web-app-hosting--preview.poehali.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-vip flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-xl"
            >
              <Icon name="Crown" size={18} />
              VIP‑подписка
            </a>
          </div>

          {/* Avatars counter */}
          <div className="flex items-center justify-center mt-10">
            <div className="flex -space-x-2 mr-4">
              <div className="avatar-ring rounded-full"><Avatar initials="АК" index={0} /></div>
              <div className="avatar-ring rounded-full"><Avatar initials="МП" index={1} /></div>
              <div className="avatar-ring rounded-full"><Avatar initials="ЕС" index={2} /></div>
            </div>
            <p className="text-gray-300 font-medium">1 200+ трейдеров уже внутри</p>
          </div>
        </section>

        {/* WHO IS IT FOR */}
        <section className="px-6 py-14 max-w-3xl mx-auto">
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

        {/* WHAT'S INSIDE */}
        <section className="px-6 py-14 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-100">Что внутри RTrader</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div key={i} className="card-glass rounded-2xl p-6 flex gap-4">
                <div className="w-10 h-10 rounded-xl icon-accent flex items-center justify-center flex-shrink-0">
                  <Icon name={f.icon} fallback="Star" size={20} className="text-indigo-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="section-divider border max-w-3xl mx-auto" />

        {/* VIP */}
        <section className="px-6 py-14 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(255,184,0,0.12)", border: "1px solid rgba(255,184,0,0.25)", color: "#FFB800" }}>
            <Icon name="Crown" size={14} />
            VIP‑подписка
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Торговые идеи, которым можно доверять</h2>
          <p className="text-gray-400 mb-8 text-sm">Закрытый канал с конкретными сделками, точными входами и жёстким риск‑менеджментом.</p>
          <div className="vip-card rounded-2xl p-6 text-left mb-8 space-y-4">
            {vipBullets.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(255,184,0,0.15)", border: "1px solid rgba(255,184,0,0.2)" }}>
                  <Icon name={b.icon} fallback="Star" size={16} style={{ color: "#FFB800" }} />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
          <a
            href="https://web-app-hosting--preview.poehali.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-vip inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-xl"
          >
            <Icon name="Crown" size={18} />
            Перейти в VIP‑приложение
          </a>
        </section>

        <hr className="section-divider border max-w-3xl mx-auto" />

        {/* TOURNAMENTS */}
        <section className="px-6 py-14 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.25)", color: "#a855f7" }}>
            <Icon name="Trophy" size={14} />
            Конкурсы и турниры
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Соревнуйся — прокачивай навык</h2>
          <p className="text-gray-300 mb-3 text-sm leading-relaxed max-w-lg mx-auto">
            Участники ведут реальные активы на демо‑счёте и соревнуются по доходности. Никакого реального риска — только практика, азарт и рейтинг.
          </p>
          <p className="text-gray-500 text-sm mb-8">Идеально для тех, кто хочет набрать опыт перед торговлей реальными деньгами.</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
            style={{ border: "1px solid rgba(168,85,247,0.35)", background: "rgba(168,85,247,0.08)" }}
          >
            <Icon name="Trophy" size={18} />
            Смотреть турниры
          </a>
        </section>

        <hr className="section-divider border max-w-3xl mx-auto" />

        {/* AUTHOR */}
        <section className="px-6 py-14 max-w-2xl mx-auto">
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

        {/* FAQ */}
        <section className="px-6 py-14 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-100">Частые вопросы</h2>
          <div className="space-y-0">
            {faq.map((item, i) => (
              <div key={i} className="faq-item py-4">
                <button
                  className="w-full text-left flex items-center justify-between gap-4 group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-gray-100 group-hover:text-white transition-colors">{item.q}</span>
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

        {/* FOOTER */}
        <footer className="px-6 py-10 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={LOGO_URL} alt="RTrader" className="w-8 h-8 rounded-lg object-cover" />
            <div className="text-left leading-none">
              <div className="font-extrabold text-sm">R<span style={{ color: "#FFB800" }}>Trade</span>R</div>
              <div className="text-xs text-gray-500 tracking-widest uppercase">Investing</div>
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-6">Торгуй осознанно. Расти вместе с рынком.</p>
          <div className="flex justify-center gap-5 mb-4 flex-wrap">
            <SocialIcon
              href="https://t.me/RTrader11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram-канал"
              icon={<Icon name="Send" size={20} className="text-gray-400 hover:text-white transition-colors" />}
            />
            <SocialIcon
              href="https://vk.com/RTrader11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VK"
              icon={<Icon name="Users" size={20} className="text-gray-400 hover:text-white transition-colors" />}
            />
            <SocialIcon
              href="https://rutube.ru/channel/71487062"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="RUTUBE"
              icon={<Icon name="Play" size={20} className="text-gray-400 hover:text-white transition-colors" />}
            />
            <SocialIcon
              href="https://www.tbank.ru/invest/social/profile/RTrader11/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Т-пульс"
              icon={<Icon name="TrendingUp" size={20} className="text-gray-400 hover:text-white transition-colors" />}
            />
          </div>
          <div className="flex justify-center gap-4 mb-4 text-sm">
            <a href="https://t.me/+We1CNiMHWOYxOWQy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300 transition-colors">Чат</a>
            <a href="https://t.me/RTraderReviews" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300 transition-colors">Отзывы</a>
            <a href="https://t.me/+oph99Gpiy_FmYjUy" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300 transition-colors">База знаний</a>
          </div>
          <p className="text-gray-700 text-xs mb-2">Информация в канале не является индивидуальной инвестиционной рекомендацией.</p>
          <p className="text-gray-600 text-xs">© 2025 RTrader · Все права защищены</p>
        </footer>

      </div>
      <Toaster />
    </main>
  )
}
