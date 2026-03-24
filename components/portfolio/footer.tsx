"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Heart, ArrowUp, Code2 } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Anmolkannaujiya",
    hoverColor: "#FFFFFF",
    hoverBg: "rgba(255,255,255,0.1)",
    hoverBorder: "rgba(255,255,255,0.4)",
    hoverShadow: "0 0 20px rgba(255,255,255,0.1)",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/anmolkannaujiya/",
    hoverColor: "#0A66C2",
    hoverBg: "rgba(10,102,194,0.1)",
    hoverBorder: "rgba(10,102,194,0.4)",
    hoverShadow: "0 0 20px rgba(10,102,194,0.15)",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:anmolkannaujiya@outlook.com",
    hoverColor: "#D73B02",
    hoverBg: "rgba(215,59,2,0.1)",
    hoverBorder: "rgba(215,59,2,0.4)",
    hoverShadow: "0 0 20px rgba(215,59,2,0.15)",
  },
]

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-[#ffffff]/5">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D73B02]/30 to-transparent" />

      {/* Back to top */}
      <div className="flex justify-center -mt-6 relative z-10">
        <motion.button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-[#D73B02] text-[#FFFFFF] flex items-center justify-center cursor-pointer hover:bg-[#FF6B35] transition-all hover:shadow-[0_0_30px_rgba(215,59,2,0.5)] hover:scale-110"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>

      <div className="container mx-auto px-6 pt-12 pb-8">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-3xl font-bold text-[#FFFFFF] mb-4"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Anmol<span className="text-[#D73B02]">.</span>
              </h3>
              <p className="text-[#AAAAAA] text-sm leading-relaxed mb-6 max-w-md">
                Computer Science student passionate about AI, Data Science, and building
                intelligent solutions. Always eager to learn, collaborate, and create something impactful.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#AAAAAA] mb-4">
                <MapPin className="w-4 h-4 text-[#D73B02] flex-shrink-0" />
                <span>Barhalganj, Gorakhpur, UP, India 273402</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#AAAAAA]">
                <Mail className="w-4 h-4 text-[#D73B02] flex-shrink-0" />
                <a href="mailto:anmolkannaujiya@outlook.com" className="hover:text-[#D73B02] transition-colors">
                  anmolkannaujiya@outlook.com
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-[#FFFFFF] font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#AAAAAA] hover:text-[#D73B02] transition-colors text-sm flex items-center gap-2 group cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    <span className="w-0 h-px bg-[#D73B02] group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect - colorful icons */}
          <div className="md:col-span-4">
            <h4 className="text-[#FFFFFF] font-semibold mb-4 text-sm uppercase tracking-wider">Let&apos;s Connect</h4>
            <p className="text-sm text-[#AAAAAA] mb-6">
              Open to opportunities, collaborations, and interesting conversations.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#0a0a0a]/40 backdrop-blur-md border border-[#ffffff]/10 flex items-center justify-center text-[#AAAAAA] cursor-pointer transition-all duration-300"
                  style={{
                    ["--hover-color" as string]: social.hoverColor,
                    ["--hover-bg" as string]: social.hoverBg,
                  }}
                  whileHover={{
                    scale: 1.15,
                    y: -3,
                    backgroundColor: social.hoverBg,
                    borderColor: social.hoverBorder,
                    boxShadow: social.hoverShadow,
                    color: social.hoverColor,
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#ffffff]/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#AAAAAA] flex items-center gap-1.5">
              © {new Date().getFullYear()} Anmol Kannaujiya. Crafted with
              <Heart className="w-3.5 h-3.5 text-[#D73B02] inline" />
              using
              <Code2 className="w-3.5 h-3.5 text-[#AAAAAA] inline" />
              Next.js & Tailwind
            </p>
            <p className="text-xs text-[#AAAAAA]/50">
              Designed & Developed by Anmol Kannaujiya
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
