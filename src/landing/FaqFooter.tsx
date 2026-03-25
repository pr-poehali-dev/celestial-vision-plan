import { useState } from "react"
import { SocialIcon } from "@/components/SocialIcon"
import Icon from "@/components/ui/icon"
import { LINKS, LOGO_URL, faq } from "./constants"

export default function FaqFooter() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
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
    </>
  )
}
