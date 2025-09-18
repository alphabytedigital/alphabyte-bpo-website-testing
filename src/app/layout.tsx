import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import Header from "@/components/Header"; // <-- Import the new Header component

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "AlphaByte BPO - Your Strategic Remote IT Partner",
  description: "Seamless, strategic, 24/7 remote IT support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} bg-[#111111] text-white flex flex-col min-h-screen`}>
        <LenisProvider>
          {/* Replace the separate components with the single Header */}
          <Header />
          
          {/* Update padding to match the new, shorter header height */}
          <main className="flex-grow pt-[80px]">{children}</main>
          
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}