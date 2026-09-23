export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "3d-concept",
    title: "Desain Konsep 3D Eksterior & Interior",
    description: "Visualisasi realistis dari rumah atau bangunan Anda sebelum proses pembangunan dimulai.",
    icon: "Cuboid",
  },
  {
    id: "working-drawing",
    title: "Gambar Kerja",
    description: "Pembuatan denah, tampak, dan potongan detail sebagai acuan pelaksanaan konstruksi.",
    icon: "PenTool",
  },
  {
    id: "renovation",
    title: "Konsultasi Renovasi",
    description: "Solusi desain untuk merenovasi bangunan lama menjadi lebih modern dan fungsional.",
    icon: "Hammer",
  },
  {
    id: "rendering",
    title: "Visualisasi Render Fotorealistik",
    description: "Render 3D kualitas tinggi untuk presentasi, marketing properti, atau portofolio.",
    icon: "Image",
  },
];
