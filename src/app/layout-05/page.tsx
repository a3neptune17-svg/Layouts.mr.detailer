import { LayoutSwitcher } from "@/components/layout-switcher"
import { Navbar05 } from "@/components/layout-05/navbar-05"
import { Hero05 } from "@/components/layout-05/hero-05"
import { Services05 } from "@/components/layout-05/services-05"
import { Process05 } from "@/components/layout-05/process-05"
import { Blog05 } from "@/components/layout-05/blog-05"
import { GalleryShowcase } from "@/components/gallery-showcase"
import { Ratings05 } from "@/components/layout-05/ratings-05"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Layout 05 - Modern Executive Grid | Mr. Detailer",
  description: "Executive service grid layout with executive control column sidebar, filterable catalog, and dark luxury aesthetic.",
}

export default function Layout05Page() {
  return (
    <div id="top" className="min-h-screen bg-[#090B0E] text-white font-sans selection:bg-brand selection:text-brand-foreground pb-16 md:pb-0">
      <LayoutSwitcher />
      <Navbar05 />
      <div className="lg:pl-64 transition-all duration-300">
        <Hero05 />
        <Services05 />
        <Process05 />
        <Blog05 />
        <GalleryShowcase />
        <Ratings05 />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}
