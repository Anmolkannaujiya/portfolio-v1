"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, Mail, MapPin, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-[#000000]" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Get In <span className="text-[#D73B02]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#D73B02] mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[#FFFFFF] mb-6">
              Let's connect and create something amazing together!
            </h3>
            <p className="text-[#AAAAAA] mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#D73B02]/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#D73B02]" />
                </div>
                <div>
                  <p className="text-sm text-[#AAAAAA]">Email</p>
                  <a href="mailto:anmolkannaujiya@outlook.com" className="text-[#FFFFFF] hover:text-[#D73B02] transition-colors">
                    anmolkannaujiya@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#D73B02]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#D73B02]" />
                </div>
                <div>
                  <p className="text-sm text-[#AAAAAA]">Location</p>
                  <p className="text-[#FFFFFF]">Barhalganj, Gorakhpur, UP, India 273402</p>
                </div>
              </div>
            </div>

            {/* Direct email button */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <Button
                asChild
                className="bg-[#D73B02] hover:bg-[#D73B02]/90 text-[#FFFFFF] hover:shadow-[0_0_20px_rgba(215,59,2,0.5)]"
              >
                <a href="mailto:anmolkannaujiya@outlook.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Direct Email
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex items-center justify-center bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-8"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#D73B02]/20 flex items-center justify-center">
                    <Send className="w-8 h-8 text-[#D73B02]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">Message Sent!</h3>
                  <p className="text-[#AAAAAA]">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#0a0a0a]/50 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#FFFFFF] mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="bg-[#1a1a1a] border-[#2a2a2a] text-[#FFFFFF] placeholder:text-[#AAAAAA]/50 focus:border-[#D73B02] focus:ring-[#D73B02]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#FFFFFF] mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-[#1a1a1a] border-[#2a2a2a] text-[#FFFFFF] placeholder:text-[#AAAAAA]/50 focus:border-[#D73B02] focus:ring-[#D73B02]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#FFFFFF] mb-2">
                      Message / Suggestions
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message or suggestions..."
                      rows={5}
                      required
                      className="bg-[#1a1a1a] border-[#2a2a2a] text-[#FFFFFF] placeholder:text-[#AAAAAA]/50 focus:border-[#D73B02] focus:ring-[#D73B02] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D73B02] hover:bg-[#D73B02]/90 text-[#FFFFFF] transition-all hover:shadow-[0_0_20px_rgba(215,59,2,0.5)]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
