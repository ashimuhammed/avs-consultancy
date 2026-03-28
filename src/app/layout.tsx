import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AVS Job & Educational Consultancy",
  description: "Your bridge to global career and education success.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geistSans.className}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        <NextTopLoader color="#2563eb" showSpinner={false} />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}