export const personalInfo = {
  name: "Kaka Puri",
  role: "Desainer UI/UX",
  tagline: "Merancang pengalaman digital yang terasa alami dan berkesan.",
  description:
    "Mahasiswa Teknik Informatika dengan minat besar pada Desain UI/UX. Saya merancang antarmuka digital yang ramah pengguna dan menarik secara visual melalui proses berbasis riset, wireframing, dan prototyping — menghadirkan pengalaman yang indah sekaligus bermakna.",
  shortBio:
    "Desainer UI/UX dengan minat besar dalam menciptakan pengalaman digital yang berfokus pada pengguna dan menarik secara visual. Terampil dalam riset pengguna, wireframing, prototyping, dan desain UI dengan perhatian detail yang tinggi.",
  email: "kakapuri110804@gmail.com",
  phone: "0853-5607-1937",
  location: "Sijunjung, Sumatera Barat",
  whatsapp: "https://wa.me/6285356071937",
  github: "https://github.com/kakapuri",
  linkedin: "https://www.linkedin.com/in/kaka-puri-28378a305",
  languages: [
    { name: "Bahasa Indonesia", level: "Mahir" },
    { name: "Bahasa Inggris", level: "Dasar" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Isle Tours",
    subtitle: "Website Informasi Pariwisata",
    period: "Mar 2025 – Jun 2025",
    role: "Desainer UI/UX",
    category: "Desain Web",
    description:
      "Merancang tampilan antarmuka dan pengalaman pengguna untuk website informasi pariwisata yang berfokus pada destinasi di kawasan Kepulauan Riau.",
    highlights: [
      "Merancang UI dan tata letak keseluruhan untuk website informasi pariwisata destinasi Kepulauan Riau",
      "Membuat wireframe dan desain visual untuk memastikan pengalaman yang bersih, menarik, dan mudah digunakan",
      "Menyusun konten pariwisata dan mengoptimalkan alur pengguna untuk meningkatkan kemudahan akses dan keterlibatan",
    ],
    tools: ["Figma", "FigJam", "Canva"],
    color: "blue" as const,
    featured: true,
    image: "/images/isle-tours.jpg",
    size: "large" as const,
  },
  {
    id: 2,
    title: "Sistem Manajemen Koperasi",
    subtitle: "Desain Antarmuka Web",
    period: "Agu 2024 – Nov 2024",
    role: "Desainer UI/UX",
    category: "Desain Dasbor",
    description:
      "Merancang dan menyunting antarmuka web untuk sistem informasi koperasi guna mengelola penjualan, stok barang, pembelian, laporan, dan manajemen pengguna.",
    highlights: [
      "Merancang dan menyunting antarmuka web sistem informasi koperasi untuk penjualan, stok barang, pembelian, laporan, dan manajemen pengguna",
      "Membuat tata letak responsif untuk dasbor Admin, Kasir, dan Pemilik guna meningkatkan kemudahan penggunaan dan efisiensi operasional",
      "Merancang komponen UI dan elemen visual untuk menghadirkan pengalaman yang konsisten dan intuitif",
    ],
    tools: ["Figma", "FigJam"],
    color: "purple" as const,
    featured: true,
    image: "/images/management-koperasi.jpg",
    size: "medium" as const,
  },
];

export const skills = {
  uiux: [
    { name: "Riset Pengguna", icon: "🔍", level: 85 },
    { name: "Arsitektur Informasi", icon: "🗂️", level: 80 },
    { name: "Wireframing", icon: "📐", level: 90 },
    { name: "Prototyping", icon: "⚡", level: 88 },
    { name: "Desain UI", icon: "🎨", level: 92 },
    { name: "Alur Pengguna", icon: "🔄", level: 85 },
  ],
  visualDesign: [
    { name: "Tipografi", icon: "Tt", level: 82 },
    { name: "Teori Warna", icon: "🎨", level: 85 },
    { name: "Desain Tata Letak", icon: "▦", level: 88 },
    { name: "Desain Ikon", icon: "◆", level: 78 },
    { name: "Sistem Desain", icon: "⚙️", level: 80 },
  ],
  tools: [
    { name: "Figma", icon: "F", level: 92 },
    { name: "Adobe XD", icon: "Xd", level: 75 },
    { name: "Canva", icon: "C", level: 88 },
    { name: "Visual Studio Code", icon: "</>", level: 70 },
    { name: "Chrome DevTools", icon: "🔧", level: 65 },
    { name: "FigJam", icon: "✏️", level: 85 },
  ],
  technical: [
    { name: "HTML", icon: "</>" },
    { name: "CSS", icon: "~" },
    { name: "JavaScript", icon: "JS" },
    { name: "Python", icon: "🐍" },
    { name: "MySQL", icon: "🗄️" },
    { name: "SQLite", icon: "🗄️" },
  ],
  soft: [
    "Pemecahan Masalah",
    "Berpikir Kritis",
    "Kreativitas",
    "Kerja Tim",
    "Adaptabilitas",
  ],
};

export const designProcess = [
  {
    step: 1,
    title: "Riset",
    description: "Memahami pengguna, tujuan bisnis, dan konteks pasar melalui wawancara pengguna, survei, dan analisis kompetitor.",
    icon: "Search",
    color: "#5B8CFF",
  },
  {
    step: 2,
    title: "Alur Pengguna",
    description: "Memetakan perjalanan pengguna dan arsitektur informasi untuk menentukan navigasi dan pola interaksi yang optimal.",
    icon: "GitBranch",
    color: "#2DD4BF",
  },
  {
    step: 3,
    title: "Wireframe",
    description: "Membuat kerangka struktural sederhana yang berfokus pada tata letak, hierarki konten, dan fungsi inti.",
    icon: "Layout",
    color: "#A855F7",
  },
  {
    step: 4,
    title: "Prototipe",
    description: "Membangun prototipe interaktif beresolusi tinggi untuk menguji dan memvalidasi keputusan desain sebelum pengembangan.",
    icon: "Zap",
    color: "#5B8CFF",
  },
  {
    step: 5,
    title: "Desain Akhir",
    description: "Menghadirkan UI yang rapi dan presisi lengkap dengan sistem desain, komponen, dan spesifikasi serah terima ke developer.",
    icon: "CheckCircle",
    color: "#2DD4BF",
  },
];

export const aboutHighlights = [
  {
    label: "Desain UI",
    description: "Antarmuka presisi dengan hierarki visual yang kuat dan estetika modern.",
    icon: "Palette",
    color: "blue",
  },
  {
    label: "Desain UX",
    description: "Pengalaman berbasis riset yang menyelesaikan masalah nyata pengguna sekaligus mencapai tujuan bisnis.",
    icon: "Users",
    color: "cyan",
  },
  {
    label: "Wireframing",
    description: "Kerangka struktural yang menyampaikan ide secara jelas sebelum proses desain dimulai.",
    icon: "Layout",
    color: "purple",
  },
  {
    label: "Prototyping",
    description: "Prototipe interaktif yang menghidupkan desain untuk pengujian dan persetujuan pemangku kepentingan.",
    icon: "Zap",
    color: "blue",
  },
];
