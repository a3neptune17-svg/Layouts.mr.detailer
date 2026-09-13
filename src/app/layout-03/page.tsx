import { LayoutSwitcher } from "@/components/layout-switcher"
import { Navbar03 } from "@/components/layout-03/navbar-03"
import { Hero03 } from "@/components/layout-03/hero-03"
import { Services03 } from "@/components/layout-03/services-03"
import { Process03 } from "@/components/layout-03/process-03"
import { GallerySection } from "@/components/gallery-section"
import { PricingSection } from "@/components/pricing-section"
import { BrandsSection } from "@/components/brands-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Layout 03 - Seamless Flow | Mr. Detailer",
  description: "Seamless rhythmic dark and light layout with mobile floating bottom nav pill and video process reel.",
}

export default function Layout03Page() {
  return (
    <div id="top" className="min-h-screen bg-[#0A0C0E] text-white font-sans selection:bg-brand selection:text-brand-foreground pb-16 md:pb-0">
      <LayoutSwitcher />
      <Navbar03 />
      <Hero03 />
      <Services03 />
      <Process03 />
      <PricingSection />
      <GallerySection />
      <section id="partners" className="py-8 bg-[#111418] border-t border-b border-white/10">
        <BrandsSection />
      </section>
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

