import { LayoutSwitcher } from "@/components/layout-switcher"
import { Navbar01 } from "@/components/layout-01/navbar-01"
import { HeroSection } from "@/components/hero-section"
import { Services02 } from "@/components/layout-02/services-02"
import { Process04 } from "@/components/layout-04/process-04"
import { BlogSection } from "@/components/blog-section"
import { GalleryShowcase } from "@/components/gallery-showcase"
import { RatingsSection } from "@/components/ratings-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Master Layout | Mr. Detailer Studio",
  description: "Official Master Layout featuring Original Hero, Services 02, Process 04, Blog, Gallery, Ratings, and Finished Footer.",
}

export default function MasterLayoutPage() {
  return (
    <div id="top" className="min-h-screen bg-[#0B0D0A] text-white font-sans selection:bg-brand selection:text-brand-foreground">
      {/* Concept Switcher */}
      <LayoutSwitcher />

      {/* 1. Bar of Layout 01 (Original Logo) */}
      <Navbar01 />

      {/* 2. Hero Section - ORIGINAL HERO */}
      <HeroSection />

      {/* 3. Services Section - Layout 02 */}
      <Services02 />

      {/* 4. How We Work - Layout 04 */}
      <Process04 />

      {/* 5. Blog Section */}
      <BlogSection />

      {/* 6. Gallery Section */}
      <GalleryShowcase />

      {/* 7. Ratings Section */}
      <RatingsSection />

      {/* 8. Finished Section (Contact & Footer) */}
      <ContactSection />
      <Footer />
    </div>
  )
}
