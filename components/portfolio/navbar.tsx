"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Training", href: "#training" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#000000]/90 backdrop-blur-md border-b border-[#2a2a2a]"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-xl font-bold text-[#FFFFFF]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
              whileHover={{ scale: 1.05 }}
            >
              Anmol<span className="text-[#D73B02]">.</span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-[#AAAAAA] hover:text-[#FFFFFF] transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D73B02] transition-all group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                asChild
                className="bg-[#D73B02] hover:bg-[#D73B02]/90 text-[#FFFFFF] text-sm"
              >
                <a href="#contact">Hire Me</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#FFFFFF]"
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
              className="absolute top-16 left-0 right-0 bg-[#0a0a0a] border-b border-[#2a2a2a] p-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-lg text-[#AAAAAA] hover:text-[#D73B02] transition-colors"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <Button
                  asChild
                  className="mt-4 bg-[#D73B02] hover:bg-[#D73B02]/90 text-[#FFFFFF]"
                >
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
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
