import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/20 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-8 gap-4">
        <p className="text-sm text-white/70">
          © 2025 AlphaByte BPO (Pvt) Ltd. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-6 text-sm">
          <Link href="/services" className="hover:text-red-500 transition-colors">
            Services
          </Link>
          <Link href="/packages" className="hover:text-red-500 transition-colors">
            Packages
          </Link>
          <Link href="/contact" className="hover:text-red-500 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}