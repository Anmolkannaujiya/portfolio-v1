"use client"

import { Navbar } from "@/components/portfolio/navbar"
import { Footer } from "@/components/portfolio/footer"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const allProjects = [
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

export default function ProjectsPage() {
  return (
    <main className="min-h-screen text-[#FFFFFF]">
      <Navbar />
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto min-h-screen">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D73B02] to-[#FF6B35]">
            All Projects
          </span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl border border-white/10 bg-white/5 p-6 hover:border-[#D73B02]/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D73B02]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <Button variant="ghost" size="icon" className="hover:text-[#D73B02] hover:bg-white/5" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:text-[#D73B02] hover:bg-white/5" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
