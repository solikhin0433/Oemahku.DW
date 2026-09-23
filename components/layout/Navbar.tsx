"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-4"
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-12 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 overflow-hidden flex items-center justify-center">
            <Image
              src="/Asset/Logo/LOGO.png"
              alt="OEMAHKU.DW Logo"
              width={36}
              height={36}
              className="object-contain w-auto h-8 brightness-0 invert drop-shadow"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-heading font-black tracking-tight text-white transition-colors">
              OEMAHKU<span className="text-[#B98A4D]">.DW</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/85 hover:text-white transition-colors text-xs font-semibold uppercase tracking-[0.2em] relative py-1 hover:text-[#B98A4D] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#B98A4D] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            className="p-2 rounded border border-white/20 text-white bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl md:hidden overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded text-white/90 hover:text-[#B98A4D] hover:bg-white/5 transition-colors text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[#B98A4D] text-xs">/&gt;</span>
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3.5 rounded bg-[#B98A4D] hover:bg-[#A07840] text-white font-bold text-center text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#B98A4D]/25"
                >
                  <span>Mulai Konsultasi Gratis</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
