import { useEffect, useState } from "react"
import { Avatar } from "@/components/Avatar"
import Icon from "@/components/ui/icon"
import { LINKS, LOGO_URL, NAV_ITEMS } from "./constants"

function scrollTo(anchor: string) {
  const el = document.getElementById(anchor)
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
}

export default function HeroNav() {
  const [activeAnchor, setActiveAnchor] = useState<string>("")
  const [navSticky, setNavSticky] = useState(false)

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
    <>
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
        className={`nav-bar w-full transition-all duration-300 ${navSticky ? "sticky top-0" : ""}`}
        style={{ zIndex: 50, paddingTop: "10px", paddingBottom: "10px" }}
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
    </>
  )
}