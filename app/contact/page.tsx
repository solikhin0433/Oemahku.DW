"use client";

import { useState } from "react";
import { Mail, Phone, Camera, Smartphone, PlayCircle, Users } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleWhatsAppSubmit = () => {
    if (!formData.name || !formData.service) {
      alert("Mohon lengkapi Nama dan Jenis Layanan terlebih dahulu.");
      return;
    }

    const waNumber = "6285791587968";
    
    const serviceMap: Record<string, string> = {
      arsitektur: "Desain Arsitektur (3D Fasad + Denah)",
      interior: "Desain Interior",
      ded: "Gambar Kerja (DED) & RAB Saja",
      full: "Paket Lengkap (Arsitektur + DED + RAB)",
      other: "Lainnya",
    };
    
    const serviceName = serviceMap[formData.service] || formData.service;

    const text = `Halo OEMAHKU.DW, saya ingin berkonsultasi:\n\n*Nama:* ${formData.name}\n*No. WA:* ${formData.phone}\n*Layanan:* ${serviceName}\n*Detail Proyek:* ${formData.message}\n\nTerima kasih.`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${waNumber}?text=${encodedText}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-[#F7F5F2]">
      {/* Hero Section */}
      <section className="bg-[#0D0D0D] text-white pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Asset/home/home_latarbelakang.png"
            alt="Contact Hero Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#0D0D0D]/80 backdrop-blur-sm" />
        </div>
        <div className="container relative z-20 mx-auto px-4 md:px-8 max-w-6xl text-center">
          <span className="text-[#B98A4D] text-xs font-bold uppercase tracking-widest block mb-4">
            Hubungi Kami
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-6">
            Mari Wujudkan Rumah Impian Anda
          </h1>
          <p className="text-[#A0A0A0] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Punya pertanyaan seputar layanan kami atau siap untuk memulai proyek desain? Tim kami siap membantu Anda dari tahap konsep hingga gambar kerja final.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Left: Contact Info */}
            <div>
              <h2 className="text-3xl font-heading font-black text-[#0D0D0D] tracking-tight mb-8">
                Informasi Kontak
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-[#B98A4D]/10 flex items-center justify-center text-[#0D0D0D]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#0D0D0D] mb-1">WhatsApp / Telepon</h3>
                    <p className="text-[#666666] text-sm mb-2">Konsultasi cepat secara langsung</p>
                    <a href="https://wa.me/6285791587968" target="_blank" rel="noopener noreferrer" className="text-[#B98A4D] font-bold hover:underline">
                      +62 857-9158-7968
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-[#B98A4D]/10 flex items-center justify-center text-[#0D0D0D]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#0D0D0D] mb-1">Email</h3>
                    <p className="text-[#666666] text-sm mb-2">Untuk keperluan bisnis dan penawaran</p>
                    <a href="mailto:oemahkuid@gmail.com" className="text-[#B98A4D] font-bold hover:underline">
                      oemahkuid@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-[#B98A4D]/10 flex items-center justify-center text-[#0D0D0D]">
                    <Camera size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#0D0D0D] mb-1">Instagram</h3>
                    <p className="text-[#666666] text-sm mb-2">Lihat portofolio dan update terbaru</p>
                    <a href="https://www.instagram.com/oemahku.dw?stkn=ZWd0MTIwYmlodmRn" target="_blank" rel="noopener noreferrer" className="text-[#B98A4D] font-bold hover:underline">
                      @oemahku.dw
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-[#B98A4D]/10 flex items-center justify-center text-[#0D0D0D]">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#0D0D0D] mb-1">TikTok</h3>
                    <p className="text-[#666666] text-sm mb-2">Inspirasi desain dalam video singkat</p>
                    <a href="https://www.tiktok.com/@oemahku.dw?_r=1&_t=ZS-99wsk8BwdPA" target="_blank" rel="noopener noreferrer" className="text-[#B98A4D] font-bold hover:underline">
                      @oemahku.dw
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-[#B98A4D]/10 flex items-center justify-center text-[#0D0D0D]">
                    <PlayCircle size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#0D0D0D] mb-1">YouTube</h3>
                    <p className="text-[#666666] text-sm mb-2">Tur rumah dan penjelasan detail desain</p>
                    <a href="https://youtube.com/@oemahkudewe?si=iwNay8tPm7WZmt3w" target="_blank" rel="noopener noreferrer" className="text-[#B98A4D] font-bold hover:underline">
                      oemahkudw
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-[#B98A4D]/10 flex items-center justify-center text-[#0D0D0D]">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#0D0D0D] mb-1">Facebook</h3>
                    <p className="text-[#666666] text-sm mb-2">Terhubung dengan komunitas kami</p>
                    <a href="https://www.facebook.com/share/19oAtL1mLP/" target="_blank" rel="noopener noreferrer" className="text-[#B98A4D] font-bold hover:underline">
                      Oemahku Dwe
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#E6E2DC] shadow-sm relative">
              <h2 className="text-2xl font-heading font-bold text-[#0D0D0D] mb-2">
                Kirimkan Pesan
              </h2>
              <p className="text-[#666666] text-sm mb-8">
                Isi form di bawah ini dan tim kami akan segera membalasnya.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-[#0D0D0D]">Nama Lengkap</label>
                    <input 
                      type="text" 
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#E6E2DC] bg-[#F7F5F2] focus:outline-none focus:border-[#B98A4D] focus:ring-1 focus:ring-[#B98A4D] transition-colors"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-[#0D0D0D]">Nomor WhatsApp</label>
                    <input 
                      type="tel" 
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#E6E2DC] bg-[#F7F5F2] focus:outline-none focus:border-[#B98A4D] focus:ring-1 focus:ring-[#B98A4D] transition-colors"
                      placeholder="Contoh: 0812..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-bold text-[#0D0D0D]">Layanan yang Dibutuhkan</label>
                  <select 
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#E6E2DC] bg-[#F7F5F2] focus:outline-none focus:border-[#B98A4D] focus:ring-1 focus:ring-[#B98A4D] transition-colors text-[#0D0D0D]"
                  >
                    <option value="" disabled>Pilih jenis layanan</option>
                    <option value="arsitektur">Desain Arsitektur (3D Fasad + Denah)</option>
                    <option value="interior">Desain Interior</option>
                    <option value="ded">Gambar Kerja (DED) & RAB Saja</option>
                    <option value="full">Paket Lengkap (Arsitektur + DED + RAB)</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-[#0D0D0D]">Detail Proyek / Pesan</label>
                  <textarea 
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#E6E2DC] bg-[#F7F5F2] focus:outline-none focus:border-[#B98A4D] focus:ring-1 focus:ring-[#B98A4D] transition-colors resize-none"
                    placeholder="Ceritakan sedikit tentang rencana luasan tanah, gaya bangunan yang disuka, dll."
                  ></textarea>
                </div>

                <button 
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="w-full py-4 rounded-lg bg-[#B98A4D] text-white font-bold tracking-wide hover:bg-[#9a703d] transition-colors flex items-center justify-center gap-2"
                >
                  Kirim Pesan via WhatsApp
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
