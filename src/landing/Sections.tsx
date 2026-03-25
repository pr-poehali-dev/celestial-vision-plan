import { useEffect, useRef } from "react"
import Icon from "@/components/ui/icon"
import { LINKS, LOGO_URL, avatars, features, vipBullets } from "./constants"

function useFadeUp(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref])
}

function FadeSection({ id, className, children, style }: {
  id?: string
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLElement>(null)
  useFadeUp(ref)
  return (
    <section ref={ref} id={id} className={`fade-up ${className ?? ""}`} style={style}>
      {children}
    </section>
  )
}

export default function Sections() {
  return (
    <>
      {/* ── КОМУ ПОДОЙДЁТ ────────────────────────────────────────────────── */}
      <FadeSection id="for-whom" className="px-6 py-14 max-w-3xl mx-auto" style={{ scrollMarginTop: "60px" }}>
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
      </FadeSection>

      <hr className="section-divider border max-w-3xl mx-auto" />

      {/* ── ЧТО ВНУТРИ ───────────────────────────────────────────────────── */}
      <FadeSection id="inside" className="px-6 py-14 max-w-3xl mx-auto" style={{ scrollMarginTop: "60px" }}>
        <h2 className="text-2xl font-bold text-center mb-10 text-gray-100">Что внутри RTrader</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f, i) => {
            const inner = (
              <div className="flex gap-4">
                <div className={`card-icon w-10 h-10 rounded-xl ${f.iconStyle} flex items-center justify-center flex-shrink-0`}>
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
                className={`card-glass rounded-2xl p-6 block delay-${i + 1}`}
                style={{ textDecoration: "none" }}
              >
                {inner}
              </a>
            ) : (
              <div key={i} className={`card-glass rounded-2xl p-6 delay-${i + 1}`}>{inner}</div>
            )
          })}
        </div>
      </FadeSection>

      <hr className="section-divider border max-w-3xl mx-auto" />

      {/* ── VIP ──────────────────────────────────────────────────────────── */}
      <FadeSection id="vip" className="px-6 py-14 max-w-2xl mx-auto text-center" style={{ scrollMarginTop: "60px" }}>
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
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={LINKS.vipApp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sm-web inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-2.5 rounded-xl text-sm"
          >
            <Icon name="Monitor" size={16} />
            VIP в веб‑версии
          </a>
          <a
            href={LINKS.vipBot}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sm-tg inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-2.5 rounded-xl text-sm"
          >
            <Icon name="Send" size={16} />
            VIP в Telegram
          </a>
        </div>
      </FadeSection>

      <hr className="section-divider border max-w-3xl mx-auto" />

      {/* ── КОНКУРСЫ И ТУРНИРЫ ───────────────────────────────────────────── */}
      <FadeSection id="tournaments" className="px-6 py-14 max-w-2xl mx-auto text-center" style={{ scrollMarginTop: "60px" }}>
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
      </FadeSection>

      <hr className="section-divider border max-w-3xl mx-auto" />

      {/* ── ОБ АВТОРЕ ────────────────────────────────────────────────────── */}
      <FadeSection id="author" className="px-6 py-14 max-w-2xl mx-auto" style={{ scrollMarginTop: "60px" }}>
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
      </FadeSection>
    </>
  )
}
