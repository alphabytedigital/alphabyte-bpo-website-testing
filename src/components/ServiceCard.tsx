import React from 'react';

type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors border border-transparent hover:border-red-500">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
}