"use client"; // This hook uses browser-specific APIs and must be a client component

import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Handler to update the scrollY state
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return scrollY;
}