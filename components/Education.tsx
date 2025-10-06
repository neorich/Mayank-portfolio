import React, { useRef } from 'react';
import Section from './Section';
import { educationData } from '../constants';
import { CertificateIcon } from './Icons';

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

    const rotateX = -((y - height / 2) / (height / 2)) * 6;
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
    <div className="tilt-card-wrapper" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div
        ref={cardRef}
        className="tilt-card interactive-card p-6 rounded-lg flex items-center shadow-lg section-hidden h-full"
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        {children}
      </div>
    </div>
  );
};


const Education: React.FC = () => {
  return (
    <Section id="education" title="Education & Certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((item, index) => (
          <TiltCard key={index} index={index}>
            <div className="text-teal mr-5 text-3xl flex-shrink-0">
                <CertificateIcon />
            </div>
            <div>
              <h3 className="text-lg font-bold text-lightest-slate">{item.degree}</h3>
              <p className="text-slate">{item.institution}</p>
            </div>
          </TiltCard>
        ))}
      </div>
    </Section>
  );
};

export default Education;