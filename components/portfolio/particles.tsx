"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  initialX: number
  initialY: number
  targetX: number
  targetY: number
  duration: number
}

export function Particles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      initialX: Math.random() * width,
      initialY: Math.random() * height,
      targetX: Math.random() * width,
      targetY: Math.random() * height,
      duration: Math.random() * 20 + 10,
    }))
    setParticles(newParticles)
  }, [])

  if (particles.length === 0) return null

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#D73B02] rounded-full opacity-20"
          initial={{
            x: particle.initialX,
            y: particle.initialY,
          }}
          animate={{
            x: particle.targetX,
            y: particle.targetY,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </>
  )
}
