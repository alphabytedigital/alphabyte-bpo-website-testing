"use client"; // This component now uses a client-side hook

import Link from 'next/link';
import { useScrollPosition } from '@/hooks/useScrollPosition'; // <-- Import the hook
import { clsx } from 'clsx'; // <-- Import clsx

export default function Navbar() {
  const scrollY = useScrollPosition();

  // Conditionally apply classes based on scroll position
  const navClasses = clsx(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    {
      "border-b border-transparent": scrollY < 50,
      "border-b border-white/20 bg-black/50 backdrop-blur-lg": scrollY >= 50,
    }
  );

  return (
    <nav className={navClasses}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-red-500">
          AlphaByte
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 text-sm">
          <Link href="/services" className="hover:text-red-500 transition-colors">
            Services
          </Link>
          <Link href="/packages" className="hover:text-red-500 transition-colors">
            Packages
          </Link>
          <Link href="/how-it-works" className="hover:text-red-500 transition-colors">
            How It Works
          </Link>
          <Link href="/contact" className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition-colors font-semibold">
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}