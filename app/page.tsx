"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  CheckCircle2,
  Box,
  FileText,
  Hammer,
  Sparkles,
  PhoneCall,
  Layers,
  Compass,
} from "lucide-react";
import { projects } from "@/data/projects";

const stats = [
  { value: "50+", label: "Desain Terselesaikan" },
  { value: "100%", label: "Gambar Kerja & RAB" },
  { value: "3D HD", label: "Render Fotorealistis" },
  { value: "5+", label: "Tahun Pengalaman" },
];

const features = [
  {
    icon: Compass,
    title: "Pendekatan Personal",
    description:
      "Setiap desain dirancang spesifik menyesuaikan gaya hidup, kebutuhan ruang, serta alokasi anggaran Anda.",
  },
  {
    icon: Box,
    title: "Visual 3D Fotorealistis",
    description:
      "Eksplorasi bangunan impian dengan render pencahayaan alami dan material nyata sebelum konstruksi dimulai.",
  },
  {
    icon: Layers,
    title: "Gambar Kerja Presisi",
    description:
      "Paket dokumen kerja teknis (DED) lengkap dari struktur, arsitektur, MEP hingga RAB detail siap tender.",
  },
];

const workSteps = [
  {
    number: "01",
    title: "Konsultasi & Brief",
    description: "Diskusi kebutuhan ruang, ukuran lahan, konsep gaya arsitektur, dan estimasi anggaran.",
  },
  {
    number: "02",
    title: "Konsep & Render 3D",
    description: "Pembuatan model 3D fasad eksterior & interior untuk memastikan kesesuaian estetika.",
  },
  {
    number: "03",
    title: "Revisi Terarah",
    description: "Penyempurnaan desain berdasarkan feedback Anda hingga mencapai kepuasan optimal.",
  },
  {
    number: "04",
    title: "DED & RAB Final",
    description: "Penyusunan gambar kerja detail dan Rencana Anggaran Biaya untuk panduan tukang/kontraktor.",
  },
];

