import { Instagram, Twitter } from "lucide-react"
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden min-h-[250px]">
      {/* Gradient glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-transparent pointer-events-none" />

      <div className="hidden md:block absolute left-[-20] bottom-[-20] w-32 h-32 lg:w-48 lg:h-48">
        <img src="/characters/character3.png" alt="Mascot character" className="w-full h-full object-contain" />
      </div>

      <div className="hidden md:block absolute right-[-20] bottom-[-20] w-32 h-40 lg:w-48 lg:h-56">
        <img src="/footer.png" alt="Character with glasses" className="w-full h-full object-contain" />
      </div>

      <div className="relative px-6 md:px-48 lg:px-56 py-16">
        <div className="flex items-center justify-between gap-8">
          {/* Left side - Branding and copyright */}
          <div className="flex flex-col gap-4 z-10">
            <h2 className="text-5xl md:text-7xl uppercase font-beba">
              Never Lose On <span className="text-[#F54748]">$Loose</span>
            </h2>

            <div className="flex items-center gap-3">
              <p className="text-sm font-sans text-gray-400">Copyright © 2025 Loose. All Rights Reserved.</p>
            </div>
          </div>

          {/* Right side - Social media icons */}
          <div className="flex items-center gap-4 z-10">
            <a
              href="https://www.instagram.com/looseonsol"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#F54748] hover:bg-[#d54d4d] transition-all flex items-center justify-center shadow-[0_0_30px_rgba(232,93,93,0.8)]"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6 text-white" />
            </a>
            
            {/* 
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#F54748] hover:bg-[#d54d4d] transition-all flex items-center justify-center shadow-[0_0_30px_rgba(232,93,93,0.8)]"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6 text-white" />
            </a>
            */}

            <a
              href="https://x.com/Looseonsol"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#F54748] hover:bg-[#d54d4d] transition-all flex items-center justify-center shadow-[0_0_30px_rgba(232,93,93,0.8)]"
              aria-label="Twitter"
            >
              <FaXTwitter size={25} />
            </a>

            {/*
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#F54748] hover:bg-[#d54d4d] transition-all flex items-center justify-center shadow-[0_0_30px_rgba(232,93,93,0.8)]"
              aria-label="Discord"
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </a>
            */}
          </div>
        </div>
      </div>
    </footer>
  )
}
