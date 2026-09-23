"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const phoneNumber = "6281234567890";
  const message = encodeURIComponent(
    "Halo OEMAHKU.DW, saya ingin konsultasi mengenai jasa desain rumah / 3D arsitektur."
  );

  return (
    <aside aria-label="Kontak WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center group">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          alert("Nomor WhatsApp menyusul segera.");
        }}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-[#E6E2DC] hover:border-[#B98A4D] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
      >
        <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm shrink-0">
          <MessageCircle size={18} fill="currentColor" />
        </div>
        <span className="text-xs md:text-sm font-semibold text-[#0D0D0D] pr-1 whitespace-nowrap">
          Konsultasi Gratis
        </span>
      </a>
    </aside>
  );
}
