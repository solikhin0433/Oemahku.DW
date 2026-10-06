import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'
 
// Route segment config
export const runtime = 'nodejs'
 
// Image metadata
export const alt = 'OEMAHKU.DW'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default function Image() {
  // Membaca file logo langsung dari folder public
  const logoBuffer = readFileSync(join(process.cwd(), 'public/Asset/Logo/LOGO.png'))
  // Konversi buffer ke base64 agar bisa dirender di HTML
  const base64Logo = `data:image/png;base64,${logoBuffer.toString('base64')}`
 
  return new ImageResponse(
    (
      // Frame utama dengan background gelap agar logo putih terlihat
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0f172a, #020617)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Logo ditampilkan di tengah */}
        <img
          src={base64Logo}
          alt="Logo Oemahku DW"
          style={{
            maxWidth: '600px',
            maxHeight: '400px',
            objectFit: 'contain',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
