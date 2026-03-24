"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "next/navigation"

const navItems = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Certifications", href: "/#certifications" },
  { name: "Achievements", href: "/#achievements" },
  { name: "Training", href: "/#training" },
  { name: "Contact", href: "/#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Active section detection — picks the topmost visible section
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection("")
      return
    }

    const sectionIds = navItems.map((item) => item.href.replace('/#', ''))

    const handleScroll = () => {
      let current = ""
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          // Section is considered "active" when its top is within the upper half of the viewport
          if (rect.top <= 150) {
            current = `#${id}`
          }
        }
      }
      setActiveSection(current)
    }

    handleScroll() // run once on mount
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    const hash = href.startsWith('/#') ? href.substring(1) : href

    if (pathname !== '/') {
      router.push(`/${hash}`)
      return
    }

    const el = document.querySelector(hash)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }, [pathname, router])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0a0a0a]/70 backdrop-blur-2xl border-b border-[#ffffff]/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 2.8, type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-xl font-bold text-[#FFFFFF] cursor-pointer"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                if (pathname !== '/') {
                  router.push('/')
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              }}
            >
              Anmol<span className="text-[#D73B02]">.</span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative text-sm px-4 py-2 rounded-lg cursor-pointer transition-colors duration-300 ${
                    activeSection === item.href.replace('/', '')
                      ? "text-[#FFFFFF]"
                      : "text-[#888888] hover:text-[#FFFFFF]"
                  }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {item.name}
                  {activeSection === item.href.replace('/', '') && (
                    <motion.div
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-[#D73B02] to-[#FF6B35]"
                      layoutId="activeNav"
                      style={{ width: "60%" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* Hover glow bg */}
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-[#ffffff]/0 hover:bg-[#ffffff]/5 transition-colors duration-300 -z-10"
                  />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                asChild
                className="bg-[#D73B02] hover:bg-[#FF6B35] text-[#FFFFFF] text-sm cursor-pointer hover:shadow-[0_0_25px_rgba(215,59,2,0.4)] transition-all duration-300 rounded-lg font-medium"
              >
                <a href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")}>Hire Me</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#FFFFFF] cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-[#000000]/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute top-16 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-[#ffffff]/5 p-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`text-lg cursor-pointer transition-colors ${
                      activeSection === item.href.replace('/', '') ? "text-[#D73B02]" : "text-[#888888] hover:text-[#D73B02]"
                    }`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <Button
                  asChild
                  className="mt-4 bg-[#D73B02] hover:bg-[#FF6B35] text-[#FFFFFF] cursor-pointer"
                >
                  <a href="/#contact" onClick={(e) => handleNavClick(e, "/#contact")}>
                    Hire Me
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
