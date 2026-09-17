import mahadipaImage from "../image/mahadipa26.jpg";
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

    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Supabase"],

    image: mahadipaImage.src,

    features: [
      "Direktori mahasiswa dan informasi angkatan",
      "Pengelolaan data mahasiswa dan profil",
      "Dokumentasi foto dan berbagai kegiatan angkatan",
      "Informasi agenda dan kegiatan mahasiswa",
      "Hall of Fame dan arsip perjalanan angkatan",
      "Dashboard dengan tampilan responsif untuk desktop dan mobile",
      "Penyimpanan dan pengelolaan data menggunakan Supabase",
      "Antarmuka sederhana yang dirancang untuk navigasi cepat",
    ],

    demo: "https://mahadipa2026.akhmadrifqy.my.id",

    featured: true,
  },

  {
    slug: "telegram-group-bot",
    number: "02",
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