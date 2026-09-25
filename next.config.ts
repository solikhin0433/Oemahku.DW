import type { NextConfig } from "next";

// ============================================================
// OEMAHKU.DW — Security Headers Configuration
// Referensi: OWASP Secure Headers Project
// https://owasp.org/www-project-secure-headers/
// ============================================================

const securityHeaders = [
  // 1. Cegah Clickjacking: Web tidak bisa di-embed di iframe situs lain
  {
    key: "X-Frame-Options",
    value: "DENY",
  },

  // 2. Cegah MIME Sniffing: Browser tidak boleh menebak tipe file
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },

  // 3. Kontrol informasi referral yang dikirim ke situs lain
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },

  // 4. Batasi akses API perangkat yang tidak diperlukan
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },

  // 5. Paksa HTTPS selama 1 tahun, termasuk subdomain
  // (Aktifkan hanya setelah deploy ke HTTPS/Vercel, bukan di localhost)
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },

  // 6. Aktifkan DNS Prefetch untuk performa lebih baik
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },

  // 7. Content Security Policy — Whitelist sumber konten yang diizinkan
  // Ini adalah pertahanan paling kuat melawan serangan XSS
  {
    key: "Content-Security-Policy",
    value: [
      // Script: hanya dari domain sendiri, inline (Next.js butuh ini), dan Google Fonts
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      // Style: domain sendiri + Google Fonts CDN
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Font: domain sendiri + Google Fonts server
      "font-src 'self' https://fonts.gstatic.com",
      // Gambar: domain sendiri + data URI (untuk base64) + Unsplash
      "img-src 'self' data: https://images.unsplash.com",
      // Frame: tidak boleh ada sama sekali
      "frame-ancestors 'none'",
      // Form action: hanya boleh submit ke domain sendiri dan WhatsApp
      "form-action 'self' https://wa.me",
      // Default fallback untuk semua resource lain
      "default-src 'self'",
      // Koneksi (fetch/XHR): hanya ke domain sendiri dan WhatsApp API
      "connect-src 'self' https://wa.me",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Image Optimization 
  images: {
    // Format modern: browser akan pilih AVIF (terkecil) atau WebP jika tidak support
    formats: ["image/avif", "image/webp"],
    // Ukuran layar yang di-generate (responsive)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    // Ukuran gambar kecil (ikon, thumbnail)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Daftar nilai quality yang diizinkan di seluruh komponen <Image>
    // 75 = portofolio card (lebih kecil), 80 = slider, 85 = hero/LCP
    qualities: [75, 80, 85],
    // Cache gambar di server selama 1 tahun
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Kompresi Gzip/Brotli
  compress: true,

  // Security Headers
  async headers() {
    return [
      {
        // Terapkan ke semua route/halaman di website
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
