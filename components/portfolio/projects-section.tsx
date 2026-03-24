"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "SnackMachine – Restaurant Webpage",
    description: "Fully responsive restaurant website with 8+ UI sections, optimized for 3 device sizes including landscape mode.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Anmolkannaujiya",
    live: "#",
    featured: true,
  },
  {
    title: "PlaceOn - Placement Predictor",
    description: "ML predictor achieving 79.1% accuracy with Random Forest. Interactive UI with real-time prediction output and suggestions.",
    tech: ["Python", "Streamlit", "Scikit-learn"],
    github: "https://github.com/Anmolkannaujiya",
    live: "#",
    featured: true,
  },
  {
    title: "AI-Powered Sentiment Analyzer",
    description: "A deep learning model that analyzes sentiment from social media posts with 94% accuracy using BERT.",
    tech: ["Python", "PyTorch", "BERT", "FastAPI"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Smart Traffic Prediction",
    description: "ML system that predicts traffic patterns using historical data and weather conditions.",
    tech: ["Python", "TensorFlow", "Pandas", "React"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Medical Image Classifier",
    description: "CNN-based classification for detecting anomalies in medical X-ray images.",
    tech: ["Python", "Keras", "OpenCV", "Flask"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Stock Price Predictor",
    description: "LSTM neural network for predicting stock trends with real-time data integration.",
    tech: ["Python", "TensorFlow", "NumPy", "Streamlit"],
    github: "#",
    live: "#",
    featured: false,
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D73B02]/20 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Featured <span className="text-[#D73B02]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D73B02] to-[#FF6B35] mx-auto rounded-full" />
        </motion.div>

        {/* Featured Projects - Large Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full rounded-2xl border border-[#2a2a2a] bg-gradient-to-br from-[#0a0a0a]/80 to-[#0a0a0a]/40 p-6 hover:border-[#D73B02]/40 transition-all duration-500 hover:shadow-[0_8px_50px_rgba(215,59,2,0.1)] relative overflow-hidden">
                {/* Top gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D73B02] to-[#FF6B35] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Background glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D73B02]/0 group-hover:bg-[#D73B02]/5 rounded-full blur-3xl transition-all duration-700" />

                <div className="relative">
                  {/* Header with project number */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs text-[#D73B02] font-mono opacity-50">0{index + 1}</span>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-[#1a1a1a]/80 border border-[#2a2a2a] flex items-center justify-center text-[#AAAAAA] hover:text-[#FFFFFF] hover:border-[#FFFFFF]/30 hover:bg-[#FFFFFF]/10 transition-all"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-[#1a1a1a]/80 border border-[#2a2a2a] flex items-center justify-center text-[#AAAAAA] hover:text-[#D73B02] hover:border-[#D73B02]/30 transition-all"
                        aria-label="Live demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#FFFFFF] mb-3 group-hover:text-[#D73B02] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#AAAAAA] mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium bg-[#D73B02]/8 text-[#D73B02] rounded-lg border border-[#D73B02]/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects - Compact Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
              className="group"
            >
              <div className="h-full rounded-xl border border-[#2a2a2a] bg-[#0a0a0a]/50 p-4 hover:border-[#D73B02]/30 transition-all duration-300 hover:shadow-[0_4px_30px_rgba(215,59,2,0.06)] relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#D73B02]/0 group-hover:bg-[#D73B02]/5 rounded-full blur-2xl transition-all duration-500" />

                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] text-[#AAAAAA]/40 font-mono">0{index + 3}</span>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#AAAAAA] hover:text-[#FFFFFF] transition-colors">
                    <Github className="w-3.5 h-3.5" />
                  </a>
                </div>
                <h3 className="text-sm font-semibold text-[#FFFFFF] mb-2 group-hover:text-[#D73B02] transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-xs text-[#AAAAAA] mb-3 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-medium bg-[#1a1a1a] text-[#AAAAAA] rounded border border-[#2a2a2a]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all on GitHub */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Button
            variant="outline"
            className="border-[#D73B02] text-[#D73B02] hover:bg-[#D73B02]/10 hover:shadow-[0_0_20px_rgba(215,59,2,0.15)] transition-all group"
            asChild
          >
            <a href="https://github.com/Anmolkannaujiya" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All on GitHub
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
