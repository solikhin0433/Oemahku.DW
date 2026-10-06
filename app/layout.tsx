import type { Metadata } from "next";
import { Poppins, Hind, Playfair_Display } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

const hind = Hind({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OEMAHKU.DW | Jasa Desain Rumah Online",
    template: "%s | OEMAHKU.DW"
  },
  description: "Jasa desain rumah online profesional, visualisasi 3D konsep arsitektur, gambar kerja DED, RAB, dan desain interior murah berkualitas.",
  keywords: ["Jasa desain rumah", "Arsitek online", "Desain interior", "Gambar DED", "Visualisasi 3D Rumah", "RAB", "OEMAHKU.DW"],
  openGraph: {
    title: "OEMAHKU.DW | Jasa Desain Rumah Online Profesional",
    description: "Jasa desain rumah online, 3D arsitektur, DED, dan interior dengan harga terjangkau dan berkualitas.",
    url: "https://oemahku-dw.vercel.app",
    siteName: "OEMAHKU.DW",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Banner Oemahku DW",
      }
    ],
    locale: "id_ID",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${hind.variable} ${poppins.variable} ${playfair.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts to eliminate render-blocking delay */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch as fallback for older browsers */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          <LenisProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <FloatingWhatsApp />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

