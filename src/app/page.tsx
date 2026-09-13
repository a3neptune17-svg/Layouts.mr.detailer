import { LayoutSwitcher } from "@/components/layout-switcher"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSteps } from "@/components/process-steps"
import { SectionHeading } from "@/components/section-heading"
import { BlogSection } from "@/components/blog-section"
import { GalleryShowcase } from "@/components/gallery-showcase"
import { RatingsSection } from "@/components/ratings-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col bg-[#0B0D0A]">
      <LayoutSwitcher />
      <Navbar />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Services */}
      <ServicesSection />

      {/* 3. How We Work (Process) */}
      <section id="process" className="relative overflow-hidden bg-secondary/60 py-10 md:py-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 bottom-0 size-72 rounded-full bg-brand/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-6 lg:pl-24">
          <SectionHeading
            eyebrow="Process"
            title="How We Work"
            className="max-w-xl"
          />
          <ProcessSteps />
        </div>
      </section>

      {/* 4. Blog */}
      <BlogSection />

      {/* 5. Gallery */}
      <GalleryShowcase />

      {/* 6. Ratings */}
      <RatingsSection />

      {/* 7. Finished */}
      <ContactSection />
      <Footer />
    </div>
  )
}
