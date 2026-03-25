"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { Award, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

const certifications = [
  {
    title: "Design and Implementation of Human Computer Interface",
    issuer: "NPTEL",
    date: "Nov 2025",
    credential: "/certificate/nptel",
    color: "#3B82F6",
  },
  {
    title: "Oracle Cloud Infrastructure Foundations Associate",
    issuer: "Oracle University",
    date: "Oct 2025",
    credential: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=C57469A1EC09178C828A062D0AA54C1FF3DC5429B7A0D614FD3A7950FF63D309",
    color: "#EF4444",
  },
  {
    title: "Web Development",
    issuer: "Cipherschools",
    date: "Sept 2025",
    credential: "https://www.linkedin.com/posts/anmolkannaujiya_excited-to-share-my-recent-learning-journey-activity-7380057333923622912-4aDY?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEUqEz4B385H1xvKqVNCDcQ6YtQTU0qUkH8",
    color: "#8B5CF6",
  },
  {
    title: "C Programming",
    issuer: "Udemy",
    date: "Mar 2024",
    credential: "#",
    color: "#10B981",
  },
]

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setActiveIndex((prev) => {
      const next = prev + newDirection
      if (next < 0) return certifications.length - 1
      if (next >= certifications.length) return 0
      return next
    })
  }

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (d: number) => ({
      x: d < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  }

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D73B02]/20 to-transparent" />

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
          <div className="w-24 h-1 bg-gradient-to-r from-[#D73B02] to-[#FF6B35] mx-auto rounded-full" />
        </motion.div>

        {/* Grid layout for certifications */}
        <div className="max-w-5xl mx-auto">
          {/* Featured card - current cert */}
          <div className="relative mb-8">
            <div className="relative h-[280px] md:h-[220px] overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0"
                >
                  <div className="h-full rounded-3xl border border-[#ffffff]/10 hover:border-[#D73B02]/50 bg-gradient-to-br from-[#111111]/40 to-[#050505]/30 backdrop-blur-xl overflow-hidden p-8 relative shadow-2xl transition-colors duration-500">
                    {/* Glowing Accent Top Bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${certifications[activeIndex].color}, transparent)`,
                        boxShadow: `0 0 20px ${certifications[activeIndex].color}`
                      }}
                    />
                    {/* Premium Ambient Background glow */}
                    <div
                      className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[100px] opacity-[0.15]"
                      style={{ background: certifications[activeIndex].color }}
                    />

                    <div className="flex items-start gap-6 relative z-10">
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner"
                        style={{
                          background: `linear-gradient(135deg, ${certifications[activeIndex].color}20, transparent)`,
                          border: `1px solid ${certifications[activeIndex].color}40`,
                          boxShadow: `0 8px 32px ${certifications[activeIndex].color}20`
                        }}
                      >
                        <Award className="w-10 h-10 drop-shadow-md" style={{ color: certifications[activeIndex].color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-[#FFFFFF] mb-3 tracking-tight">{certifications[activeIndex].title}</h3>
                        <p className="text-[#AAAAAA] mb-2 text-lg font-medium">{certifications[activeIndex].issuer}</p>
                        <div className="flex items-center gap-3 mb-6">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#222222] text-[#CCCCCC]">
                            {certifications[activeIndex].date}
                          </span>
                        </div>
                        <a
                          href={certifications[activeIndex].credential}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 hover:shadow-lg relative overflow-hidden group"
                          style={{
                            background: `linear-gradient(90deg, ${certifications[activeIndex].color}15, transparent)`,
                            color: certifications[activeIndex].color,
                            border: `1px solid ${certifications[activeIndex].color}40`,
                          }}
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            View Credential
                            <ExternalLink className="w-4 h-4" />
                          </span>
                          <div className="absolute inset-0 bg-white/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => paginate(-1)}
              className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#AAAAAA] hover:border-[#D73B02] hover:text-[#D73B02] transition-all hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {certifications.map((cert, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1)
                    setActiveIndex(index)
                  }}
                  className="relative group"
                >
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8" : "w-2 hover:w-4"
                      }`}
                    style={{
                      background: index === activeIndex ? cert.color : "#2a2a2a",
                    }}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="w-10 h-10 rounded-full border border-[#2a2a2a] flex items-center justify-center text-[#AAAAAA] hover:border-[#D73B02] hover:text-[#D73B02] transition-all hover:scale-110"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Thumbnail row */}
          <div className="grid grid-cols-4 gap-3 mt-6">
            {certifications.map((cert, index) => (
              <motion.button
                key={cert.title}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1)
                  setActiveIndex(index)
                }}
                className={`text-left p-4 rounded-2xl border transition-all duration-300 ${index === activeIndex
                  ? "border-[#D73B02]/50 bg-gradient-to-br from-[#D73B02]/10 to-transparent shadow-[0_0_15px_rgba(215,59,2,0.15)]"
                  : "border-[#2a2a2a] bg-[#111111]/40 hover:border-[#444444] hover:bg-[#1A1A1A]"
                  }`}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div
                  className="w-3 h-3 rounded-full mb-3 shadow-inner"
                  style={{ background: cert.color, boxShadow: `0 0 10px ${cert.color}` }}
                />
                <p className={`text-sm font-bold line-clamp-1 ${index === activeIndex ? "text-[#FFFFFF]" : "text-[#AAAAAA]"}`}>
                  {cert.title}
                </p>
                <p className="text-xs text-[#888888] mt-1 font-medium">{cert.issuer}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
