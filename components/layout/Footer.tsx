import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-[#A0A0A0] py-16 border-t border-[#A0A0A0]/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="mb-6 inline-flex items-center gap-3">
              <Image
                src="/Asset/Logo/LOGO.png"
                alt="OEMAHKU.DW Logo"
                width={40}
                height={40}
                className="h-9 w-auto object-contain brightness-0 invert drop-shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-black tracking-tight text-[#F7F5F2]">
                  OEMAHKU<span className="text-[#B98A4D]">.DW</span>
                </span>
                <span className="text-[10px] tracking-widest text-[#A0A0A0] uppercase -mt-1 font-semibold">
                  Jasa Desain Rumah Online & Arsitektur
                </span>
              </div>
            </Link>
            <p className="text-[#A0A0A0] mb-6 max-w-md text-sm leading-relaxed">
              Solusi jasa desain rumah online profesional dengan visualisasi 3D konsep arsitektur, gambar kerja DED, RAB, dan desain interior berkualitas.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-heading font-bold text-[#F7F5F2] uppercase tracking-widest mb-5">
              Menu Utama
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-[#A0A0A0] hover:text-[#B98A4D] transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#A0A0A0] hover:text-[#B98A4D] transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#A0A0A0] hover:text-[#B98A4D] transition-colors">
                  Paket & Layanan
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-[#A0A0A0] hover:text-[#B98A4D] transition-colors">
                  Portofolio Desain
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#A0A0A0] hover:text-[#B98A4D] transition-colors">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-heading font-bold text-[#F7F5F2] uppercase tracking-widest mb-5">
              Kontak Kami
            </h4>
            <ul className="space-y-4 text-sm text-[#A0A0A0] mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#B98A4D] shrink-0 mt-0.5" size={18} />
                <span className="text-[#F7F5F2]/90">Solo & Surakarta, Jawa Tengah, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#B98A4D] shrink-0" size={18} />
                <span className="text-[#F7F5F2]/90 italic">Menyusul segera</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#B98A4D] shrink-0" size={18} />
                <span className="text-[#F7F5F2]/90">oemahkuid@gmail.com</span>
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="https://www.tiktok.com/@oemahku.dw?_r=1&_t=ZS-99wsk8BwdPA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-[#A0A0A0] hover:text-[#F7F5F2] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a
                href="https://www.facebook.com/share/19oAtL1mLP/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#A0A0A0] hover:text-[#1877F2] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/oemahku.dw?stkn=ZWd0MTIwYmlodmRn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#A0A0A0] hover:text-[#E4405F] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="https://youtube.com/@oemahkudewe?si=iwNay8tPm7WZmt3w"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-[#A0A0A0] hover:text-[#FF0000] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#A0A0A0]/20 text-[#A0A0A0] text-xs flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} OEMAHKU.DW — Jasa Desain Rumah Online. All rights reserved.</p>
          <p className="text-[#A0A0A0]/80">
            Desain Rumah Minimalis, Modern &amp; Tropis
          </p>
        </div>
      </div>
    </footer>
  );
}
