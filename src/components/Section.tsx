import React from 'react';

type SectionProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <section className="container mx-auto px-4 py-16 lg:py-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="text-lg text-white/80 mt-4">{subtitle}</p>
      </div>

      {/* Section Content */}
      <div className="mt-12">{children}</div>
    </section>
  );
}