"use client"

import dynamic from "next/dynamic"
import { Navbar } from "@/components/portfolio/navbar"
import { HeroSection } from "@/components/portfolio/hero-section"
import { LoadingScreen } from "@/components/portfolio/loading-screen"
import { CustomCursor } from "@/components/portfolio/custom-cursor"

// Lazy load below-the-fold sections
const AboutSection = dynamic(() => import("@/components/portfolio/about-section").then(mod => ({ default: mod.AboutSection })), { ssr: true })
const SkillsSection = dynamic(() => import("@/components/portfolio/skills-section").then(mod => ({ default: mod.SkillsSection })), { ssr: true })
const ProjectsSection = dynamic(() => import("@/components/portfolio/projects-section").then(mod => ({ default: mod.ProjectsSection })), { ssr: true })
const CertificationsSection = dynamic(() => import("@/components/portfolio/certifications-section").then(mod => ({ default: mod.CertificationsSection })), { ssr: true })
const AchievementsSection = dynamic(() => import("@/components/portfolio/achievements-section").then(mod => ({ default: mod.AchievementsSection })), { ssr: true })
const TrainingSection = dynamic(() => import("@/components/portfolio/training-section").then(mod => ({ default: mod.TrainingSection })), { ssr: true })
const ContactSection = dynamic(() => import("@/components/portfolio/contact-section").then(mod => ({ default: mod.ContactSection })), { ssr: true })
const Footer = dynamic(() => import("@/components/portfolio/footer").then(mod => ({ default: mod.Footer })), { ssr: true })

export default function PortfolioPage() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <main className="relative min-h-screen text-[#FFFFFF] z-[1]">
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
    </>
  )
}
