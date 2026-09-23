"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("Semua");
  const categories = ["Semua", "1 Lantai", "2 Lantai", "Lainnya"];

  const filteredProjects = projects.filter((project) =>
    filter === "Semua" ? true : project.category === filter
  );

  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#0D0D0D] pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#666666] hover:text-[#B98A4D] transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            <span>Kembali ke Beranda</span>
          </Link>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-architectural-serif font-bold text-[#0D0D0D] tracking-tight mb-6">
            Karya & <span className="text-[#B98A4D]">Portofolio</span>
          </h1>
          <p className="text-base md:text-lg text-[#666666] leading-relaxed">
            Eksplorasi ragam desain arsitektur dan interior yang telah kami selesaikan. Setiap karya adalah wujud nyata dari visi, fungsionalitas, dan estetika yang presisi.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-[#B98A4D] text-white shadow-lg shadow-[#B98A4D]/25"
                  : "bg-white text-[#666666] border border-[#E6E2DC] hover:border-[#B98A4D] hover:text-[#0D0D0D]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-xl border border-[#E6E2DC] transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F0ECE4]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[#A0A0A0]">
                      No Image
                    </div>
                  )}
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0D0D0D] hover:bg-[#B98A4D] hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                    >
                      <ArrowUpRight size={24} />
                    </Link>
                  </div>
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[#0D0D0D] text-[10px] font-bold uppercase tracking-wider rounded shadow-sm">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-[#0D0D0D] mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-[#666666] text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-[#666666]">
            Belum ada proyek untuk kategori ini.
          </div>
        )}
      </div>
    </div>
  );
}
