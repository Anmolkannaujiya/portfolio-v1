"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    title: "Design and Implementation of HCI",
    issuer: "NPTEL",
    date: "Nov’ 2025",
    credential: "#",
  },
  {
    title: "Oracle Cloud Infrastructure Foundations Associate",
    issuer: "Oracle University",
    date: "Oct’ 2025",
    credential: "#",
  },
  {
    title: "Web Development",
    issuer: "Cipherschools",
    date: "Sept’ 2025",
    credential: "#",
  },
  {
    title: "C Programming",
    issuer: "Udemy",
    date: "Mar’ 2024",
    credential: "#",
  },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(Math.floor(certifications.length / 2))

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + certifications.length) % certifications.length)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % certifications.length)
  }

  return (
    <section id="certifications" className="py-24 bg-[#0a0a0a]" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            <span className="text-[#D73B02]">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-[#D73B02] mx-auto rounded-full" />
        </motion.div>

        {/* Domino slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 perspective-1000">
            {certifications.map((cert, index) => {
              const distance = index - activeIndex
              const absDistance = Math.abs(distance)
              const isActive = index === activeIndex

              if (absDistance > 2) return null

              return (
                <motion.div
                  key={cert.title}
                  className="cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isInView ? (isActive ? 1 : 0.5 - absDistance * 0.15) : 0,
                    scale: isActive ? 1 : 0.85 - absDistance * 0.1,
                    x: distance * 20,
                    z: isActive ? 0 : -100 * absDistance,
                    rotateY: distance * 5,
                  }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    transformStyle: "preserve-3d",
                    zIndex: isActive ? 10 : 10 - absDistance,
                  }}
                >
                  <div
                    className={`w-64 md:w-80 p-6 rounded-xl border transition-all duration-300 ${
                      isActive
                        ? "bg-[#0a0a0a] border-[#D73B02] shadow-[0_0_40px_rgba(215,59,2,0.2)]"
                        : "bg-[#0a0a0a]/50 border-[#2a2a2a]"
                    }`}
                  >
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-[#D73B02]/10">
                      <Award className={`w-6 h-6 ${isActive ? "text-[#D73B02]" : "text-[#AAAAAA]"}`} />
                    </div>
                    <h3 className={`text-lg font-semibold mb-2 ${isActive ? "text-[#FFFFFF]" : "text-[#AAAAAA]"}`}>
                      {cert.title}
                    </h3>
                    <p className="text-sm text-[#AAAAAA] mb-1">{cert.issuer}</p>
                    <p className="text-xs text-[#AAAAAA]/70 mb-4">{cert.date}</p>
                    {isActive && (
                      <motion.a
                        href={cert.credential}
                        className="inline-flex items-center text-sm text-[#D73B02] hover:underline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        View Credential
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="border-[#2a2a2a] text-[#AAAAAA] hover:border-[#D73B02] hover:text-[#D73B02]"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="border-[#2a2a2a] text-[#AAAAAA] hover:border-[#D73B02] hover:text-[#D73B02]"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex ? "bg-[#D73B02] w-6" : "bg-[#2a2a2a] hover:bg-[#AAAAAA]"
                }`}
                aria-label={`Go to certification ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
