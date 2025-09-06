import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // <-- IMPORT THE FOOTER

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
        <Navbar />
        <main className="flex-grow">{children}</main> {/* <-- WRAP CHILDREN IN MAIN */}
        <Footer /> {/* <-- ADD THE FOOTER COMPONENT HERE */}
      </body>
    </html>
  );
}