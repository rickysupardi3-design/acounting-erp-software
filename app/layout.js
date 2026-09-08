import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "VDR Documentation",
  description:
    "Comprehensive documentation for the VDR ERP system built on Jam.py",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex bg-gray-50">
        <Sidebar />
        <main className="flex-1 lg:ml-64 p-4 sm:p-8 pt-16 lg:pt-8 max-w-4xl">{children}</main>
      </body>
    </html>
  );
}