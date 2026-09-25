import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Target, Heart, Eye, Users } from "lucide-react";
import BackgroundSlider from "@/components/ui/BackgroundSlider";

export const metadata = {
  title: "Tentang Kami | OEMAHKU.DW",
  description: "Kenali lebih dekat OEMAHKU.DW, solusi jasa desain rumah online dan arsitektur terpercaya Anda.",
};

const advantages = [
  {
    title: "100% Online & Praktis",
    description: "Konsultasi dan revisi desain dilakukan secara virtual, menghemat waktu dan tenaga Anda tanpa perlu tatap muka langsung.",
    icon: CheckCircle2,
  },
  {
    title: "Desain Kustom & Eksklusif",
    description: "Setiap desain dibuat unik menyesuaikan kebutuhan spesifik, luas lahan, dan selera gaya bangunan impian Anda.",
    icon: Heart,
  },
  {
    title: "Output Super Lengkap",
    description: "Mendapatkan paket lengkap berupa Visualisasi 3D fotorealistis, Gambar Kerja (DED) untuk tukang, dan perhitungan RAB.",
    icon: Eye,
  },
  {
    title: "Profesional & Responsif",
    description: "Tim desain arsitektur kami selalu siap mendengarkan, berdiskusi, dan memberikan solusi tata ruang terbaik untuk hunian Anda.",
    icon: Users,
  },
];

