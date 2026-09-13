import { LayoutSwitcher } from "@/components/layout-switcher"
import { Navbar02 } from "@/components/layout-02/navbar-02"
import { Hero02 } from "@/components/layout-02/hero-02"
import { Services02 } from "@/components/layout-02/services-02"
import { Process02 } from "@/components/layout-02/process-02"
import { BlogSection } from "@/components/blog-section"
import { GalleryShowcase } from "@/components/gallery-showcase"
import { RatingsSection } from "@/components/ratings-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Layout 02 - Dark Luxury Studio | Mr. Detailer",
  description: "Bold black-dominant layout with glowing accents, split video hero, and dark service matrix.",
}

export default function Layout02Page() {
  return (
    <div id="top" className="min-h-screen bg-black text-white font-sans selection:bg-brand selection:text-brand-foreground">
      <LayoutSwitcher />
      <Navbar02 />
      <div className="lg:pl-64 transition-all duration-300">
        <Hero02 />
        <Services02 />
        <Process02 />
        <BlogSection />
        <GalleryShowcase />
        <RatingsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}
