"use client"

import React from "react"
import { LayoutSwitcher } from "@/components/layout-switcher"
import { Ohio3Cursor } from "./ohio-3-cursor"
import { Ohio3Header } from "./ohio-3-header"
import { Ohio3Hero } from "./ohio-3-hero"
import { Ohio3Projects } from "./ohio-3-projects"
import { Ohio3Approach } from "./ohio-3-approach"
import { Ohio3Counters } from "./ohio-3-counters"
import { Ohio3Services } from "./ohio-3-services"
import { Ohio3Testimonial } from "./ohio-3-testimonial"
import { Ohio3Blog } from "./ohio-3-blog"
import { Ohio3Contact } from "./ohio-3-contact"
import { Ohio3Footer } from "./ohio-3-footer"
import { Ohio3Popups } from "./ohio-3-popups"
import { Ohio3Controller } from "./ohio-3-controller"

export function Ohio3Shell() {
  return (
    <div className="gsxo" style={{ minHeight: "100vh", backgroundColor: "#1a1a18" }}>
      {/* Top Concept Switcher Bar */}
      <div className="ohio-layout-switcher-wrap">
        <LayoutSwitcher />
      </div>

      <div
        className="wp-singular page-template-default page page-id-228113 wp-embed-responsive wp-theme-ohio wp-child-theme-ohio-child ohio-theme-1.0.0 with-header-5 with-header-sidebar with-widget-divider with-left-mobile-hamburger with-post-type_1 with-spacer with-sticky-header with-switcher with-mobile-switcher links-underline icon-buttons-animation dark-scheme custom-cursor wpb-js-composer js-comp-ver-9.0.1 vc_responsive elementor-default elementor-kit-6 elementor-page elementor-page-228113 e--ua-blink e--ua-chrome e--ua-webkit page-is-loaded"
      >
        <div id="page" className="site">
          {/* Custom Cursor */}
          <Ohio3Cursor />

          {/* Persistent Left Rail Header / Sidebar */}
          <Ohio3Header />

          {/* Main Content Area */}
          <div id="content" className="site-content" data-mobile-menu-resolution="768">
            <div className="header-cap"></div>

            <div className="page-container -full-w">
              <div id="primary" className="content-area">
                <div className="page-content">
                  <main id="main" className="site-main">
                    <article id="post-228113" className="post-228113 page type-page status-publish hentry">
                      <div
                        className="elementor elementor-228113"
                        data-elementor-type="wp-page"
                        data-elementor-id="228113"
                        data-elementor-post-type="page"
                      >
                        {/* 01. Hero with Video background & creative stacked cards */}
                        <Ohio3Hero />

                        {/* 02. Recent Projects */}
                        <Ohio3Projects />

                        {/* 03. Approach & Process */}
                        <Ohio3Approach />

                        {/* 04. Metrics / Stats Counters */}
                        <Ohio3Counters />

                        {/* 05. Services Accordion */}
                        <Ohio3Services />

                        {/* 06. Customer Care Testimonial */}
                        <Ohio3Testimonial />

                        {/* 07. Recent News & Insights Blog */}
                        <Ohio3Blog />

                        {/* 08. Contact & Inquiry */}
                        <Ohio3Contact />
                      </div>
                    </article>
                  </main>
                </div>
              </div>
            </div>
          </div>

          {/* Footer & Big Typography Marquee */}
          <Ohio3Footer />

          {/* Interactive Lightboxes, Modals & Popups */}
          <Ohio3Popups />
        </div>
      </div>

      {/* Interactivity Controller */}
      <Ohio3Controller />
    </div>
  )
}