const workSteps = [
  {
    number: "01",
    title: "Konsultasi & Kebutuhan",
    description: "Diskusi awal mengenai ukuran lahan, gaya bangunan (minimalis, tropis, dll), dan rencana anggaran.",
  },
  {
    number: "02",
    title: "Pembuatan Denah",
    description: "Eksplorasi tata ruang 2D untuk memastikan flow sirkulasi dan penempatan ruangan yang optimal.",
  },
  {
    number: "03",
    title: "Visualisasi 3D",
    description: "Proses rendering 3D fasad eksterior dan interior agar Anda mendapat gambaran nyata bangunan.",
  },
  {
    number: "04",
    title: "Penyerahan Berkas",
    description: "Revisi final dan penyerahan dokumen lengkap berupa cetak DED & RAB yang siap digunakan untuk pembangunan.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F7F5F2] text-[#0D0D0D]">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 overflow-hidden bg-[#0D0D0D]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Asset/home/home_latarbelakang.png"
            alt="OEMAHKU.DW Architecture Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0D0D0D]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
          <span className="text-[#B98A4D] text-sm font-bold uppercase tracking-widest block mb-4">
            Tentang <span className="text-white">OEMAHKU</span>.DW
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white tracking-tight mb-6">
            Mewujudkan Rumah Impian Anda, <br className="hidden md:block" />
            <span className="text-[#B98A4D]">Kapan Saja & Di Mana Saja</span>
          </h1>
          <p className="text-[#A0A0A0] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            OEMAHKU.DW adalah mitra terpercaya Anda dalam jasa desain arsitektur dan interior yang 100% online, praktis, dan mengedepankan kualitas profesional.
          </p>
        </div>
      </section>

      {/* 2. Cerita Kami (Visi & Misi) */}
      <section className="relative py-20 bg-white border-t border-[#E6E2DC] overflow-hidden">
        {/* Decorative Background Blob for Glassmorphism */}
        <div className="absolute top-1/2 left-0 md:left-1/4 -translate-y-1/2 w-72 h-72 bg-[#B98A4D]/20 rounded-full blur-[80px] z-0 pointer-events-none"></div>

        <div className="container relative mx-auto px-4 md:px-8 max-w-6xl z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side (Glassmorphism Card) */}
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden bg-black/60 backdrop-blur-2xl shadow-2xl border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent z-10 pointer-events-none mix-blend-overlay"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 z-20">
                {/* Logo Graphic (cropped to hide original text) */}
                <Image 
                  src="/Asset/Logo/LOGO.png" 
                  alt="OEMAHKU.DW Logo Graphic" 
                  width={200}
                  height={200}
                  className="w-auto h-auto max-h-[50%] object-contain opacity-90 brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
                  style={{ clipPath: "inset(0 0 26% 0)", marginBottom: "-10%" }}
                />
                {/* HTML Text to achieve White and Gold colors */}
                <div className="flex flex-col items-center text-center mt-2">
                  <span className="text-3xl md:text-4xl font-heading font-black tracking-tight text-white drop-shadow-md">
                    OEMAHKU<span className="text-[#B98A4D]">.DW</span>
                  </span>
                  <span className="text-xs md:text-sm tracking-widest text-[#A0A0A0] uppercase font-semibold mt-1 drop-shadow-sm">
                    ARCHITECTURE & CONTRACTOR
                  </span>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div>
              <span className="text-[#B98A4D] text-xs font-bold uppercase tracking-widest block mb-3">
                Kisah Kami
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-[#0D0D0D] tracking-tight mb-6">
                Berawal dari Semangat Membangun Kemudahan
              </h2>
              <div className="space-y-6 text-[#666666] text-base leading-relaxed">
                <p>
                  Berawal dari semangat untuk mempermudah akses ke desain arsitektur berkualitas, OEMAHKU.DW hadir sebagai solusi jasa desain rumah online bagi masyarakat modern.
                </p>
                <p>
                  Kami percaya bahwa setiap orang berhak memiliki rumah impian yang tidak hanya estetik secara visual, tapi juga fungsional, sehat, dan sesuai dengan batasan anggaran (budget) yang dimiliki.
                </p>
                <p>
                  Dengan tim desain arsitektur yang berpengalaman dan penuh passion, kami siap mendampingi perjalanan Anda merencanakan hunian idaman dari sebatas angan, berlanjut ke tahap konsep, hingga menjadi gambar kerja teknis (DED) dan perhitungan biaya (RAB) yang presisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Kenapa Memilih Kami (Keunggulan) */}
      <section className="relative py-28 border-t border-[#E6E2DC]">
        <BackgroundSlider 
          images={[
            "/Asset/1. MODERN 2 LT/A.png",
            "/Asset/home/home_latarbelakang.png"
          ]} 
        />
        <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#B98A4D] text-xs font-bold uppercase tracking-widest block mb-2">
              Keunggulan Layanan
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight mb-4">
              Kenapa Memilih OEMAHKU.DW?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white/95 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-[#B98A4D] transition-colors shadow-lg flex flex-col justify-center">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-[#0D0D0D] mb-2">{item.title}</h3>
                    <p className="text-[#666666] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Proses Kerja */}
      <section className="py-20 bg-white border-t border-[#E6E2DC]">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#B98A4D] text-xs font-bold uppercase tracking-widest block mb-2">
              Bagaimana Kami Bekerja
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0D0D0D] tracking-tight mb-4">
              Langkah Menuju Rumah Impian
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-[2px] bg-[#B98A4D]" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {/* Circle Icon */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-[#B98A4D] flex items-center justify-center text-white mb-6 shadow-md border-[6px] border-white">
                    <span className="font-heading font-bold text-lg">{idx + 1}</span>
                  </div>

                  {/* Card */}
                  <div className="bg-white p-6 rounded-xl border border-[#E6E2DC] w-full h-full text-left flex flex-col hover:border-[#B98A4D]/50 transition-colors shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold text-[#A0A0A0]">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-heading font-bold text-[#0D0D0D] mb-3 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[#666666] text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call to Action (CTA) */}
      <section className="py-24 bg-[#0D0D0D] text-center px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-white mb-6">
            Siap Membangun Rumah Impian Anda?
          </h2>
          <p className="text-[#A0A0A0] text-lg mb-10 max-w-xl mx-auto">
            Mari diskusikan visi Anda bersama kami dan temukan paket desain yang paling sesuai dengan kebutuhan Anda.
          </p>
          <a
            href="#"
            title="Nomor WhatsApp menyusul segera."
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#B98A4D] hover:bg-[#A07840] text-white font-bold rounded-lg transition-all duration-300 text-sm uppercase tracking-wider hover:-translate-y-0.5"
          >
            <span>Konsultasi Gratis Sekarang</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}


