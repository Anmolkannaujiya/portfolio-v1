"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Download, Mail, FolderOpen, Github, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const taglines = [
  "Building AI-driven systems that solve real-world problems.",
  "Architecting scalable machine learning solutions.",
  "Turning data into actionable technical insights.",
]

export function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect logic
  useEffect(() => {
    const tagline = taglines[currentTagline]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < tagline.length) {
            setDisplayedText(tagline.slice(0, displayedText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2500)
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentTagline((prev) => (prev + 1) % taglines.length)
          }
        }
      },
      isDeleting ? 25 : 45
    )
    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentTagline])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Compact, enclosed Bento-style grid for the Hero */}
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row gap-6">
          
          {/* Main Info Box */}
          <motion.div
            className="flex-[2] bg-gradient-to-br from-[#111111]/40 to-[#0A0A0A]/30 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-[#ffffff]/5 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
          >
            {/* Subtle glow inside the box */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#D73B02]/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-center">
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-[#D73B02]/20 bg-[#D73B02]/5 w-fit"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3 }}
              >
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF00]"></span>
                </div>
                <span className="text-xs font-semibold text-[#CCCCCC] tracking-wide uppercase">Open for opportunities</span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-4 leading-[1.1] tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.1 }}
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                <span className="text-[#FFFFFF]">Anmol</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D73B02] to-[#FF6B35]">
                  Kannaujiya
                </span>
                <span className="text-[#D73B02]">.</span>
              </motion.h1>
              
              <motion.div
                className="h-14 md:h-20 mb-6 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.2 }}
              >
                <p className="text-lg md:text-2xl text-[#A0A0A0] leading-relaxed">
                  {displayedText}
                  <span className="animate-pulse text-[#D73B02] ml-1 opacity-80">|</span>
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-[#ffffff]/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.3 }}
              >
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-r from-[#D73B02] to-[#FF6B35] text-[#FFFFFF] hover:shadow-[0_0_30px_rgba(215,59,2,0.4)] px-6 py-5 rounded-xl font-semibold transition-all cursor-pointer group"
                >
                  <FolderOpen className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  View Portfolio
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="bg-[#ffffff]/5 backdrop-blur-sm border-[#ffffff]/10 text-[#FFFFFF] hover:bg-[#ffffff]/10 hover:border-[#D73B02]/50 hover:shadow-[0_0_20px_rgba(215,59,2,0.15)] px-6 py-5 rounded-xl font-medium transition-all cursor-pointer group"
                >
                  <Mail className="mr-2 h-4 w-4 text-[#AAAAAA] group-hover:text-[#D73B02] transition-colors" />
                  Contact Me
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Secondary Stack (Image + Mini Bento) */}
          <div className="flex-[1] flex flex-col gap-6">
            
            {/* Image Box */}
            <motion.div
              className="flex-1 rounded-3xl p-1 relative group min-h-[320px] shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 3 }}
            >
              {/* Premium Animated Glowing Border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D73B02]/80 via-[#FF6B35]/50 to-[#0A0A0A] rounded-3xl opacity-40 blur-[2px] group-hover:opacity-100 transition-opacity duration-1000 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-bl from-[#D73B02]/50 via-[#111111] to-[#D73B02]/80 rounded-3xl" />
              
              <div className="relative h-full w-full bg-[#111111]/60 rounded-[22px] border border-[#ffffff]/10 overflow-hidden">
                <div className="absolute inset-0 bg-[#000000]/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <Image
                  src="/me.jpg"
                  alt="Anmol Kannaujiya"
                  fill
                  className="object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
                {/* Overlay Content in Image Box */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
                <div className="bg-[#000000]/60 backdrop-blur-md border border-[#ffffff]/10 rounded-xl px-4 py-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-medium text-[#FFFFFF] flex items-center gap-1.5">
                    Software Engineer
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#D73B02] text-[#FFFFFF] flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
            </motion.div>

            {/* Micro Interactions Box */}
            <motion.div
              className="h-28 bg-[#111111]/40 backdrop-blur-md border border-[#ffffff]/5 rounded-3xl p-4 flex gap-4 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.4 }}
            >
              <Button
                variant="outline"
                className="flex-1 h-full rounded-2xl bg-[#0A0A0A] border-[#222222] hover:bg-[#1A1A1A] hover:border-[#D73B02]/30 flex flex-col items-center justify-center gap-2 group transition-all"
                asChild
              >
                <a href="/AnmolCVFinal3.pdf" download="Anmol_Kannaujiya_CV.pdf">
                  <Download className="h-5 w-5 text-[#AAAAAA] group-hover:text-[#FFFFFF] transition-colors" />
                  <span className="text-xs text-[#888888] font-medium group-hover:text-[#BBBBBB] transition-colors">Resume</span>
                </a>
              </Button>
              <Button
                variant="outline"
                className="flex-1 h-full rounded-2xl bg-[#0A0A0A] border-[#222222] hover:bg-[#1A1A1A] hover:border-[#ffffff]/30 flex flex-col items-center justify-center gap-2 group transition-all"
                asChild
              >
                <a href="https://github.com/Anmolkannaujiya" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5 text-[#AAAAAA] group-hover:text-[#FFFFFF] transition-colors" />
                  <span className="text-xs text-[#888888] font-medium group-hover:text-[#BBBBBB] transition-colors">GitHub</span>
                </a>
              </Button>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute -bottom-12 md:-bottom-20 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8 }}
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 group opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Scroll down"
          >
            <span className="text-[10px] text-[#888888] tracking-[0.2em] uppercase font-semibold">Scroll</span>
            <div className="w-8 h-12 rounded-full border-2 border-[#333333] flex justify-center p-1 group-hover:border-[#D73B02]/50 transition-colors">
              <div className="w-1 h-3 bg-[#D73B02] rounded-full mt-1.5 opacity-80" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
