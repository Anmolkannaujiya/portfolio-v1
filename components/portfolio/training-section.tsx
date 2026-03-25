"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, Calendar, Building, Sparkles, Rocket, ExternalLink } from "lucide-react"

const trainings = [
  {
    title: "Machine Learning Made Easy: From Basics to AI Application",
    provider: "Lovely Professional University",
    duration: "Jun 2025 – Jul 2025",
    description: "Gained a solid understanding of core ML concepts. Implemented ML algorithms like Linear Regression, Logistic Regression, Decision Trees, KNN, and Neural Networks. Built end-to-end models.",
    skills: ["Supervised Learning", "Unsupervised Learning", "Neural Networks"],
    credential: "https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12314634_893_20_08_2025.pdf?_gl=1*2hdz3z*_gcl_au*MjA3NDM5NDc3MC4xNzc0NDMwNjg5",
  },
]

const currentlyLearning = [
  {
    title: "DevOps Engineering",
    topics: ["Docker", "Kubernetes", "CI/CD Pipelines", "Jenkins", "GitHub Actions"],
    progress: 45,
  },
  {
    title: "AWS Cloud",
    topics: ["EC2", "S3", "Lambda", "CloudFormation", "IAM"],
    progress: 35,
  },
]

export function TrainingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="training" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D73B02]/20 to-transparent" />

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
          <div className="w-24 h-1 bg-gradient-to-r from-[#D73B02] to-[#FF6B35] mx-auto rounded-full" />
        </motion.div>

        {/* Centered content */}
        <div className="max-w-3xl mx-auto">
          {/* Completed Training - centered single card */}
          <div className="flex justify-center mb-12">
            {trainings.map((training, index) => (
              <motion.div
                key={training.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group w-full"
              >
                <div className="bg-gradient-to-br from-[#0a0a0a]/80 to-[#0a0a0a]/40 border border-[#2a2a2a] rounded-2xl p-7 hover:border-[#D73B02]/40 transition-all duration-300 hover:shadow-[0_4px_40px_rgba(215,59,2,0.08)] relative overflow-hidden">
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D73B02] to-[#FF6B35] opacity-60" />
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#D73B02]/0 group-hover:bg-[#D73B02]/8 rounded-full blur-2xl transition-all duration-500" />

                  <div className="flex items-start gap-5 mb-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D73B02]/20 to-[#D73B02]/5 flex items-center justify-center flex-shrink-0 group-hover:from-[#D73B02]/30 group-hover:to-[#D73B02]/10 transition-all">
                      <BookOpen className="w-7 h-7 text-[#D73B02]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#FFFFFF] mb-2">{training.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[#AAAAAA]">
                        <span className="flex items-center gap-1.5">
                          <Building className="w-3.5 h-3.5 text-[#D73B02]" />
                          {training.provider}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#D73B02]" />
                          {training.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[#AAAAAA] mb-5 leading-relaxed">
                    {training.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {training.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium bg-[#D73B02]/8 text-[#D73B02] rounded-lg border border-[#D73B02]/15"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {training.credential && (
                    <div>
                      <a
                        href={training.credential}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
                        style={{
                          background: "rgba(215, 59, 2, 0.1)",
                          color: "#D73B02",
                          border: "1px solid rgba(215, 59, 2, 0.3)",
                        }}
                      >
                        View Certificate
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Currently Learning - centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Rocket className="w-5 h-5 text-[#D73B02]" />
              <h3 className="text-xl font-semibold text-[#FFFFFF]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Currently <span className="text-[#D73B02]">Learning</span>
              </h3>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-[#D73B02]/10 text-[#D73B02] rounded-full border border-[#D73B02]/20 animate-pulse">
                <Sparkles className="w-3 h-3" />
                In Progress
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {currentlyLearning.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group h-full"
                >
                  <div className="h-full bg-gradient-to-br from-[#0a0a0a]/80 to-[#0a0a0a]/40 border border-[#2a2a2a] rounded-xl p-5 hover:border-[#D73B02]/30 transition-all duration-300 hover:shadow-[0_4px_30px_rgba(215,59,2,0.06)] flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-[#FFFFFF]">{item.title}</h4>
                      <span className="text-sm text-[#D73B02] font-bold tabular-nums">{item.progress}%</span>
                    </div>

                    <div className="h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden mb-4">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: "linear-gradient(90deg, #D73B02, #FF6B35)",
                        }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${item.progress}%` } : {}}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                      />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2.5 py-1 text-xs bg-[#1a1a1a] text-[#AAAAAA] rounded-md border border-[#2a2a2a]"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
