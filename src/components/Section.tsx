import React from 'react';
import { clsx } from 'clsx';

type SectionProps = {
  title: string;
  subtitle: string;
  children?: React.ReactNode; // <-- Change children to be optional with a '?'
  fullScreen?: boolean;
};

export default function Section({ title, subtitle, children, fullScreen = false }: SectionProps) {
  const sectionClasses = clsx(
    'container mx-auto px-4 py-16 lg:py-20',
    {
      'min-h-screen flex flex-col justify-center': fullScreen,
    }
  );

  return (
    <section className={sectionClasses}>
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="text-lg text-white/80 mt-4">{subtitle}</p>
      </div>

      {/* Section Content - Only render this div if children exist */}
      {children && <div className="mt-12">{children}</div>}
    </section>
  );
}