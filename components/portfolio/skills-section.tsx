"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect, useCallback } from "react"

const skills = [
  { name: "Python", size: 90 },
  { name: "C++", size: 85 },
  { name: "C", size: 80 },
  { name: "HTML & CSS", size: 85 },
  { name: "Pandas", size: 88 },
  { name: "NumPy", size: 88 },
  { name: "Scikit-learn", size: 85 },
  { name: "Matplotlib", size: 82 },
  { name: "Seaborn", size: 80 },
  { name: "MySQL", size: 75 },
  { name: "Oracle Cloud", size: 70 },
  { name: "Jupyter", size: 80 },
  { name: "Power BI", size: 75 },
  { name: "Excel", size: 85 },
  { name: "Git", size: 80 },

]

interface Bubble {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  skill: { name: string; size: number }
}

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const animationRef = useRef<number | null>(null)

  // Initialize bubbles
  useEffect(() => {
    const initialBubbles = skills.map((skill, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      skill,
    }))
    setBubbles(initialBubbles)
  }, [])

  const animate = useCallback(() => {
    setBubbles((prevBubbles) =>
      prevBubbles.map((bubble) => {
        let { x, y, vx, vy } = bubble
        const bubbleSize = bubble.skill.size / 2

        // Apply mouse repulsion if hovering
        if (isHovering && containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect()
          const mouseXPercent = ((mousePos.x - rect.left) / rect.width) * 100
          const mouseYPercent = ((mousePos.y - rect.top) / rect.height) * 100

          const dx = x - mouseXPercent
          const dy = y - mouseYPercent
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 20) {
            const force = (20 - distance) / 20
            vx += (dx / distance) * force * 0.5
            vy += (dy / distance) * force * 0.5
          }
        }

        // Update position
        x += vx
        y += vy

        // Bounce off walls
        if (x < 5 || x > 95) vx = -vx * 0.8
        if (y < 5 || y > 95) vy = -vy * 0.8

        // Keep in bounds
        x = Math.max(5, Math.min(95, x))
        y = Math.max(5, Math.min(95, y))

        // Add some friction
        vx *= 0.99
        vy *= 0.99

        // Add slight random movement
        vx += (Math.random() - 0.5) * 0.02
        vy += (Math.random() - 0.5) * 0.02

        return { ...bubble, x, y, vx, vy }
      })
    )
    animationRef.current = requestAnimationFrame(animate)
  }, [isHovering, mousePos])

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate])

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a]" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Skills & <span className="text-[#D73B02]">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-[#D73B02] mx-auto rounded-full mb-4" />
          <p className="text-[#AAAAAA]">Hover over the bubbles to interact!</p>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="relative h-[500px] md:h-[600px] rounded-2xl border border-[#2a2a2a] bg-[#000000]/50 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, #D73B02 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {bubbles.map((bubble, index) => {
            const size = bubble.skill.size * 0.8 + 40
            return (
              <motion.div
                key={bubble.id}
                className="absolute flex items-center justify-center cursor-pointer"
                style={{
                  left: `${bubble.x}%`,
                  top: `${bubble.y}%`,
                  width: size,
                  height: size,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.2, zIndex: 10 }}
              >
                <div
                  className="w-full h-full rounded-full flex items-center justify-center text-center p-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(215,59,2,0.5)]"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, rgba(215, 59, 2, 0.3), rgba(215, 59, 2, 0.1))`,
                    border: "1px solid rgba(215, 59, 2, 0.3)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span
                    className="text-[#FFFFFF] font-medium"
                    style={{
                      fontSize: Math.max(10, size * 0.15),
                    }}
                  >
                    {bubble.skill.name}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
