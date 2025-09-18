"use client"; // This component manages state and effects

import { useScrollPosition } from '@/hooks/useScrollPosition';
import { clsx } from 'clsx';
import PromoBanner from './PromoBanner';
import Navbar from './Navbar';

export default function Header() {
  const scrollY = useScrollPosition();

  // Updated logic: The border is now always present, and we only toggle its color.
  const headerClasses = clsx(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
    {
      "border-transparent": scrollY < 50,
      "border-white/20 bg-black/50 backdrop-blur-lg": scrollY >= 50,
    }
  );

  return (
    <header className={headerClasses}>
      <PromoBanner 
        text="🚀 50% OFF Dedicated Agents for 90 Days — No Commitment, Just Results!" 
        link="/packages"
        linkText="Explore Packages"
      />
      <Navbar />
    </header>
  );
}