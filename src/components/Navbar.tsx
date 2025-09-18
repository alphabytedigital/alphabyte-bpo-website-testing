import Link from 'next/link';

// No longer needs to be a client component
export default function Navbar() {
  return (
    // All positioning and background classes are removed. Padding is reduced from p-4 to py-2 px-4.
    <nav className="w-full">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
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