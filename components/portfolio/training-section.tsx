"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, Calendar, Building } from "lucide-react"

const trainings = [
  {
    title: "Machine Learning Made Easy: From Basics to AI Application",
    provider: "Lovely Professional University",
    duration: "Jun’ 2025 – July’ 2025",
    description: "Gained a solid understanding of core ML concepts. Implemented ML algorithms like Linear Regression, Logistic Regression, Decision Trees, KNN, and Neural Networks. Built end-to-end models.",
    skills: ["Supervised Learning", "Unsupervised Learning", "Neural Networks"],
  },
]

export function TrainingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="training" className="py-24 bg-[#0a0a0a]" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Training & <span className="text-[#D73B02]">Courses</span>
          </h2>
          <div className="w-24 h-1 bg-[#D73B02] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {trainings.map((training, index) => (
            <motion.div
              key={training.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full bg-[#000000]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-6 hover:border-[#D73B02]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(215,59,2,0.1)]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#D73B02]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D73B02]/20 transition-colors">
                    <BookOpen className="w-6 h-6 text-[#D73B02]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#FFFFFF] mb-1">{training.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-[#AAAAAA]">
                      <span className="flex items-center gap-1">
                        <Building className="w-3 h-3" />
                        {training.provider}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {training.duration}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-[#AAAAAA] mb-4 leading-relaxed">
                  {training.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {training.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-medium bg-[#1a1a1a] text-[#AAAAAA] rounded border border-[#2a2a2a]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
