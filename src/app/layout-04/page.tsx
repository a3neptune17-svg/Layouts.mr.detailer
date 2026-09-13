import { LayoutSwitcher } from "@/components/layout-switcher"
import { Navbar04 } from "@/components/layout-04/navbar-04"
import { Hero04 } from "@/components/layout-04/hero-04"
import { Services04 } from "@/components/layout-04/services-04"
import { Process04 } from "@/components/layout-04/process-04"
import { GallerySection } from "@/components/gallery-section"
import { PricingSection } from "@/components/pricing-section"
import { BrandsSection } from "@/components/brands-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Layout 04 - Visual Storytelling & Video Reel | Mr. Detailer",
  description: "High-impact modern luxury dark mode layout with interactive video process reel and direct service matrix.",
}

export default function Layout04Page() {
  return (
    <div id="top" className="min-h-screen bg-black text-white font-sans selection:bg-brand selection:text-brand-foreground">
      <LayoutSwitcher />
      <Navbar04 />
      <Hero04 />
      <Services04 />
      <Process04 />
      <div className="bg-neutral-950 py-10 border-t border-b border-white/10">
        <GallerySection />
      </div>
      <PricingSection />
      <section id="partners" className="py-8 bg-black border-b border-white/10">
        <BrandsSection />
      </section>
      <ContactSection />
      <Footer />
    </div>
  )
}
