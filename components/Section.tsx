
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 md:py-24 scroll-mt-20 section-hidden">
      <div className="flex items-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate whitespace-nowrap">
          <span className="text-teal mr-2">0{['about', 'skills', 'experience', 'campaigns', 'education', 'contact'].indexOf(id) + 1}.</span> {title}
        </h2>
        <div className="w-full h-px bg-gray/30 ml-6"></div>
      </div>
      {children}
    </section>
  );
};

export default Section;