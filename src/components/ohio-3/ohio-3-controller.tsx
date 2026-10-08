"use client"

import React, { useEffect } from "react"

export function Ohio3Controller() {
  useEffect(() => {
    // 1. Hamburger menu & Slide-in overlay
    const openMenu = () => {
      const overlays = document.querySelectorAll(".slide-in-overlay, .hamburger-nav")
      overlays.forEach((el) => {
        el.classList.add("visible")
      })
      const hamburger = document.querySelector(".hamburger")
      if (hamburger) hamburger.classList.add("active")
    }

    const closeMenu = () => {
      const overlays = document.querySelectorAll(".slide-in-overlay, .hamburger-nav")
      overlays.forEach((el) => {
        el.classList.remove("visible")
      })
      const hamburger = document.querySelector(".hamburger")
      if (hamburger) hamburger.classList.remove("active")
    }

    const handleHamburgerClick = (e: Event) => {
      e.preventDefault()
      const overlay = document.querySelector(".slide-in-overlay")
      if (overlay && overlay.classList.contains("visible")) {
        closeMenu()
      } else {
        openMenu()
      }
    }

    const hamburgerBtns = document.querySelectorAll('[data-js="hamburger"], .hamburger, .menu-blank')
    hamburgerBtns.forEach((btn) => btn.addEventListener("click", handleHamburgerClick))

    const closeBtns = document.querySelectorAll(
      '[data-js="close-popup"], [data-js="close-hamburger-menu"], .close-bar button, .slide-in-overlay .overlay, .clb-popup.hamburger-nav .close-bar'
    )
    closeBtns.forEach((btn) => btn.addEventListener("click", closeMenu))

    // 2. Submenu accordion toggle in navigation
    const handleSubmenuClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest(".has-submenu > a")
      if (!link) return
      
      const parentLi = link.parentElement
      if (!parentLi) return

      // Toggle active
      e.preventDefault()
      const wasActive = parentLi.classList.contains("active")
      
      // Close sibling submenus on same level
      const siblings = parentLi.parentElement?.querySelectorAll(":scope > .has-submenu")
      siblings?.forEach((sib) => {
        if (sib !== parentLi) sib.classList.remove("active")
      })

      if (wasActive) {
        parentLi.classList.remove("active")
      } else {
        parentLi.classList.add("active")
      }
    }
    document.addEventListener("click", handleSubmenuClick)

    // 3. Section accordions (data-ohio-accordion, .accordion-item, .accordion-button)
    const handleAccordionClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const button = target.closest(".accordion-button, .accordion-header, [data-accordion-toggle]")
      if (!button) return

      const item = button.closest(".accordion-item")
      if (!item) return

      e.preventDefault()
      const wasActive = item.classList.contains("active")

      // Find sibling items in same accordion container
      const container = item.closest("[data-ohio-accordion], .accordion, .ohio-accordion-sс")
      if (container) {
        const siblingItems = container.querySelectorAll(".accordion-item")
        siblingItems.forEach((sib) => {
          if (sib !== item) {
            sib.classList.remove("active")
            const collapse = sib.querySelector(".accordion-collapse") as HTMLElement | null
            if (collapse) {
              collapse.style.height = "0px"
              collapse.style.maxHeight = "0px"
            }
          }
        })
      }

      const collapse = item.querySelector(".accordion-collapse") as HTMLElement | null
      const body = item.querySelector(".accordion-body") as HTMLElement | null

      if (wasActive) {
        item.classList.remove("active")
        if (collapse) {
          collapse.style.height = "0px"
          collapse.style.maxHeight = "0px"
        }
      } else {
        item.classList.add("active")
        if (collapse && body) {
          const contentHeight = body.scrollHeight || 400
          collapse.style.height = `${contentHeight}px`
          collapse.style.maxHeight = `${contentHeight + 50}px`
        }
      }
    }
    document.addEventListener("click", handleAccordionClick)

    // 4. Temporary Static-Media Mode: Video playback disabled
    const handleVideoClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const videoBtn = target.closest(".video-button, [data-video]")
      if (!videoBtn) return
      e.preventDefault()
    }
    document.addEventListener("click", handleVideoClick)

    // 5. Close popups on backdrop or escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu()
        const allPopups = document.querySelectorAll(".clb-popup.visible")
        allPopups.forEach((p) => {
          p.classList.remove("visible")
          p.classList.add("hidden")
        })
      }
    }
    window.addEventListener("keydown", handleKeyDown)

    // 6. Custom circle cursor movement
    const outerCursor = document.querySelector(".circle-cursor-outer") as HTMLElement | null
    const innerCursor = document.querySelector(".circle-cursor-inner") as HTMLElement | null

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let outerX = mouseX
    let outerY = mouseY
    let isMoving = false

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!isMoving) {
        outerX = mouseX
        outerY = mouseY
        isMoving = true
      }
      if (innerCursor) {
        innerCursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      }
    }

    let animationFrameId: number
    const animateCursor = () => {
      if (outerCursor) {
        outerX += (mouseX - outerX) * 0.18
        outerY += (mouseY - outerY) * 0.18
        outerCursor.style.transform = `translate(${outerX}px, ${outerY}px)`
      }
      animationFrameId = requestAnimationFrame(animateCursor)
    }
    animationFrameId = requestAnimationFrame(animateCursor)
    window.addEventListener("mousemove", handleMouseMove)

    // Hover effect for cursor
    const handlePointerOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [role='button'], input, select, textarea, .video-button")) {
        outerCursor?.classList.add("hovered")
        innerCursor?.classList.add("hovered")
      } else {
        outerCursor?.classList.remove("hovered")
        innerCursor?.classList.remove("hovered")
      }
    }
    window.addEventListener("mouseover", handlePointerOver)

    // 7. Sticky Header scroll listener
    const masthead = document.getElementById("masthead")
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop
      if (scrollY > 150) {
        masthead?.classList.add("-sticky", "showed")
      } else {
        masthead?.classList.remove("-sticky", "showed")
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    // 8. Number counters animation
    const counterElements = document.querySelectorAll("[data-counter], .number")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const targetNum = parseInt(el.textContent?.replace(/[^\d]/g, "") || el.getAttribute("data-counter") || "0", 10)
            if (targetNum > 0 && !el.getAttribute("data-animated")) {
              el.setAttribute("data-animated", "true")
              let current = 0
              const step = Math.max(1, Math.floor(targetNum / 30))
              const timer = setInterval(() => {
                current += step
                if (current >= targetNum) {
                  current = targetNum
                  clearInterval(timer)
                }
                el.textContent = current.toString()
              }, 40)
            }
          }
        })
      },
      { threshold: 0.2 }
    )
    counterElements.forEach((el) => observer.observe(el))

    // Cleanup
    return () => {
      hamburgerBtns.forEach((btn) => btn.removeEventListener("click", handleHamburgerClick))
      closeBtns.forEach((btn) => btn.removeEventListener("click", closeMenu))
      document.removeEventListener("click", handleSubmenuClick)
      document.removeEventListener("click", handleAccordionClick)
      document.removeEventListener("click", handleVideoClick)
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handlePointerOver)
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(animationFrameId)
      observer.disconnect()
    }
  }, [])

  return null
}
