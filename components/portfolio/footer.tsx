"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Heart } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Anmolkannaujiya",
    color: "hover:text-[#FFFFFF]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/anmolkannaujiya/",
    color: "hover:text-[#0A66C2]",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:anmolkannaujiya@outlook.com",
    color: "hover:text-[#D73B02]",
  },
]

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              className="text-2xl font-bold text-[#FFFFFF] mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Anmol<span className="text-[#D73B02]">.</span>
            </motion.h3>
            <p className="text-[#AAAAAA] text-sm leading-relaxed mb-4">
              Computer Science student passionate about AI and Data Science. 
              Building intelligent solutions for tomorrow's challenges.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#AAAAAA]">
              <MapPin className="w-4 h-4 text-[#D73B02]" />
              <span>Barhalganj, Gorakhpur, UP, India 273402</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#FFFFFF] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#AAAAAA] hover:text-[#D73B02] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[#FFFFFF] font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#AAAAAA] ${social.color} transition-all hover:border-[#D73B02]/50 hover:shadow-[0_0_15px_rgba(215,59,2,0.2)]`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#2a2a2a] text-center">
          <p className="text-sm text-[#AAAAAA]">
            © {new Date().getFullYear()} Anmol Kannaujiya. Made with{" "}
            <Heart className="w-4 h-4 inline text-[#D73B02]" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
