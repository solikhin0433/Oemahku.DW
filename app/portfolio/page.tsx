"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";

function PortfolioImageSlider({ images, title }: { images: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="absolute inset-0 flex items-center justify-center text-[#A0A0A0]">
        No Image
      </div>
    );
  }

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-full overflow-hidden group/slider">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`${title} image ${currentIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </motion.div>
      </AnimatePresence>

      {/* Manual Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-[#B98A4D] text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all duration-300 z-10"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-[#B98A4D] text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all duration-300 z-10"
          >
            <ChevronRight size={18} />
          </button>
          
          {/* Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 opacity-0 group-hover/slider:opacity-100 transition-all duration-300">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-[#B98A4D]" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

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
            Berikut adalah beberapa hasil proyek desain yang telah kami selesaikan.
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
                  ? "bg-[#B98A4D] text-white"
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
                  {project.images && project.images.length > 0 ? (
                    <PortfolioImageSlider images={project.images} title={project.title} />
                  ) : project.image ? (
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


