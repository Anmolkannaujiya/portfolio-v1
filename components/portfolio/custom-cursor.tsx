"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    // Check if device supports fine pointer
    const isFinePointer = window.matchMedia("(pointer: fine)").matches
    setIsMobile(!isFinePointer)
    if (!isFinePointer) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [isVisible])

  // Observe interactive elements for hover state
  useEffect(() => {
    if (isMobile) return

    const updateHoverListeners = () => {
      const els = document.querySelectorAll("a, button, [role='button'], input, textarea, select")
      els.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true))
        el.addEventListener("mouseleave", () => setIsHovering(false))
      })
    }

    updateHoverListeners()
    const observer = new MutationObserver(updateHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      {/* Dot cursor */}
      <div
        className="fixed z-[9998] pointer-events-none mix-blend-difference transition-transform duration-75"
        style={{
          left: mousePos.x - (isHovering ? 16 : 4),
          top: mousePos.y - (isHovering ? 16 : 4),
          width: isHovering ? 32 : 8,
          height: isHovering ? 32 : 8,
          opacity: isVisible ? 1 : 0,
          borderRadius: "50%",
          background: isHovering ? "rgba(215, 59, 2, 0.6)" : "#FFFFFF",
          transition: "width 0.2s ease, height 0.2s ease, opacity 0.2s ease, left 0.08s ease, top 0.08s ease, background 0.2s ease",
        }}
      />
      {/* Ring cursor */}
      <div
        className="fixed z-[9997] pointer-events-none border rounded-full"
        style={{
          left: mousePos.x - (isHovering ? 24 : 16),
          top: mousePos.y - (isHovering ? 24 : 16),
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          opacity: isVisible ? 0.4 : 0,
          borderColor: isHovering ? "#D73B02" : "rgba(255,255,255,0.3)",
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease, left 0.15s ease, top 0.15s ease, border-color 0.2s ease",
        }}
      />
    </>
  )
}
