"use client"

import { Navbar } from "@/components/portfolio/navbar"
import { Footer } from "@/components/portfolio/footer"
import { Github, ExternalLink, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const featuredProjects = [
  {
    title: "SnackMachine",
    subtitle: "Restaurant Webpage",
    description:
      "A fully responsive restaurant website featuring 8+ carefully crafted UI sections. Optimized for desktops, tablets, and mobile devices including landscape mode. Implements modern layout techniques, smooth scroll interactions, and a consistent brand-first design system.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/Anmolkannaujiya",
    live: "#",
    accent: "#D73B02",
  },
  {
    title: "PlaceOn",
    subtitle: "Placement Predictor",
    description:
      "An end-to-end machine learning application that predicts campus placement outcomes using a Random Forest model, achieving 79.1% accuracy. Features an interactive Streamlit dashboard with real-time predictions, performance metrics visualization, and personalized improvement suggestions.",
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/Anmolkannaujiya",
    live: "#",
    accent: "#FF6B35",
  },
]

const otherProjects = [
  {
    title: "C++ Timer Application",
    description:
      "Console-based timer built using C++ with <thread>, <chrono>, and <ctime>. Displays real-time countdown and timestamps.",
    tech: ["C++"],
  },
  {
    title: "Travel Preference ML Model",
    description:
      "Machine learning model using Scikit-learn to predict user travel preferences — hills, beaches, or plains.",
    tech: ["Python", "Scikit-learn"],
  },
  {
    title: "TravelBuddy Website",
    description:
      "Responsive travel landing page built with HTML and CSS using float-based layouts and media queries.",
    tech: ["HTML", "CSS"],
  },
  {
    title: "Air Quality Dashboard",
    description:
      "Interactive Power BI dashboard analyzing Air Quality Index trends across regions and time periods.",
    tech: ["Power BI", "Data Analysis"],
  },
  {
    title: "AI PDF Summarizer",
    description:
      "Python application using the Gemini API for document summarization and chatbot-based Q&A on uploaded PDFs.",
    tech: ["Python", "Gemini API"],
  },
  {
    title: "Suicide Rate Data Analysis",
    description:
      "Exploratory data analysis on US suicide rates by race and gender using Pandas, NumPy, and Seaborn.",
    tech: ["Python", "Pandas", "Seaborn"],
  },
  {
    title: "Payment Page UI",
    description:
      "Clean payment form interface with input validation and interactive UI elements for a seamless checkout flow.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "SolarEclipse Website",
    description:
      "Informational website focused on solar energy and environmental awareness with a modern visual design.",
    tech: ["HTML", "CSS"],
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen text-[#FFFFFF]">
      <Navbar />
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-[#D73B02]/20 bg-[#D73B02]/5">
            <Star className="w-3 h-3 text-[#D73B02]" />
            <span className="text-xs font-semibold text-[#D73B02] tracking-wide uppercase">Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D73B02] to-[#FF6B35]">Projects</span>
          </h1>
          <p className="text-[#888888] max-w-lg mx-auto text-base md:text-lg">
            A mix of real-world applications and practice projects built to sharpen my engineering skills.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-sm font-semibold text-[#D73B02] uppercase tracking-widest mb-8 flex items-center gap-2">
            <span className="w-8 h-px bg-[#D73B02]" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative rounded-2xl border border-[#ffffff]/10 bg-[#0a0a0a]/40 backdrop-blur-md p-6 md:p-8 hover:border-[#D73B02]/40 transition-all duration-500 overflow-hidden"
              >
                {/* Ambient glow */}
                <div
                  className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[100px] opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-500"
                  style={{ background: project.accent }}
                />
                {/* Accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-1" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#D73B02] font-medium">{project.subtitle}</p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-[#ffffff]/5 border border-[#ffffff]/10 flex items-center justify-center text-[#888888] hover:text-[#FFFFFF] hover:border-[#ffffff]/20 transition-all cursor-pointer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl bg-[#ffffff]/5 border border-[#ffffff]/10 flex items-center justify-center text-[#888888] hover:text-[#FFFFFF] hover:border-[#ffffff]/20 transition-all cursor-pointer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-[#AAAAAA] text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-[#ffffff]/5 border border-[#ffffff]/10 text-[#CCCCCC] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-sm font-semibold text-[#888888] uppercase tracking-widest mb-8 flex items-center gap-2">
            <span className="w-8 h-px bg-[#444444]" />
            Other Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.06 }}
                className="group rounded-xl border border-[#ffffff]/5 bg-[#0a0a0a]/30 backdrop-blur-sm p-5 hover:border-[#ffffff]/15 hover:bg-[#0a0a0a]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-2 mb-3">
                  <ArrowRight className="w-4 h-4 text-[#D73B02] mt-0.5 flex-shrink-0 opacity-60" />
                  <h3 className="text-sm font-bold text-[#FFFFFF] leading-tight">
                    {project.title}
                  </h3>
                </div>
                <p className="text-[#888888] text-xs leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] rounded-full bg-[#ffffff]/5 text-[#AAAAAA] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
