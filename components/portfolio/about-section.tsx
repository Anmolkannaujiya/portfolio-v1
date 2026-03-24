"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Target, Sparkles } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-[#000000]" ref={ref}>
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
          <div className="w-24 h-1 bg-[#D73B02] mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.p
            className="text-lg text-[#AAAAAA] leading-relaxed mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm a passionate Computer Science student specializing in Artificial Intelligence and Data Science.
            My journey in tech is driven by an insatiable curiosity to understand how machines can learn and
            make intelligent decisions. I believe in building solutions that not only work but make a meaningful
            impact on people's lives.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Education",
                description: "Pursuing B.Tech in Computer Science with a focus on Data Science and Machine Learning.",
              },
              {
                icon: Target,
                title: "Mission",
                description: "To leverage AI and data-driven approaches to solve complex real-world challenges.",
              },
              {
                icon: Sparkles,
                title: "Passion",
                description: "Exploring cutting-edge technologies and transforming innovative ideas into reality.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group h-full"
              >
                <div className="h-full flex flex-col bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-6 hover:border-[#D73B02]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(215,59,2,0.1)]">
                  <div className="w-14 h-14 rounded-lg bg-[#D73B02]/10 flex items-center justify-center mb-4 group-hover:bg-[#D73B02]/20 transition-colors">
                    <item.icon className="w-7 h-7 text-[#D73B02]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">{item.title}</h3>
                  <p className="text-[#AAAAAA] flex-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* New Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-semibold text-[#FFFFFF] mb-8 text-center text-[#D73B02]">Academic Journey</h3>
            <div className="space-y-6">
              {[
                {
                  institution: "Lovely Professional University",
                  location: "Punjab, India",
                  degree: "Bachelor of Technology - Computer Science and Engineering",
                  /*grade: "CGPA: 6.73",
                  duration: "Since Aug’ 2023",*/
                },
                {
                  institution: "Ma Parkaliya R D I C",
                  location: "Saidpura, Ballia",
                  degree: "Intermediate",
                  /*grade: "Percentage: 60.6%",
                  duration: "Mar’ 2018 – Jul’ 2020",*/
                },
                {
                  institution: "RPM Academy",
                  location: "Kusmhi, Gorakhpur",
                  degree: "Matriculation",
                  /*grade: "CGPA: 10",
                  duration: "Apr’ 2015 – Jun’ 2017",*/
                },
              ].map((edu, index) => (
                <div key={index} className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-6 hover:border-[#D73B02]/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-[#FFFFFF]">{edu.institution}</h4>
                      <p className="text-sm text-[#D73B02]">{edu.degree}</p>
                    </div>
                    <div className="text-left md:text-right mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-[#2a2a2a] rounded-full text-xs text-[#AAAAAA] mb-1">{edu.duration}</span>
                      <p className="text-sm text-[#AAAAAA]">{edu.grade}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#AAAAAA] mt-2 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D73B02] inline-block" /> {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
