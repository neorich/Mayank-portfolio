import React, { useRef } from 'react';
import Section from './Section';
import { skillsData } from '../constants';

// Fix: Updated component props to use React.FC for proper typing.
const TiltCard: React.FC<{ index: number, children: React.ReactNode }> = ({ children, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    
    card.style.transition = 'transform 0.05s linear';
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    const rotateX = -((y - height / 2) / (height / 2)) * 6; // Max rotation 6 degrees
    const rotateY = ((x - width / 2) / (width / 2)) * 6;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = 'transform 0.3s ease-out';
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  };
  
  return (
    <div className="tilt-card-wrapper h-full" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div 
        ref={cardRef} 
        className="interactive-card tilt-card p-6 rounded-lg shadow-lg section-hidden h-full"
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        {children}
      </div>
    </div>
  )
}

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills & Core Competencies">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((skillCategory, index) => (
          <TiltCard key={skillCategory.category} index={index}>
            <div className="flex items-center mb-4">
              <span className="text-teal">{skillCategory.icon}</span>
              <h3 className="text-xl font-bold text-lightest-slate ml-3">{skillCategory.category}</h3>
            </div>
            <ul className="space-y-3">
              {skillCategory.items.map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-teal mr-3 mt-1.5 flex-shrink-0">▹</span>
                  <span className="text-slate">{item}</span>
                </li>
              ))}
            </ul>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
};

export default Skills;