function ProjectCarousel({ images, title }: { images: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4500); // Berganti setiap 4.5 detik (lebih lambat)
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`${title} image ${currentIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <div className="bg-[#F7F5F2] text-[#0D0D0D]">
      {/* Hero Section — Styled after reference Image 2 */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden px-4 md:px-8 pt-24 pb-20">
        {/* Full-bleed Background Image with Cinematic Dark Transparent Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Asset/home/home_latarbelakang.png"
            alt="OEMAHKU.DW Modern Architecture"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          {/* Subtle Dark Gradient Overlay for Maximum Elegance & Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />
        </div>

        {/* Hero Content — Centered Luxury Architecture Style */}
        <div className="relative z-10 max-w-4xl mx-auto my-auto flex flex-col items-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ color: "#FFFFFF" }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-architectural-serif font-bold text-white tracking-tight leading-[1.08] mb-6 drop-shadow-2xl"
          >
            Mewujudkan Ruang <br />
            <span
              style={{ color: "#B98A4D" }}
              className="font-architectural-serif font-bold text-[#B98A4D] block mt-2 drop-shadow-lg"
            >
              Impian Anda
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto font-light leading-relaxed mb-10 drop-shadow"
          >
            OEMAHKU.DW adalah studio yang berdedikasi tinggi dalam menghasilkan desain rumah tinggal Exterior dan Interior yang tidak hanya indah dipandang, tetapi juga nyaman dihuni. Pendekatan kami selalu personal, menggabungkan visi Anda dengan keahlian teknis dan estetika. Kami juga bergerak di bidang kontraktor sehingga hasil desain &amp; bangunan yang sudah jadi, bisa sesuai apa yang diinginkan klien kami.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
          >
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#B98A4D] hover:bg-[#A07840] text-white font-medium rounded transition-all duration-300 flex items-center justify-center gap-2 text-sm tracking-wider hover:-translate-y-0.5"
            >
              <span>Lihat Portofolio</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/35 hover:border-white rounded font-medium transition-all duration-300 backdrop-blur-sm text-sm tracking-wider flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <span>Konsultasi Gratis</span>
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator at Bottom */}
        <div
          className="relative z-10 mt-auto pt-6 flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors cursor-pointer"
          onClick={() => {
            const nextEl = document.getElementById("portofolio-section");
            nextEl?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ChevronDown size={20} className="animate-bounce" />
        </div>
      </section>

      {/* Stats Bar — Sleek Floating Bridge */}
      {/* <section className="relative z-20 -mt-10 mb-8 container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-7 rounded-2xl bg-[#0D0D0D]/90 backdrop-blur-xl border border-white/10 shadow-2xl text-white">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center md:text-left md:border-r last:border-r-0 border-white/10 md:px-6"
            >
              <p className="text-3xl md:text-4xl font-heading font-black text-[#B98A4D]">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-[#A0A0A0] font-medium mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section> */}

      {/* PORTOFOLIO SECTION */}
      <section id="portofolio-section" className="py-20 bg-[#F7F5F2] border-t border-[#E6E2DC]">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          {/* Section Heading */}
          <div className="text-center mb-14">
            <span className="text-[#B98A4D] text-xs font-bold uppercase tracking-widest block mb-2">
              Karya &amp; Hasil Desain
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-[#0D0D0D] tracking-tight mb-4">
              Portofolio
            </h2>
            <p className="text-[#666666] text-base max-w-2xl mx-auto">
              Berikut beberapa hasil Project yang sudah  kami kerjakan
            </p>
          </div>

          {/* 2x2 Grid Featured Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E6E2DC] hover:border-[#B98A4D] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F0ECE4]">
                  {project.images && project.images.length > 0 ? (
                    <ProjectCarousel images={project.images} title={project.title} />
                  ) : project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-500 ease-out"
                    />
                  ) : null}
                </div>

                {/* Caption below image */}
                <div className="p-6 text-center border-t border-[#E6E2DC]">
                  <h3 className="text-xl font-heading font-bold text-[#0D0D0D] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#666666] text-sm leading-relaxed max-w-md mx-auto line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#B98A4D] hover:bg-[#A07840] text-white font-bold text-sm uppercase tracking-wider transition-all hover:-translate-y-0.5"
            >
              <span>Jelajahi Semua Portofolio Desain</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Tentang Studio & Keunggulan */}
      <section className="py-20 bg-white border-t border-[#E6E2DC]">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#B98A4D] text-xs font-bold uppercase tracking-widest block mb-2">
              Kenapa Memilih Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0D0D0D] tracking-tight mb-4">
              Jasa Desain Rumah  Berkualitas
            </h2>
            <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
              Mewujudkan rumah impian kini lebih mudah tanpa harus repot bertemu langsung. Konsultasi, revisi, hingga pengiriman dokumen desain semua dapat dilakukan secara online dengan hasil maksimal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="relative p-8 rounded-xl bg-white border border-[#E6E2DC] hover:border-[#B98A4D]/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg overflow-hidden group"
                >
                  <div className="text-3xl font-heading font-black text-[#B98A4D] mb-4">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-heading font-bold text-[#0D0D0D] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#666666] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Alur Proses Pemesanan Desain */}
      <section className="py-20 bg-[#F7F5F2] border-t border-[#E6E2DC]">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#B98A4D] text-xs font-bold uppercase tracking-widest block mb-2">
              Cara Pemesanan
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0D0D0D] tracking-tight mb-4">
              Alur Kerja Pemesanan Online
            </h2>
            <p className="text-[#666666] text-sm sm:text-base">
              Hanya dengan 4 langkah mudah, dokumen desain rumah idaman Anda siap dibangun.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-[#E6E2DC] hover:border-[#B98A4D] transition-all duration-300"
              >
                <div className="text-3xl font-heading font-black text-[#B98A4D] mb-3">
                  {step.number}
                </div>
                <h3 className="text-lg font-heading font-bold text-[#0D0D0D] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#666666] text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner — Clean, Bright Ivory with Gold & Wood Accents (NO BLACK BACKGROUND) */}
      <section className="py-20 bg-white border-t border-[#E6E2DC] relative overflow-hidden">
        {/* Decorative Gold line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B98A4D] to-transparent" />
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl relative z-10">
          <span className="text-[#B98A4D] text-xs font-bold uppercase tracking-widest block mb-4">Hubungi Kami</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black mb-4 text-[#0D0D0D]">
            Ingin Konsultasi Desain Rumah Anda?
          </h2>
          <p className="text-[#666666] text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Hubungi kami sekarang melalui WhatsApp untuk konsultasi awal gratis seputar denah lahan, konsep desain, dan estimasi biaya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Nomor WhatsApp menyusul segera.");
              }}
              className="px-8 py-4 bg-[#B98A4D] hover:bg-[#A07840] text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider hover:-translate-y-0.5"
            >
              <span>Chat WhatsApp Sekarang</span>
              <ArrowUpRight size={18} />
            </a>
            <Link
              href="/services"
              className="px-8 py-4 bg-[#F7F5F2] hover:bg-white text-[#0D0D0D] border border-[#E6E2DC] hover:border-[#B98A4D] rounded-lg font-bold transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Lihat Paket Layanan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


