import { Toaster } from "@/components/ui/toaster"
import { backgroundStyle } from "@/landing/constants"
import HeroNav from "@/landing/HeroNav"
import Sections from "@/landing/Sections"
import FaqFooter from "@/landing/FaqFooter"

export default function Index() {
  return (
    <main
      className="min-h-screen text-white"
      style={{ background: "radial-gradient(ellipse at 50% 0%, #1a1a4e 0%, #0D0E2C 50%, #070712 100%)" }}
    >
      <style>{backgroundStyle}</style>
      <div className="bg-pattern" />
      <div className="content">
        <HeroNav />
        <Sections />
        <hr className="section-divider border max-w-3xl mx-auto" />
        <FaqFooter />
      </div>
      <Toaster />
    </main>
  )
}
