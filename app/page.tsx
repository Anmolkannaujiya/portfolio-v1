"use client"

import { Navbar } from "@/components/portfolio/navbar"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { CertificationsSection } from "@/components/portfolio/certifications-section"
import { AchievementsSection } from "@/components/portfolio/achievements-section"
import { TrainingSection } from "@/components/portfolio/training-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#FFFFFF]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <AchievementsSection />
      <TrainingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
