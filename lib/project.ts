import mahadipaImage from "../image/mahadipa26.jpg";
import hortikulturaImage from "../image/hortikultura.png";
import telegramBotImage from "../image/telegrambot.jpg";

export interface Project {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  image: string;
  features?: string[];
  github?: string;
  demo?: string;
  attribution?: {
    label: string;
    url: string;
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "mahadipa-26",
    number: "01",
    title: "Mahadipa 26",

    shortDescription:
      "Portal digital untuk mahasiswa dan dokumentasi perjalanan angkatan STEKOM 2026.",

    description:
      "Mahadipa 26 adalah portal digital yang saya kembangkan sebagai tempat untuk mengelola informasi mahasiswa, kegiatan, agenda, dan dokumentasi angkatan STEKOM 2026. Project ini dibuat secara mandiri dengan fokus pada pengalaman penggunaan yang sederhana, responsif, dan mudah diakses melalui berbagai perangkat.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "libSQL",
      "Vercel",
    ],

    image: mahadipaImage.src,

    features: [
      "Direktori mahasiswa dan informasi angkatan",
      "Pengelolaan data mahasiswa dan profil",
      "Dokumentasi foto dan berbagai kegiatan angkatan",
      "Informasi agenda dan kegiatan mahasiswa",
      "Hall of Fame dan arsip perjalanan angkatan",
      "Dashboard dengan tampilan responsif untuk desktop dan mobile",
      "Penyimpanan dan pengelolaan data menggunakan libSQL",
      "Antarmuka sederhana yang dirancang untuk navigasi cepat",
    ],

    demo: "https://mahadipa.vercel.app/",

    attribution: {
      label: "Based on the original Mahadipa 26 website",
      url: "https://mahadipa2026.vercel.app/",
    },

    featured: true,
  },

  {
    slug: "hortikultura",
    number: "02",
    title: "Hortikultura",

    shortDescription:
      "Website katalog bibit hortikultura dengan dashboard admin untuk mengelola produk dan konten.",

    description:
      "Hortikultura adalah website yang saya kembangkan untuk kebutuhan UMKM Taruna Bumi Mandiri. Website ini menyediakan katalog bibit hortikultura yang dapat dikelola melalui dashboard admin, lengkap dengan sistem CRUD produk, upload dan pengelolaan gambar, pengaturan konten, serta penyimpanan data menggunakan Supabase.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Supabase PostgreSQL",
      "Supabase Storage",
      "Vercel",
    ],

    image: hortikulturaImage.src,

    features: [
      "Katalog produk bibit hortikultura",
      "Dashboard admin untuk pengelolaan konten",
      "CRUD produk dan informasi katalog",
      "Upload dan pengelolaan gambar produk",
      "Penyimpanan database menggunakan Supabase PostgreSQL",
      "Supabase Storage untuk penyimpanan gambar",
      "Sistem autentikasi dan proteksi halaman admin",
      "Pengelolaan pengaturan dan konten website",
      "Responsive design untuk desktop dan mobile",
      "SEO dan metadata untuk halaman publik",
      "Optimasi performa dan loading halaman",
      "Integrasi WhatsApp untuk kebutuhan pemesanan",
    ],

    demo: "https://hortikultura.vercel.app/",

    featured: true,
  },

  {
    slug: "telegram-group-bot",
    number: "03",
    title: "Telegram Group Bot",

    shortDescription:
      "Bot Telegram serbaguna untuk automation, moderation, downloader, dan berbagai kebutuhan grup.",

    description:
      "Telegram Group Bot adalah bot serbaguna yang saya kembangkan menggunakan Python untuk mengotomatisasi berbagai kebutuhan di Telegram. Selain menyediakan fitur manajemen dan moderasi grup, bot ini juga dilengkapi sistem verifikasi pengguna, downloader dari berbagai platform, AI chat, serta berbagai utilitas lainnya.",

    technologies: [
      "Python",
      "Telegram",
      "SQLite",
      "Cloudflare Turnstile",
      "yt-dlp",
    ],

    image: telegramBotImage.src,

    features: [
      "Sistem welcome untuk member baru",
      "Verifikasi member menggunakan web verification dengan Cloudflare Turnstile",
      "Sistem captcha untuk membantu mencegah bot dan spam masuk ke grup",
      "Downloader video dan media dari berbagai platform",
      "Download dari YouTube menggunakan yt-dlp",
      "Download konten dari TikTok",
      "Download konten dari Instagram",
      "Download konten dari Reddit",
      "Download konten dari X / Twitter",
      "Download konten dari Pinterest",
      "AI chat untuk berinteraksi langsung melalui Telegram",
      "Custom command dan trigger untuk kebutuhan grup",
      "Sistem reminder dan penjadwalan",
      "Penyimpanan konfigurasi dan data menggunakan SQLite",
      "Logging aktivitas dan konfigurasi setiap grup",
    ],

    github: "https://github.com/rifqi1146/kiyoshibot",

    featured: true,
  },
];