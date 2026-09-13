import { LayoutSwitcher } from "@/components/layout-switcher"
import { Navbar04 } from "@/components/layout-04/navbar-04"
import { Hero04 } from "@/components/layout-04/hero-04"
import { Services04 } from "@/components/layout-04/services-04"
import { Process04 } from "@/components/layout-04/process-04"
import { Blog04 } from "@/components/layout-04/blog-04"
import { GalleryShowcase } from "@/components/gallery-showcase"
import { Ratings04 } from "@/components/layout-04/ratings-04"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Layout 04 - Cyber Bento & Video Reel | Mr. Detailer",
  description: "High-impact modern luxury dark mode layout with cyber sidebar navigation and interactive video process reel.",
}

export default function Layout04Page() {
  return (
    <div id="top" className="min-h-screen bg-black text-white font-sans selection:bg-brand selection:text-brand-foreground">
      <LayoutSwitcher />
      <Navbar04 />
      <div className="lg:pl-64 transition-all duration-300">
        <Hero04 />
        <Services04 />
        <Process04 />
        <Blog04 />
        <GalleryShowcase />
        <Ratings04 />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}
