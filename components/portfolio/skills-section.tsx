"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  SiPython, SiCplusplus, SiC, SiMysql,
  SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiPytorch,
  SiHtml5, SiCss,
  SiDocker, SiKubernetes, SiLinux, SiGithubactions,
  SiGit, SiGithub, SiJupyter,
  SiHuggingface, SiChainlink, SiApachehadoop
} from "react-icons/si"
import { VscVscode } from "react-icons/vsc"
import { FaCloud, FaAws, FaJava } from "react-icons/fa"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "SQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Data Science & Machine Learning",
    skills: [
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
    ],
  },
  {
    title: "AI Frameworks & Tools",
    skills: [
      { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
      { name: "LangChain", icon: SiChainlink, color: "#2A5ADA" },
    ],
  },
  {
    title: "Web Fundamentals",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "AWS", icon: FaAws, color: "#232F3E" },
      { name: "CI/CD", icon: SiGithubactions, color: "#2088FF" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
  {
    title: "Data Engineering & Big Data",
    skills: [
      { name: "Apache Hadoop", icon: SiApachehadoop, color: "#66CCFF" },
    ],
  },
  {
    title: "Tools & Environments",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
      { name: "Oracle Cloud", icon: FaCloud, color: "#F80000" },
    ],
  },
]

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-[#D73B02]/20 bg-[#D73B02]/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D73B02]"></span>
              <span className="text-xs font-semibold text-[#D73B02] tracking-wide uppercase">Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] leading-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Technical <span className="text-[#D73B02]">Arsenal.</span>
            </h2>
          </div>
          <p className="text-[#AAAAAA] max-w-md text-base md:text-lg">
            A carefully curated set of tools and technologies I utilize to engineer robust, high-performance applications.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-10 md:gap-16"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={itemVariants} className="border-t border-[#ffffff]/5 pt-6 md:pt-8">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16">

                {/* Category Title Area */}
                <div className="w-full md:w-1/3 lg:w-1/4">
                  <h3 className="text-lg md:text-xl font-semibold text-[#FFFFFF] tracking-tight mb-2">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Interactive Badges Container */}
                <div className="w-full md:w-2/3 lg:w-3/4 flex flex-wrap gap-2 md:gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="group relative flex items-center gap-2 md:gap-2.5 px-3 md:px-4 py-2 md:py-2.5 bg-[#111111]/40 backdrop-blur-md border border-[#ffffff]/5 hover:border-[#D73B02]/50 rounded-xl transition-colors duration-300 cursor-default overflow-hidden shadow-lg"
                    >
                      {/* Premium glow on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        style={{ background: `radial-gradient(circle at center, ${skill.color} 0%, transparent 70%)` }}
                      />

                      <div className="relative z-10 flex items-center justify-center w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:scale-110 drop-shadow-md" style={{ color: skill.color }}>
                        <skill.icon className="w-full h-full drop-shadow-[0_0_8px_currentColor]" />
                      </div>

                      <span className="relative z-10 text-xs md:text-sm font-medium text-[#CCCCCC] group-hover:text-[#FFFFFF] transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
