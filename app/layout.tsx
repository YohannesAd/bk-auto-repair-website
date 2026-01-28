import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BK Auto Repair - Professional Auto Repair Services",
  description: "Expert auto repair services for all makes and models. Quality service you can trust.",
};

/**
 * Root Layout Component
 * Provides the base HTML structure and includes the Navbar
 * All pages will be wrapped with this layout
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

