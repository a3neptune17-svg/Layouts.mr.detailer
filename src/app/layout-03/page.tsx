import { LayoutSwitcher } from "@/components/layout-switcher"
import { Navbar03 } from "@/components/layout-03/navbar-03"
import { Hero03 } from "@/components/layout-03/hero-03"
import { Services03 } from "@/components/layout-03/services-03"
import { Process03 } from "@/components/layout-03/process-03"
import { Blog03 } from "@/components/layout-03/blog-03"
import { GalleryShowcase } from "@/components/gallery-showcase"
import { Ratings03 } from "@/components/layout-03/ratings-03"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Layout 03 - Seamless Flow | Mr. Detailer",
  description: "Seamless rhythmic dark and light layout with sleek center-toggle sidebar navigation and video process reel.",
}

export default function Layout03Page() {
  return (
    <div id="top" className="min-h-screen bg-[#0A0C0E] text-white font-sans selection:bg-brand selection:text-brand-foreground pb-16 md:pb-0">
      <LayoutSwitcher />
      <Navbar03 />
      <div className="lg:pl-64 transition-all duration-300">
        <Hero03 />
        <Services03 />
        <Process03 />
        <Blog03 />
        <GalleryShowcase />
        <Ratings03 />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}
