import { LayoutSwitcher } from "@/components/layout-switcher"
import { Navbar01 } from "@/components/layout-01/navbar-01"
import { Hero01 } from "@/components/layout-01/hero-01"
import { Services01 } from "@/components/layout-01/services-01"
import { Process01 } from "@/components/layout-01/process-01"
import { PricingSection } from "@/components/pricing-section"
import { GallerySection } from "@/components/gallery-section"
import { BrandsSection } from "@/components/brands-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Layout 01 - Service-First Essential | Mr. Detailer",
  description: "Customer-focused layout with immediate service discovery and interactive video process.",
}

export default function Layout01Page() {
  return (
    <div id="top" className="min-h-screen bg-[#0B0D0A] text-white font-sans selection:bg-brand selection:text-brand-foreground">
      <LayoutSwitcher />
      <Navbar01 />
      <Hero01 />
      <Services01 />
      <Process01 />
      <PricingSection />
      <GallerySection />
      <section id="partners" className="py-8 bg-[#0F120E] border-t border-b border-white/10">
        <BrandsSection />
      </section>
      <ContactSection />
      <Footer />
    </div>
  )
}

