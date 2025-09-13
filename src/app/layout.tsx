import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";
import LenisProvider from "@/components/LenisProvider";

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
          <PromoBanner 
            text="Special Offer: Get 20% off your first three months with our Business Pro plan!" 
            link="/packages"
            linkText="Explore Packages"
          />
          <Navbar />
          {/* Add top padding to account for the fixed navbar's height */}
          <main className="flex-grow pt-[60px]">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}