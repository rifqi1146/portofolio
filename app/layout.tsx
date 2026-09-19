import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import BackgroundEffects from "@/components/BackgroundEffects";
import PageTransition from "@/components/PageTransition";

const CursorEffect = dynamic(() => import("@/components/CursorEffect"), {
  ssr: false,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Rifqy · Informatics Engineering",
  description: "Mahasiswa Teknik Informatika - Universitas STEKOM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased min-h-screen relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {/* Ambient Lighting & Depth */}
          <BackgroundEffects />
          <CursorEffect />

          {/* Navigation Structure */}
          <MobileNav />
          <Sidebar />

          {/* Main Content Area */}
          <main className="relative z-10 md:ml-[260px] min-h-screen p-6 pb-20 sm:p-10 sm:pb-24 md:p-16 md:pb-16 lg:p-20 lg:pb-20 max-w-5xl">
            <PageTransition>{children}</PageTransition>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
