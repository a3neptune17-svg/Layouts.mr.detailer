import { LayoutSwitcher } from "@/components/layout-switcher"
import { OhioLeftRail } from "@/components/ohio/ohio-left-rail"

// 01. HERO
import { OhioHero } from "@/components/ohio/ohio-hero"

// 02. SERVICE ECOSYSTEM
import { OhioEcosystem } from "@/components/ohio/ohio-ecosystem"

// 03. DETAILED SERVICES / PROTECTION
import { OhioProtection } from "@/components/ohio/ohio-protection"

// 04. NAMEX STUDIO
import { OhioNamex } from "@/components/ohio/ohio-namex"

// 05. DETAILING PACKAGES
import { OhioPackages } from "@/components/ohio/ohio-packages"

// 06. SHOP SHOWCASE
import { OhioShop } from "@/components/ohio/ohio-shop"

// 07. GALLERY / OUR WORK
import { OhioGallery } from "@/components/ohio/ohio-gallery"

// 08. ABOUT MR. DETAILER
import { OhioAbout } from "@/components/ohio/ohio-about"

// 09. WARRANTY
import { OhioWarranty } from "@/components/ohio/ohio-warranty"

// 10. FRANCHISE
import { OhioFranchise } from "@/components/ohio/ohio-franchise"

// 11. BLOG / INSIGHTS
import { OhioBlog } from "@/components/ohio/ohio-blog"

// 12. BOOK AN APPOINTMENT & CONTACT
import { OhioContact } from "@/components/ohio/ohio-contact"

// 13. FOOTER
import { OhioFooter } from "@/components/ohio/ohio-footer"

export const metadata = {
  title: "Ohio Layout | Digital Studio Concept | Mr. Detailer Studio",
  description: "Refined Ohio digital studio layout for Mr. Detailer Studio featuring persistent left rail navigation, compact asymmetric grids, acid lime accents, and visual storytelling.",
}

export default function OhioPage() {
  return (
    <div id="top" className="min-h-screen bg-[#0E0E0E] text-white font-sans selection:bg-[#E5FCA0] selection:text-black overflow-x-hidden">
      {/* Top Concept Switcher Bar */}
      <LayoutSwitcher />

      {/* Persistent Left Rail Navigation (Desktop Sidebar, Mobile Full-Screen Overlay Nav) */}
      <OhioLeftRail />

      {/* Main Content Canvas (Full width — hero video and section backgrounds span behind the transparent left rail) */}
      <main className="w-full min-h-screen flex flex-col justify-between overflow-x-hidden">
        {/* 01. HERO */}
        <OhioHero />

        {/* 02. SERVICE ECOSYSTEM */}
        <OhioEcosystem />

        {/* 03. DETAILED SERVICES */}
        <OhioProtection />

        {/* 04. NAMEX STUDIO */}
        <OhioNamex />

        {/* 05. DETAILING PACKAGES */}
        <OhioPackages />

        {/* 06. SHOP SHOWCASE */}
        <OhioShop />

        {/* 07. GALLERY / OUR WORK */}
        <OhioGallery />

        {/* 08. ABOUT MR. DETAILER */}
        <OhioAbout />

        {/* 09. WARRANTY */}
        <OhioWarranty />

        {/* 10. FRANCHISE */}
        <OhioFranchise />

        {/* 11. BLOG / INSIGHTS */}
        <OhioBlog />

        {/* 12. BOOK AN APPOINTMENT & CONTACT */}
        <OhioContact />

        {/* 13. FOOTER */}
        <OhioFooter />
      </main>
    </div>
  )
}
