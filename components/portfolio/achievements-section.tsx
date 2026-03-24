"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Star, Code, Users } from "lucide-react"

const achievements = [
  {
    icon: Star,
    title: "5-Star Rating in Python",
    subtitle: "HackerRank",
    description: "Demonstrated strong problem-solving skills",
  },
  {
    icon: Star,
    title: "5-Star Rating in C++",
    subtitle: "HackerRank",
    description: "Showcased coding proficiency in C++",
  },
]

const participations = [
  {
    event: "Entrepreneurship Conclave",
    year: "Feb’ 2025",
    achievement: "Lead Event Coordinator",
  },
]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-24 bg-[#000000]" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Achievements & <span className="text-[#D73B02]">Participation</span>
          </h2>
          <div className="w-24 h-1 bg-[#D73B02] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Achievements */}
          <div>
            <motion.h3
              className="text-2xl font-semibold text-[#FFFFFF] mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Coding <span className="text-[#D73B02]">Achievements</span>
            </motion.h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-5 hover:border-[#D73B02]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(215,59,2,0.1)]">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#D73B02]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D73B02]/20 transition-colors">
                        <item.icon className="w-6 h-6 text-[#D73B02]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#FFFFFF]">{item.title}</h4>
                        <p className="text-sm text-[#D73B02] mb-1">{item.subtitle}</p>
                        <p className="text-xs text-[#AAAAAA]">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <motion.h3
              className="text-2xl font-semibold text-[#FFFFFF] mb-8"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Event <span className="text-[#D73B02]">Participation</span>
            </motion.h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#D73B02] via-[#D73B02]/50 to-transparent" />
              
              <div className="space-y-6">
                {participations.map((item, index) => (
                  <motion.div
                    key={item.event}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="relative pl-12"
                  >
                    {/* Dot */}
                    <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-[#D73B02] ring-4 ring-[#D73B02]/20" />
                    
                    <div className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-4 hover:border-[#D73B02]/30 transition-all">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-[#FFFFFF]">{item.event}</h4>
                        <span className="text-xs text-[#AAAAAA] bg-[#2a2a2a] px-2 py-1 rounded">{item.year}</span>
                      </div>
                      <p className="text-sm text-[#D73B02]">{item.achievement}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
