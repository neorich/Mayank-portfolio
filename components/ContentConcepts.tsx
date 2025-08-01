
import React from 'react';
import Section from './Section';

const AiContentCard = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`interactive-card p-4 md:p-6 rounded-lg shadow-lg flex flex-col section-hidden ${className}`}>
    {children}
  </div>
);

const ContentConcepts: React.FC = () => {
  const videoBaseUrl = "https://github.com/neorich/files/blob/main/";
  const monsterVideoSrc = `${videoBaseUrl}Monster%20Ultra%20Sample.mp4?raw=true`;
  const oldMoneyVideoSrc = `${videoBaseUrl}OLD%20Money.mp4?raw=true`;
  const puffeteriaLogoSrc = 'https://github.com/neorich/files/blob/main/Puffeteria.png?raw=true';
  const louisVuittonLogoSrc = 'https://github.com/neorich/files/blob/main/LV-2.jpg?raw=true';
  const louisVuittonVideoSrc = 'https://github.com/neorich/files/blob/main/LV%20Video.mp4?raw=true';

  return (
    <Section id="content-concepts" title="AI-Powered Content Concepts">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-slate mb-12 max-w-3xl mx-auto">
          Here are some examples of ad concepts, logos, and brand explorations created entirely using Generative AI tools. This showcases my ability to leverage cutting-edge technology for the rapid and creative production of marketing assets.
        </p>

        <div className="grid grid-cols-1 gap-8 md:gap-12 mb-8 md:mb-12">
          <AiContentCard>
            <div className="rounded-md overflow-hidden mb-4 border border-gray/20 shadow-inner">
              <video
                src={monsterVideoSrc}
                controls
                loop
                muted
                playsInline
                autoPlay
                className="w-full aspect-video object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <h3 className="text-xl font-bold text-lightest-slate mb-2">Monster Ultra - Ad Concept</h3>
            <p className="text-slate text-sm flex-grow">Short-form video ad concept generated entirely with AI, Demonstrates rapid, creative content production.</p>
          </AiContentCard>

          <AiContentCard>
            <div className="rounded-md overflow-hidden mb-4 border border-gray/20 shadow-inner">
              <video
                src={oldMoneyVideoSrc}
                controls
                loop
                muted
                playsInline
                autoPlay
                className="w-full aspect-video object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <h3 className="text-xl font-bold text-lightest-slate mb-2">OLD Money - Ad Concept</h3>
            <p className="text-slate text-sm flex-grow">An evocative Ad concept created using AI tools to generate a unique aesthetic and narrative for a luxury brand.</p>
          </AiContentCard>
        </div>

        <div className="mb-8 md:mb-12">
          <AiContentCard>
            <h3 className="text-xl font-bold text-lightest-slate mb-4 text-center md:text-left">Louis Vuitton - Brand Reimagined</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-3">
                <div className="rounded-md overflow-hidden border border-gray/20 shadow-inner">
                  <video
                    src={louisVuittonVideoSrc}
                    controls
                    loop
                    muted
                    playsInline
                    autoPlay
                    className="w-full aspect-video object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="md:col-span-2 flex flex-col items-center">
                <div className="flex justify-center p-4 bg-black rounded-lg mb-4 w-full">
                  <img src={louisVuittonLogoSrc} alt="Louis Vuitton Logo Reimagined" className="max-h-40 w-auto rounded-lg object-contain" />
                </div>
                <p className="text-slate text-sm text-center">A complete brand concept exploration for Louis Vuitton, featuring an AI-reimagined logo and a cinematic video ad generated with VEO 3. This highlights the ability to rapidly prototype and visualize high-end campaign assets.</p>
              </div>
            </div>
          </AiContentCard>
        </div>

        <AiContentCard>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-1 flex justify-center p-4 bg-black rounded-lg">
                <img src={puffeteriaLogoSrc} alt="Puffeteria Logo" className="max-h-48 rounded-lg" />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-lightest-slate mb-2">Puffeteria - Brand Identity</h3>
                <p className="text-slate text-sm">AI-generated logo and brand concept for a fictional bakery, "Puffeteria". Showcases AI's capability in visual identity creation.</p>
              </div>
            </div>
        </AiContentCard>
      </div>
    </Section>
  );
};

export default ContentConcepts;
