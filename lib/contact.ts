export interface ContactItem {
  id: "email" | "github" | "whatsapp";
  name: string;
  href: string;
  description: string;
}

export const contactConfig: ContactItem[] = [
  {
    id: "email",
    name: "Email",
    href: "mailto:akhmadrifqy81@gmail.com",
    description: "Kirim pesan melalui email",
  },
  {
    id: "github",
    name: "GitHub",
    href: "https://github.com/rifqi1146",
    description: "Lihat profil GitHub",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    // Isi nomor WhatsApp sesuai kebutuhan, contoh: https://wa.me/62882005530767
    href: "https://wa.me/62882005530767",
    description: "Kirim pesan langsung via WhatsApp",
  },
];
