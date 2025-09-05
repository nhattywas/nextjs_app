import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar"; // 👈 import here

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test Pipeline",
  description: "GitHub → Vercel → Azure pipeline demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* 👈 use navbar here */}
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
