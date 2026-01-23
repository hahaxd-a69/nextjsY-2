import type { Metadata } from "next";
import { Inter, Moulpali } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const moulpali = Moulpali({
  weight: "400",
  variable: "--font-moulpali",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog & Photo App",
  description: "A blog and photo gallery application built with Next.js",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode; // Add modal slot
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${moulpali.variable}`}>
      <body className="antialiased">
        <main className={inter.className}>
          {children}
          <Toaster />
          {modal}
        </main>
      </body>
    </html>
  );
}
