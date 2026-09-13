import { LayoutSwitcher } from "@/components/layout-switcher"
import { Navbar05 } from "@/components/layout-05/navbar-05"
import { Hero05 } from "@/components/layout-05/hero-05"
import { Services05 } from "@/components/layout-05/services-05"
import { Process05 } from "@/components/layout-05/process-05"
import { GallerySection } from "@/components/gallery-section"
import { PricingSection } from "@/components/pricing-section"
import { BrandsSection } from "@/components/brands-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Layout 05 - Modern Executive Service Grid | Mr. Detailer",
  description: "Executive service grid layout with filterable catalog, sticky bottom mobile actions, and studio gray styling.",
}

export default function Layout05Page() {
  return (
    <div id="top" className="min-h-screen bg-[#090B0E] text-white font-sans selection:bg-brand selection:text-brand-foreground pb-16 md:pb-0">
      <LayoutSwitcher />
      <Navbar05 />
      <Hero05 />
      <Services05 />
      <Process05 />
      <PricingSection />
      <GallerySection />
      <section id="partners" className="py-8 bg-[#13161C] border-t border-b border-white/10">
        <BrandsSection />
      </section>
      <ContactSection />
      <Footer />
    </div>
  )
}

