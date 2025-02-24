import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navbar from './components/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-commerce Moderno 2025",
  description: "Next E-Commerce versão 15.1.7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`clsx${geistSans.variable} ${geistMono.variable} antialiased bg-slate-700`}>
        
          <Navbar/>

        <main className=" h-screen p-16">{children}</main>
        
      </body>
    </html>
  );
}
