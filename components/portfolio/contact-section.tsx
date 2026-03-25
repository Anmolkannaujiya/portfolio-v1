"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, Mail, MapPin, Loader2, Linkedin, Github, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (res.ok) {
        setSubmitStatus("success")
      } else {
        setSubmitStatus("error")
        setErrorMsg(result.error || "Something went wrong")
      }
    } catch {
      setSubmitStatus("error")
      setErrorMsg("Network error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D73B02]/20 to-transparent" />

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
          <div className="w-24 h-1 bg-gradient-to-r from-[#D73B02] to-[#FF6B35] mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-[#FFFFFF] mb-6">
              Let&apos;s connect and create something amazing!
            </h3>
            <p className="text-[#AAAAAA] mb-8 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#D73B02]/10 flex items-center justify-center group-hover:bg-[#D73B02]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[#D73B02]" />
                </div>
                <div>
                  <p className="text-xs text-[#AAAAAA] uppercase tracking-wider">Email</p>
                  <a href="mailto:anmolkannaujiya@outlook.com" className="text-[#FFFFFF] hover:text-[#D73B02] transition-colors text-sm">
                    anmolkannaujiya@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#D73B02]/10 flex items-center justify-center group-hover:bg-[#D73B02]/20 transition-colors">
                  <MapPin className="w-5 h-5 text-[#D73B02]" />
                </div>
                <div>
                  <p className="text-xs text-[#AAAAAA] uppercase tracking-wider">Location</p>
                  <p className="text-[#FFFFFF] text-sm">Gorakhpur, UP</p>
                </div>
              </div>
            </div>

            {/* Social links - colorful */}
            <div className="flex gap-3">
              <motion.a
                href="https://github.com/Anmolkannaujiya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] flex items-center justify-center text-[#AAAAAA] hover:text-[#FFFFFF] hover:border-[#FFFFFF]/40 hover:bg-[#FFFFFF]/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/anmolkannaujiya/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#0a0a0a] border border-[#2a2a2a] flex items-center justify-center text-[#AAAAAA] hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(10,102,194,0.15)]"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <Button
                asChild
                className="bg-[#D73B02] hover:bg-[#D73B02]/90 text-[#FFFFFF] hover:shadow-[0_0_20px_rgba(215,59,2,0.4)] transition-all"
              >
                <a href="mailto:anmolkannaujiya@outlook.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {submitStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex items-center justify-center bg-[#0a0a0a]/60 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-8"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#00C853]/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[#00C853]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">Message Sent!</h3>
                  <p className="text-[#AAAAAA]">Thank you for reaching out. I&apos;ll get back to you soon!</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#0a0a0a]/60 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-6 hover:border-[#2a2a2a]/80 transition-all">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#FFFFFF] mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
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
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-[#1a1a1a] border-[#2a2a2a] text-[#FFFFFF] placeholder:text-[#AAAAAA]/50 focus:border-[#D73B02] focus:ring-[#D73B02]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#FFFFFF] mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      required
                      className="bg-[#1a1a1a] border-[#2a2a2a] text-[#FFFFFF] placeholder:text-[#AAAAAA]/50 focus:border-[#D73B02] focus:ring-[#D73B02] resize-none"
                    />
                  </div>

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 px-3 py-2 rounded-lg">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D73B02] hover:bg-[#D73B02]/90 text-[#FFFFFF] transition-all hover:shadow-[0_0_20px_rgba(215,59,2,0.4)]"
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
