"use client"; // This is essential for components that use hooks like useEffect

import { useEffect } from 'react';
import Lenis from 'lenis';

// We're wrapping the children, so we need to accept them as a prop
export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function to destroy Lenis instance on component unmount
    return () => {
      lenis.destroy();
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return <>{children}</>;
}