"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { ArrowDown, Download, Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

// Dynamic import with SSR disabled to prevent hydration mismatch
const Particles = dynamic(
  () => import("./particles").then((mod) => mod.Particles),
  { ssr: false }
)

const taglines = [
  "Building AI-driven systems that solve real-world problems",
  "Transforming data into actionable insights",
  "Creating intelligent solutions for tomorrow",
]

export function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const tagline = taglines[currentTagline]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < tagline.length) {
            setDisplayedText(tagline.slice(0, displayedText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
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
      isDeleting ? 30 : 50
    )
    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentTagline])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#0a0a0a] to-[#000000]" />
        {/* Animated particles - dynamically imported to prevent hydration mismatch */}
        <Particles />
        {/* Glowing orb */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D73B02] rounded-full blur-[150px] opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-[#D73B02] text-lg mb-4 font-medium tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 text-[#FFFFFF]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Anmol{" "}
              <span className="text-[#D73B02]">Kannaujiya</span>
            </motion.h1>
            <motion.div
              className="h-16 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl text-[#AAAAAA]">
                {displayedText}
                <span className="animate-pulse text-[#D73B02]">|</span>
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={scrollToProjects}
                className="bg-[#D73B02] hover:bg-[#D73B02]/90 text-[#FFFFFF] px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(215,59,2,0.5)]"
              >
                <FolderOpen className="mr-2 h-4 w-4" />
                View Projects
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-[#D73B02] text-[#D73B02] hover:bg-[#D73B02]/10 px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
              <Button
                variant="outline"
                className="border-[#AAAAAA] text-[#AAAAAA] hover:bg-[#AAAAAA]/10 px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                asChild
              >
                <a href="/resume.pdf" download="Anmol_Kannaujiya_CV.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right content - Profile image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D73B02] to-[#D73B02]/50 blur-xl opacity-50" />
              {/* Profile placeholder */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#D73B02]/30 flex items-center justify-center overflow-hidden">
                <div className="text-6xl md:text-8xl font-bold text-[#D73B02]/30">AK</div>
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#D73B02]"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    borderStyle: "dashed",
                    borderWidth: "2px",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="w-6 h-6 text-[#AAAAAA]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
