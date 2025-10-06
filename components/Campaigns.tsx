import React, { useState, useRef } from 'react';
import Section from './Section';
import { Campaign } from '../types';
import Modal from './Modal';

interface CampaignsProps {
  campaigns: Campaign[];
}

// Fix: Updated component props to use React.FC for proper typing.
const TiltCard: React.FC<{ index: number, onClick: () => void, onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void, children: React.ReactNode }> = ({ children, index, onClick, onKeyDown }) => {
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
    <div className="tilt-card-wrapper h-full" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div 
        ref={cardRef} 
        onClick={onClick}
        onKeyDown={onKeyDown}
        className="group interactive-card tilt-card rounded-lg shadow-lg flex flex-col p-6 cursor-pointer section-hidden h-full"
        style={{ transitionDelay: `${index * 100}ms` }}
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
      >
        {children}
      </div>
    </div>
  )
}

const Campaigns: React.FC<CampaignsProps> = ({ campaigns }) => {
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);

  const handleOpenModal = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
  };

  const handleCloseModal = () => {
    setSelectedCampaign(null);
  };

  return (
    <>
      <Section id="campaigns" title="Campaign Highlights">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {campaigns.map((campaign, index) => (
            <TiltCard
              key={campaign.id}
              index={index}
              onClick={() => handleOpenModal(campaign)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOpenModal(campaign)}
            >
              <h3 className="text-xl font-bold text-lightest-slate mb-2">{campaign.title}</h3>
              <p className="text-slate text-sm mb-4 flex-grow">{campaign.description}</p>
              
              <div className="border-t border-gray/20 pt-4 mt-auto">
                <h4 className="text-md font-semibold text-light-slate mb-3">Key Metrics</h4>
                <ul className="space-y-2">
                  {campaign.metrics.slice(0, 3).map((metric, index) => (
                    <li key={index} className="flex justify-between items-center text-sm bg-black p-2 rounded">
                      <span className="text-slate">{metric.label}</span>
                      <span className="font-bold text-teal">{metric.value}</span>
                    </li>
                  ))}
                   {campaign.metrics.length > 3 && (
                    <li className="text-center text-teal text-xs font-semibold pt-2 group-hover:text-lightest-slate transition-colors">
                      Click to see more <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </li>
                  )}
                </ul>
              </div>
            </TiltCard>
          ))}
        </div>
      </Section>
      {selectedCampaign && (
        <Modal campaign={selectedCampaign} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Campaigns;