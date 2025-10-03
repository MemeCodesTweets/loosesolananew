// components/Navbar.tsx
"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { CiPill } from "react-icons/ci";

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(true)
  const lastScrollRef = useRef(0)

  const navItem = "text-base md:text-sm lg:text-base tracking-wide hover:opacity-80 transition-opacity"
  const socialIcon = "inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-white/10 transition-colors"

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      if (current > lastScrollRef.current && current > 80) {
        setShow(false)
        setOpen(false)
      } else {
        setShow(true)
      }
      lastScrollRef.current = current
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 font-sans transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="mx-auto max-w-6xl py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="logo" width={48} height={48} className="rounded-full" priority />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10 xl:gap-12 text-white">
            <Link href="#about" className={navItem}>
              About
            </Link>
            <Link href="#buy" className={navItem}>
              Buy
            </Link>
            <Link href="#roadmap" className={navItem}>
              Roadmap
            </Link>

            <Link href="https://pump.fun/coin/GSSPA5zDNqpmao8BFnUHnnQrc3tgUeoVSesXtHhxpump" passHref legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-black bg-loose hover:bg-loose/90 transition-colors"
              >
                <CiPill />
                <span>Watch on pump</span>
              </a>
            </Link>

            <Link href="https://x.com/Looseonsol" target="_blank" className={socialIcon} aria-label="X">
              <FaXTwitter size={25} />
            </Link>
            <Link href="https://www.instagram.com/looseonsol" target="_blank" className={socialIcon} aria-label="Instagram">
              <FaInstagram size={25} />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-white/10"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-white">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile full-width overlay menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-[72px] bg-black/60 backdrop-blur-sm px-4 pb-8 z-40"
        >
          <div className="mx-auto bg-black/95 backdrop-blur-md rounded-2xl max-w-6xl p-6">
            <nav className="text-white flex flex-col gap-6">
              <Link href="#about" onClick={() => setOpen(false)} className={navItem}>
                About
              </Link>
              <Link href="#buy" onClick={() => setOpen(false)} className={navItem}>
                Buy
              </Link>
              <Link href="#roadmap" onClick={() => setOpen(false)} className={navItem}>
                Roadmap
              </Link>
            </nav>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link href="https://pump.fun/coin/GSSPA5zDNqpmao8BFnUHnnQrc3tgUeoVSesXtHhxpump" passHref legacyBehavior>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-black bg-loose hover:bg-loose/90 transition-colors"
                >
                  <CiPill />
                  <span>Watch on pump</span>
                </a>
              </Link>

              <div className="flex items-center gap-3">
                <Link href="https://x.com/Looseonsol" target="_blank" className={socialIcon} aria-label="X">
                  <FaXTwitter size={22} />
                </Link>
                <Link href="https://www.instagram.com/looseonsol" target="_blank" className={socialIcon} aria-label="Instagram">
                  <FaInstagram size={22} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
