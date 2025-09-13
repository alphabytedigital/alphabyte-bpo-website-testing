import Link from 'next/link';
import React from 'react';

// Define the properties for the banner component
type PromoBannerProps = {
  text: string;
  link?: string; // The link is optional
  linkText?: string; // Optional text for the link/button
};

export default function PromoBanner({ text, link, linkText = "Learn More" }: PromoBannerProps) {
  return (
    <div className="bg-red-500/10 text-center py-2 px-4 text-sm text-white/90">
      <span>{text}</span>
      {link && (
        <Link href={link} className="ml-2 underline hover:text-red-500 font-semibold transition-colors">
          {linkText}
        </Link>
      )}
    </div>
  );
}