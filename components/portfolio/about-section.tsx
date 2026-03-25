"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { GraduationCap, Target, Sparkles, Code2, Award, Briefcase, MapPin, Calendar } from "lucide-react"

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const step = Math.max(1, Math.floor(target / 40))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 40)
    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

const stats = [
  { label: "Projects", value: 10, suffix: "+", icon: Code2 },
  { label: "Certifications", value: 4, suffix: "+", icon: Award },
  { label: "Problems Solved", value: 150, suffix: "+", icon: Target },
]

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.Tech in Computer Science with focus on Data Science, Machine Learning & Deep Learning.",
  },
  {
    icon: Target,
    title: "Mission",
    description: "Leverage AI and data-driven approaches to solve complex challenges and create meaningful impact.",
  },
  {
    icon: Sparkles,
    title: "Passion",
    description: "Exploring cutting-edge tech — from neural networks to cloud-native architectures.",
  },
]

const education = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology — Computer Science & Engineering",
    specialization: "Specialization in Data Science",
    grade: "CGPA: 6.84",
    duration: "Aug 2023 – Present",
    type: "college" as const,
  },
  {
    institution: "Ma Parkaliya R D I C",
    location: "Saidpura, Ballia",
    degree: "Intermediate (12th)",
    specialization: "Science Stream — PCM",
    grade: "Percentage: 70.6%",
    duration: "Jun 2020 – Jul 2022",
    type: "school" as const,
  },
  {
    institution: "RPM Academy",
    location: "Kusmhi, Gorakhpur",
    degree: "Matriculation (10th)",
    /*specialization: "General Studies",*/
    grade: "CGPA: 10.0",
    duration: "Apr 2018 – Jun 2020",
    type: "school" as const,
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      {/* Subtle gradient decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D73B02]/20 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            About <span className="text-[#D73B02]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D73B02] to-[#FF6B35] mx-auto rounded-full" />
        </motion.div>

        {/* Two column layout: Info + Stats */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 mb-16">
          {/* Left: About Text */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-[#AAAAAA] leading-relaxed mb-6">
              I&apos;m a passionate Computer Science student specializing in Data Science and Artificial Intelligence.
              My journey in tech is driven by an insatiable curiosity to understand how machines can learn and
              make intelligent decisions.
            </p>
            <p className="text-lg text-[#AAAAAA] leading-relaxed mb-8">
              I believe in building solutions that not only work but make a meaningful
              impact on people&apos;s lives. Currently expanding my skillset into DevOps and cloud technologies
              to better understand how systems are built, deployed, and maintained in real environments.
            </p>

            {/* Status indicator */}
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="w-4 h-4 text-[#D73B02]" />
              <span className="text-sm text-[#AAAAAA]">Currently: <span className="text-[#FFFFFF]">Open to Internships & Collaborations</span></span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#D73B02]" />
              <span className="text-sm text-[#AAAAAA]">Based in <span className="text-[#FFFFFF]">India</span></span>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-1 gap-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0a]/40 backdrop-blur-md border border-[#ffffff]/5 hover:border-[#D73B02]/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(215,59,2,0.08)]">
                  <div className="w-12 h-12 rounded-lg bg-[#D73B02]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D73B02]/20 transition-colors">
                    <stat.icon className="w-5 h-5 text-[#D73B02]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#FFFFFF]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-sm text-[#AAAAAA]">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group h-full"
            >
              <div className="h-full flex flex-col bg-[#0a0a0a]/40 backdrop-blur-md border border-[#ffffff]/5 rounded-xl p-6 hover:border-[#D73B02]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(215,59,2,0.1)] relative overflow-hidden">
                {/* Corner glow on hover */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#D73B02]/0 group-hover:bg-[#D73B02]/10 rounded-full blur-2xl transition-all duration-500" />
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#D73B02]/20 to-[#D73B02]/5 flex items-center justify-center mb-4 group-hover:from-[#D73B02]/30 group-hover:to-[#D73B02]/10 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-[#D73B02]" />
                </div>
                <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">{item.title}</h3>
                <p className="text-[#AAAAAA] flex-1 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-10 text-center" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Academic <span className="text-[#D73B02]">Journey</span>
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D73B02] via-[#D73B02]/50 to-[#D73B02]/10 md:-translate-x-px" />

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.15 }}
                  className={`relative flex md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-[#D73B02] ring-4 ring-[#000000] md:-translate-x-1/2 -translate-x-1/2 top-6 z-10">
                    <div className="absolute inset-0 rounded-full bg-[#D73B02] animate-ping opacity-20" />
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ml-6 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}>
                    <div className="bg-[#0a0a0a]/40 backdrop-blur-md border border-[#ffffff]/5 rounded-xl p-5 hover:border-[#D73B02]/30 transition-all duration-300 hover:shadow-[0_0_25px_rgba(215,59,2,0.08)]">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-[#D73B02]" />
                          <h4 className="text-lg font-semibold text-[#FFFFFF]">{edu.institution}</h4>
                        </div>
                      </div>
                      <p className="text-sm text-[#D73B02] font-medium mb-1">{edu.degree}</p>
                      <p className="text-xs text-[#AAAAAA] mb-2">{edu.specialization}</p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#AAAAAA]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {edu.duration}
                        </span>
                        <span className="px-2 py-0.5 bg-[#D73B02]/10 text-[#D73B02] rounded-full font-medium">
                          {edu.grade}
                        </span>
                      </div>
                      <p className="text-xs text-[#AAAAAA] mt-2 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#D73B02]" /> {edu.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
