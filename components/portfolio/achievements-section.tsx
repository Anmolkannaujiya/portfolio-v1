"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Trophy, Star, Code, Users, Target, GitBranch, Award, Zap } from "lucide-react"

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const step = Math.max(1, Math.floor(target / 30))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [isInView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

const platformAchievements = [
  {
    platform: "LeetCode",
    icon: Code,
    stats: [
      { label: "Problems Solved", value: 200, suffix: "+" },
      { label: "Max Rating", value: 1650, suffix: "" },
      { label: "Contest Rating", value: 1580, suffix: "" },
    ],
    badge: "Top 15%",
    badgeColor: "from-[#FFA116] to-[#FF8C00]",
    description: "Consistent problem solver with strong DSA fundamentals. Focused on arrays, dynamic programming, and graph algorithms.",
  },
  {
    platform: "CodeChef",
    icon: Star,
    stats: [
      { label: "Max Rating", value: 2100, suffix: "+" },
      { label: "Stars", value: 5, suffix: "★" },
      { label: "Problems Solved", value: 150, suffix: "+" },
    ],
    badge: "5 Star",
    badgeColor: "from-[#D73B02] to-[#FF6B35]",
    description: "Achieved 5-star rating through competitive programming. 3-star in Long Challenges with strong algorithmic skills.",
  },
  {
    platform: "HackerRank",
    icon: Award,
    stats: [
      { label: "Python", value: 5, suffix: "★" },
      { label: "C++", value: 5, suffix: "★" },
      { label: "Badges", value: 8, suffix: "+" },
    ],
    badge: "5 Star",
    badgeColor: "from-[#00EA64] to-[#00C853]",
    description: "5-star certified in Python and C++, demonstrating strong proficiency in both languages.",
  },
  {
    platform: "GitHub",
    icon: GitBranch,
    stats: [
      { label: "Repositories", value: 50, suffix: "+" },
      { label: "Contributions", value: 500, suffix: "+" },
      { label: "Stars Earned", value: 25, suffix: "+" },
    ],
    badge: "Active",
    badgeColor: "from-[#FFFFFF] to-[#AAAAAA]",
    description: "Active open-source contributor with 50+ repositories spanning AI/ML projects, web apps, and competitive programming solutions.",
  },
]

const participations = [
  {
    event: "Entrepreneurship Conclave",
    year: "Feb 2025",
    achievement: "Lead Event Coordinator",
    description: "Organized tech entrepreneurship event with 200+ participants",
  },
  {
    event: "Smart India Hackathon",
    year: "Dec 2024",
    achievement: "Finalist",
    description: "Developed AI-powered healthcare solution in 36-hour hackathon",
  },
  {
    event: "CodeJam University Round",
    year: "Oct 2024",
    achievement: "Top 50 Qualifier",
    description: "Qualified among top 50 coders in university-level coding competition",
  },
  {
    event: "LPU Tech Fest",
    year: "Mar 2024",
    achievement: "Best Project Award",
    description: "Won best project award for ML-powered traffic prediction system",
  },
]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D73B02]/20 to-transparent" />

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
          <div className="w-24 h-1 bg-gradient-to-r from-[#D73B02] to-[#FF6B35] mx-auto rounded-full" />
        </motion.div>

        {/* Coding Platforms - Bento Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <motion.h3
            className="text-2xl font-semibold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Coding <span className="text-[#D73B02]">Platforms</span>
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-5">
            {platformAchievements.map((platform, index) => (
              <motion.div
                key={platform.platform}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-[#0a0a0a]/60 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-6 hover:border-[#D73B02]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(215,59,2,0.1)] relative overflow-hidden">
                  {/* Corner glow */}
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#D73B02]/0 group-hover:bg-[#D73B02]/8 rounded-full blur-2xl transition-all duration-500" />

                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-lg bg-[#D73B02]/10 flex items-center justify-center group-hover:bg-[#D73B02]/20 transition-colors">
                        <platform.icon className="w-5 h-5 text-[#D73B02]" />
                      </div>
                      <h4 className="text-xl font-bold text-[#FFFFFF]">{platform.platform}</h4>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${platform.badgeColor} text-[#000000]`}
                    >
                      {platform.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#AAAAAA] mb-4 leading-relaxed">{platform.description}</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    {platform.stats.map((stat) => (
                      <div key={stat.label} className="text-center p-2 rounded-lg bg-[#1a1a1a]/50">
                        <div className="text-lg font-bold text-[#FFFFFF]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                          <AnimatedNumber target={stat.value} suffix={stat.suffix} />
                        </div>
                        <p className="text-[10px] text-[#AAAAAA] uppercase tracking-wide">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Event Participations */}
        <div className="max-w-6xl mx-auto">
          <motion.h3
            className="text-2xl font-semibold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Event <span className="text-[#D73B02]">Participation</span>
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#D73B02] via-[#D73B02]/50 to-transparent" />

            <div className="space-y-5">
              {participations.map((item, index) => (
                <motion.div
                  key={item.event}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="relative pl-12 group"
                >
                  {/* Dot */}
                  <div className="absolute left-2.5 top-4 w-3 h-3 rounded-full bg-[#D73B02] ring-4 ring-[#000000] group-hover:ring-[#D73B02]/20 transition-all" />

                  <div className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-5 hover:border-[#D73B02]/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(215,59,2,0.06)]">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="font-semibold text-[#FFFFFF] text-lg">{item.event}</h4>
                      <span className="text-xs text-[#AAAAAA] bg-[#1a1a1a] px-3 py-1 rounded-full border border-[#2a2a2a]">{item.year}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-3.5 h-3.5 text-[#D73B02]" />
                      <span className="text-sm font-medium text-[#D73B02]">{item.achievement}</span>
                    </div>
                    <p className="text-sm text-[#AAAAAA]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
