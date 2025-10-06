

import React from 'react';
import Section from './Section';

// Fix: Updated component props to use React.FC for proper typing.
const AiContentCard: React.FC<{ className?: string, delay?: number, children: React.ReactNode }> = ({ children, className, delay }) => (
  <div
    className={`interactive-card p-4 md:p-6 rounded-lg shadow-lg flex flex-col section-hidden ${className}`}
    style={{ transitionDelay: `${delay || 0}ms` }}
  >
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
  const strollVerticalAdSrc = `${videoBaseUrl}Instagram%2BTik%20Tok-Ad.mp4?raw=true`;
  const strollAnimatedAdSrc = `${videoBaseUrl}YT%20Ad%202.mp4?raw=true`;
  const strollImageToVideoAdSrc = `${videoBaseUrl}Youtube%20Ad.mp4?raw=true`;


  return (
    <Section id="content-concepts" title="AI-Powered Content Concepts">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-slate mb-12 max-w-3xl mx-auto section-hidden" style={{ transitionDelay: '100ms' }}>
          Here are some examples of ad concepts, logos, and brand explorations created entirely using Generative AI tools. This showcases my ability to leverage cutting-edge technology for the rapid and creative production of marketing assets.
        </p>

        <div className="grid grid-cols-1 gap-8 md:gap-12 mb-8 md:mb-12">
          <AiContentCard delay={200}>
            <div className="rounded-md overflow-hidden mb-4 border border-gray/20 shadow-inner video-container">
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

          <AiContentCard delay={300}>
            <div className="rounded-md overflow-hidden mb-4 border border-gray/20 shadow-inner video-container">
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
          <AiContentCard delay={400}>
            <h3 className="text-xl font-bold text-lightest-slate mb-4 text-center md:text-left">Louis Vuitton - Brand Reimagined</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-3">
                <div className="rounded-md overflow-hidden border border-gray/20 shadow-inner video-container">
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
        
        <div className="mb-8 md:mb-12">
          <AiContentCard delay={500}>
            <h3 className="text-xl font-bold text-lightest-slate mb-6 text-center">Stroll (Dating App) - Multi-Format Ad Campaign</h3>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
              {/* Left Column: Vertical Ad */}
              <div className="lg:col-span-2 flex flex-col bg-black/30 p-4 rounded-lg h-full">
                <div className="rounded-md overflow-hidden mb-4 border border-gray/20 shadow-inner video-container">
                  <video src={strollVerticalAdSrc} controls loop muted playsInline autoPlay className="w-full aspect-[9/16] object-cover bg-black">
                    Your browser does not support the video tag.
                  </video>
                </div>
                <h4 className="text-lg font-bold text-light-slate">Vertical Ad for Social</h4>
                <p className="text-slate text-sm flex-grow mt-2">A fast-paced ad concept for TikTok & Instagram Reels. The voiceover was generated entirely using AI.</p>
              </div>

              {/* Right Column: Horizontal Ads */}
              <div className="lg:col-span-3 flex flex-col gap-6">
                <div className="flex flex-col bg-black/30 p-4 rounded-lg">
                  <div className="rounded-md overflow-hidden mb-4 border border-gray/20 shadow-inner video-container">
                    <video src={strollAnimatedAdSrc} controls loop muted playsInline autoPlay className="w-full aspect-video object-cover bg-black">
                       Your browser does not support the video tag.
                    </video>
                  </div>
                  <h4 className="text-lg font-bold text-light-slate">Animated YouTube Ad</h4>
                  <p className="text-slate text-sm flex-grow mt-2">Fully animated ad concept generated with Veo 3 and edited with Canva, showcasing fluid motion and brand storytelling.</p>
                </div>
                <div className="flex flex-col bg-black/30 p-4 rounded-lg">
                  <div className="rounded-md overflow-hidden mb-4 border border-gray/20 shadow-inner video-container">
                    <video src={strollImageToVideoAdSrc} controls loop muted playsInline autoPlay className="w-full aspect-video object-cover bg-black">
                       Your browser does not support the video tag.
                    </video>
                  </div>
                  <h4 className="text-lg font-bold text-light-slate">Image-to-Video Ad</h4>
                  <p className="text-slate text-sm flex-grow mt-2">This concept was brought to life from a single still image using Veo 3, with AI-generated dialogue and voiceover added.</p>
                </div>
              </div>
            </div>
          </AiContentCard>
        </div>


        <AiContentCard delay={600}>
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