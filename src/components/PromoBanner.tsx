import Link from 'next/link';
import React from 'react';

type PromoBannerProps = {
  text: string;
  link?: string;
  linkText?: string;
};

export default function PromoBanner({ text, link, linkText = "Learn More" }: PromoBannerProps) {
  return (
    // Reduced vertical padding from py-1.5 to py-1
    <div className="bg-red-700 text-center py-1 px-4 text-sm text-red-100">
      <span>{text}</span>
      {link && (
        <Link href={link} className="ml-2 underline hover:text-white font-semibold transition-colors">
          {linkText}
        </Link>
      )}
    </div>
  );
}