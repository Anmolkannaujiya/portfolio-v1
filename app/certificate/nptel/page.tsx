import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: 'NPTEL Certificate | Anmol Kannaujiya',
  description: 'Design and Implementation of Human-Computer Interfaces Certificate',
}

export default function NptelCertificatePage() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] flex flex-col relative overflow-hidden">
      {/* Background elements for a premium feel */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D73B02]/40 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D73B02] rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />

      {/* Header */}
      <div className="p-6 md:px-12 md:py-8 flex items-center justify-between relative z-10 border-b border-[#222222]">
        <Link 
          href="/#certifications" 
          className="inline-flex items-center gap-2 text-[#AAAAAA] hover:text-[#D73B02] transition-colors font-medium text-sm md:text-base border border-transparent hover:border-[#D73B02]/30 px-4 py-2 rounded-lg hover:bg-[#D73B02]/5"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <a 
          href="/nptel.pdf" 
          download 
          className="inline-flex items-center gap-2 text-[#FFFFFF] bg-[#D73B02] hover:bg-[#FF6B35] transition-colors font-medium text-sm md:text-base px-5 py-2 rounded-lg shadow-[0_0_15px_rgba(215,59,2,0.3)]"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </a>
      </div>

      {/* Title Area */}
      <div className="text-center py-8 relative z-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          Design and Implementation of Human-Computer Interfaces
        </h1>
        <p className="text-[#AAAAAA]">Issued by NPTEL • Nov 2025</p>
      </div>

      {/* Viewer Area */}
      <div className="flex-1 flex flex-col items-center justify-start p-6 pt-0 relative z-10">
        <div className="w-full max-w-6xl h-[75vh] relative rounded-2xl overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.5)] border border-[#333333] bg-[#111111]">
          {/* Fallback overlay in case iframe fails on some mobile devices */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center -z-10">
             <p className="text-[#AAAAAA] mb-4">If the PDF doesn't display automatically, you can download it below.</p>
             <a href="/nptel.pdf" download className="text-[#D73B02] underline hover:text-[#FF6B35]">Download Certificate</a>
          </div>
          
          <iframe
            src="/nptel.pdf#zoom=FitH"
            className="w-full h-full border-none relative z-10 bg-transparent"
            title="NPTEL Certificate"
          />
        </div>
      </div>
    </div>
  )
}
