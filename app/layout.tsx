import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Excel Belajar - Kelas Online Belajar Excel",
  description: "Platform belajar Excel dari dasar sampai mahir dengan video tutorial, transkrip, dan panduan keyboard shortcuts dalam Bahasa Indonesia.",
  keywords: ["excel", "belajar excel", "tutorial excel", "excel indonesia", "rumus excel", "keyboard shortcuts excel"],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-theme="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main style={{ paddingTop: '70px', minHeight: '100vh' }}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
