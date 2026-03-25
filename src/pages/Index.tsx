import { useState } from "react"
import { Toaster } from "@/components/ui/toaster"
import { Avatar } from "@/components/Avatar"
import { SocialIcon } from "@/components/SocialIcon"
import Icon from "@/components/ui/icon"

const backgroundStyle = `
  .bg-pattern {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
      linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 20px 20px;
    pointer-events: none;
    z-index: 1;
  }
  .content {
    position: relative;
    z-index: 2;
  }
  .section-divider {
    border-color: rgba(255,255,255,0.08);
  }
  .card-glass {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
  }
  .vip-card {
    background: linear-gradient(135deg, rgba(234,179,8,0.12), rgba(234,179,8,0.04));
    border: 1px solid rgba(234,179,8,0.25);
  }
  .faq-item {
    border-bottom: 1px solid rgba(255,255,255,0.06);
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
  { q: "Как связаться с автором?", a: "Напишите в Telegram‑чат или на email. Ссылки в подвале страницы." },
]

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main
      className="min-h-screen text-white"
      style={{ background: "radial-gradient(ellipse at top, #1e3a8a 0%, #000000 60%)" }}
    >
      <style>{backgroundStyle}</style>
      <div className="bg-pattern"></div>
      <div className="content">

        {/* HERO */}
        <section className="flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 max-w-2xl mx-auto">
          {/* Logo */}
          <div className="mb-6 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
              <Icon name="TrendingUp" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight">RTrader</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5 bg-clip-text text-transparent bg-gradient-to-br from-gray-100 to-gray-400 leading-tight">
            Торгуй осознанно.<br />Расти вместе с рынком.
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-xl">
            RTrader — хаб для тех, кто хочет понимать рынок, получать точные торговые идеи и развиваться в трейдинге. Бесплатный Telegram‑канал и VIP‑подписка для серьёзного результата.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="https://t.me/RTrader11"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
            >
              <Icon name="Send" size={18} />
              В Telegram‑канал
            </a>
            <a
              href="https://web-app-hosting--preview.poehali.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-200"
            >
              <Icon name="Crown" size={18} />
              VIP‑подписка
            </a>
          </div>

          {/* Avatars counter */}
          <div className="flex items-center justify-center mt-10">
            <div className="flex -space-x-2 mr-4">
              <Avatar initials="АК" index={0} />
              <Avatar initials="МП" index={1} />
              <Avatar initials="ЕС" index={2} />
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
                <div className="w-11 h-11 rounded-full bg-blue-700/60 flex items-center justify-center font-bold text-sm flex-shrink-0">
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
                <div className="w-10 h-10 rounded-xl bg-blue-600/30 flex items-center justify-center flex-shrink-0">
                  <Icon name={f.icon} fallback="Star" size={20} className="text-blue-400" />
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
          <div className="inline-flex items-center gap-2 bg-yellow-500/15 border border-yellow-500/30 text-yellow-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <Icon name="Crown" size={14} />
            VIP‑подписка
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Торговые идеи, которым можно доверять</h2>
          <p className="text-gray-400 mb-8 text-sm">Закрытый канал с конкретными сделками, точными входами и жёстким риск‑менеджментом.</p>
          <div className="vip-card rounded-2xl p-6 text-left mb-8 space-y-4">
            {vipBullets.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon name={b.icon} fallback="Star" size={16} className="text-yellow-400" />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
          <a
            href="https://web-app-hosting--preview.poehali.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-xl transition-all duration-200"
          >
            <Icon name="Crown" size={18} />
            Перейти в VIP‑приложение
          </a>
        </section>

        <hr className="section-divider border max-w-3xl mx-auto" />

        {/* TOURNAMENTS */}
        <section className="px-6 py-14 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-500/15 border border-purple-500/30 text-purple-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
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
            className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
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
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center text-2xl font-bold flex-shrink-0">
              RT
            </div>
            <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold mb-1">@zeryansky7</h3>
              <p className="text-blue-400 text-sm mb-4">Практикующий трейдер · Автор RTrader</p>
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
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Icon name="TrendingUp" size={16} className="text-white" />
            </div>
            <span className="font-bold">RTrader</span>
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