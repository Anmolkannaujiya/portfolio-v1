import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import ParticleBackground from '@/components/ParticleBackground'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit'
});

export const metadata: Metadata = {
  title: 'Anmol Kannaujiya | AI & Data Science Developer Portfolio',
  description: 'Portfolio of Anmol Kannaujiya — Computer Science student specializing in AI, Data Science & Machine Learning. Building intelligent systems that solve real-world problems. Skilled in Python, TensorFlow, and cloud technologies.',
  generator: 'Next.js',
  keywords: ['Anmol Kannaujiya', 'AI Developer', 'Data Science', 'Machine Learning', 'Python', 'Portfolio', 'Full Stack Developer', 'DevOps', 'AWS', 'TensorFlow'],
  authors: [{ name: 'Anmol Kannaujiya', url: 'https://github.com/Anmolkannaujiya' }],
  creator: 'Anmol Kannaujiya',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Anmol Kannaujiya | AI & Data Science Developer',
    description: 'Computer Science student building AI-driven systems that solve real-world problems. Explore my projects, skills, and achievements.',
    siteName: 'Anmol Kannaujiya Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anmol Kannaujiya | AI & Data Science Developer',
    description: 'Computer Science student building AI-driven systems that solve real-world problems.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${outfit.variable} font-sans antialiased`} style={{ background: '#000', margin: 0 }}>
        <ParticleBackground />
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
