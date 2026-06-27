import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Toaster removed to eliminate persistent error indicator on the page

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaka Puri — Desainer UI/UX",
  description:
    "Desainer UI/UX yang merancang pengalaman digital berfokus pada pengguna. Mahir menggunakan Figma, wireframing, prototyping, dan desain visual. Berbasis di Sijunjung, Sumatera Barat.",
  keywords: [
    "Desainer UI/UX",
    "Kaka Puri",
    "Figma",
    "Wireframing",
    "Prototyping",
    "Riset Pengguna",
    "Portofolio",
    "Indonesia",
  ],
  authors: [{ name: "Kaka Puri" }],
  creator: "Kaka Puri",
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: "Kaka Puri — Desainer UI/UX",
    description:
      "Desainer UI/UX yang merancang pengalaman digital berfokus pada pengguna. Berbasis di Sumatera Barat, Indonesia.",
    siteName: "Portofolio Kaka Puri",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaka Puri — Desainer UI/UX",
    description: "Desainer UI/UX yang merancang pengalaman digital berfokus pada pengguna.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
