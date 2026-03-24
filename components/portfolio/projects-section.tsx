"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "SnackMachine – Restaurant Webpage",
    description: "Fully responsive restaurant website with 8+ UI sections, optimized for 3 device sizes including landscape mode.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Anmolkannaujiya",
    live: "#",
  },
  {
    title: "PlaceOn - Placement Predictor",
    description: "ML predictor achieving 79.1% accuracy with Random Forest. Interactive UI with real-time prediction output and suggestions.",
    tech: ["Python", "Streamlit", "Scikit-learn"],
    github: "https://github.com/Anmolkannaujiya",
    live: "#",
  },
  {
    title: "AI-Powered Sentiment Analyzer",
    description: "A deep learning model that analyzes sentiment from social media posts with 94% accuracy using BERT and transformers.",
    tech: ["Python", "PyTorch", "BERT", "FastAPI"],
    github: "#",
    live: "#",
  },
  {
    title: "Smart Traffic Prediction System",
    description: "Machine learning system that predicts traffic patterns using historical data and weather conditions.",
    tech: ["Python", "TensorFlow", "Pandas", "React"],
    github: "#",
    live: "#",
  },
  {
    title: "Medical Image Classifier",
    description: "CNN-based image classification system for detecting anomalies in medical X-ray images.",
    tech: ["Python", "Keras", "OpenCV", "Flask"],
    github: "#",
    live: "#",
  },
  {
    title: "Stock Price Predictor",
    description: "LSTM neural network model for predicting stock market trends with real-time data integration.",
    tech: ["Python", "TensorFlow", "NumPy", "Streamlit"],
    github: "#",
    live: "#",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 bg-[#000000]" ref={ref}>
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
          <div className="w-24 h-1 bg-[#D73B02] mx-auto rounded-full" />
        </motion.div>

        {/* Scrolling container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 py-4"
            animate={{
              x: [0, -50 * projects.length * 6],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Double the projects for seamless loop */}
            {[...projects, ...projects, ...projects].map((project, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 md:w-96"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: (index % projects.length) * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="h-full bg-[#0a0a0a]/80 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-6 hover:border-[#D73B02]/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(215,59,2,0.15)]">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-[#FFFFFF] leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="text-[#AAAAAA] hover:text-[#D73B02] transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.live}
                        className="text-[#AAAAAA] hover:text-[#D73B02] transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-[#AAAAAA] text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-[#D73B02]/10 text-[#D73B02] rounded-full border border-[#D73B02]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* View all button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <Button
            variant="outline"
            className="border-[#D73B02] text-[#D73B02] hover:bg-[#D73B02]/10"
            asChild
          >
            <Link href="/projects">
              View All Projects
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
