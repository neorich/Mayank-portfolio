

import React, { useRef } from 'react';
import Section from './Section';
import { TrendingUpIcon, LightbulbIcon } from './Icons';

// Fix: Updated component props to use React.FC for proper typing.
const TiltCard: React.FC<{ index: number, children: React.ReactNode }> = ({ children, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return; // Disable tilt on mobile
    const card = cardRef.current;
    if (!card) return;
    
    card.style.transition = 'transform 0.05s linear';
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    const rotateX = -((y - height / 2) / (height / 2)) * 6;
    const rotateY = ((x - width / 2) / (width / 2)) * 6;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
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
        className="interactive-card tilt-card p-6 md:p-8 rounded-lg shadow-lg section-hidden h-full"
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        {children}
      </div>
    </div>
  )
}

const CaseStudyCard: React.FC<{
  icon: React.ReactNode;
  supertitle: string;
  title: string;
  children: React.ReactNode;
}> = ({ icon, supertitle, title, children }) => {
  return (
    <article>
        <div className="flex items-center mb-4">
            <span className="text-teal mr-4">{icon}</span>
            <div>
                <p className="text-sm text-teal font-mono">{supertitle}</p>
                <h3 className="text-2xl font-bold text-lightest-slate">{title}</h3>
            </div>
        </div>
        <div className="prose max-w-none break-words min-w-0">
            {children}
        </div>
    </article>
  )
}

const CaseStudies: React.FC = () => {
  return (
    <Section id="case-studies" title="Case Studies & Insights">
      <div className="space-y-12">
        <TiltCard index={0}>
            <CaseStudyCard icon={<TrendingUpIcon />} supertitle="Case Study" title="10M+ View Instagram Reel Campaign">
                <h4>Overview</h4>
                <p>As a digital marketer specializing in viral content, I launched a bold Instagram Reel campaign to showcase my expertise in meme marketing. The campaign centered on a series of 5 short-form videos that pushed boundaries with unfiltered, humorous takes on brand storytelling. What started as my internal experiment to test "edgy" content quickly exploded into a viral phenomenon, amassing over 10 million views, 500k+ likes, and 50k+ shares. This case study breaks down how I embraced "cringey" creativity over polished perfection to drive unprecedented growth, proving that in the attention economy, no buzz is bad buzz.</p>
                
                <h4>Challenge</h4>
                <p>I faced a classic hurdle as an independent marketer: standing out in a saturated Instagram landscape where brands default to safe, guideline-compliant content—think glossy product shots and scripted testimonials. My goal was twofold: build organic awareness for my meme marketing services (which blend humor, trends, and creativity for client campaigns) and generate inbound leads without a hefty ad budget. Traditional approaches felt stale; I needed something raw and shareable to cut through the noise, even if it risked coming across as childish or unprofessional.</p>
                
                <h4>Strategy & Execution</h4>
                <p>I leaned into the "no attention is bad attention" philosophy, prioritizing virality over brand safety. The core idea: Create Reels that mocked corporate clichés with over-the-top, cringey skits—think exaggerated "boss vs. intern" memes featuring cat filters, absurd sound effects, and self-deprecating marketing life humor. This wasn't your standard brand content; it deliberately broke guidelines by being irreverent and unpolished, drawing from internet culture's love for relatable chaos. Over one week, We produced and launched 5 Reels.</p>
                
                <h4>Results</h4>
                <ul>
                    <li><strong>Engagement Metrics:</strong> 10M+ views, 500k+ likes, 50k+ shares—organic reach 15x Our follower count at launch.</li>
                    <li><strong>Growth:</strong> Gained 4,000 new followers in 7 days, a 40% audience increase.</li>
                    <li><strong>Business Impact:</strong> Over 20 inbound leads for meme marketing services.</li>
                    <li><strong>ROI:</strong> Zero ad spend; 30% uplift in website traffic and 25% conversion rate on lead forms.</li>
                </ul>
                
                <h4>Key Learnings & Skills Showcased</h4>
                <ul>
                    <li><strong>Learnings:</strong> Virality favors authenticity over perfection—cringe creates conversation. Always A/B test and iterate quickly.</li>
                    <li><strong>Skills:</strong> Viral content creation, analytics (Instagram Insights), meme storytelling, and bold creative direction.</li>
                </ul>
            </CaseStudyCard>
        </TiltCard>
        
        <TiltCard index={1}>
            <CaseStudyCard icon={<LightbulbIcon />} supertitle="Industry Analysis" title="Insights on Meta's Andromeda Update (2025)">
                <h4>Overview</h4>
                <p>Meta's Andromeda update, fully operational by mid-2025, represents a seismic evolution in ad delivery. This AI-powered retrieval engine moves beyond traditional targeting to hyper-personalized matching based on "creative signals"—subtle elements in my ads like visuals, language, and audio that the algorithm interprets in real-time. This analysis breaks down the core changes and shares actionable insights for adapting to this new landscape.</p>
                
                <h4>What Changed and Why</h4>
                <p>Andromeda is a foundational overhaul of Meta's ad infrastructure. Pre-Andromeda, I relied on manual levers like stacked interests and lookalike audiences. Now, the system prioritizes broad audiences and lets AI handle the rest through creative signals. Key shifts include:</p>
                <ul>
                    <li><strong>From Targeting to Signals:</strong> Andromeda de-emphasizes explicit demographics in favor of implicit cues from my creative.</li>
                    <li><strong>Advantage+ Deep Integration:</strong> Automation tools now demand diverse, high-quality creatives to avoid "learning phase" pitfalls.</li>
                    <li><strong>Speed and Scale:</strong> Delivery is 2-3x faster, with lower CPMs for signal-rich ads, but poor creatives get throttled.</li>
                </ul>
                
                <h4>Key Insights for Marketers</h4>
                <ul>
                    <li><strong>Creative Diversity is King:</strong> Andromeda thrives on variety (e.g., 5-10 creative variations per set) to train its models.</li>
                    <li><strong>Signal Stacking for Virality:</strong> Layer cues intentionally—pair humor with bold visuals and punchy copy to help AI match to share-prone users.</li>
                    <li><strong>The Learning Curve Trap:</strong> Early campaigns may underperform as AI "learns". Solution: Start broad, monitor feedback, and iterate daily.</li>
                    <li><strong>ROI in the Long Game:</strong> Signal-optimized ads can yield 2-4x ROAS over time, especially for organic-viral hybrids.</li>
                </ul>
                
                <h4>Implications & Final Thoughts</h4>
                <p>Andromeda levels the playing field: clever creators can outpace polished agencies. The bigger shift is that marketing becomes collaborative with AI. Staying current with updates like Andromeda keeps my strategies sharp—blending viral creativity with tech savvy.</p>
            </CaseStudyCard>
        </TiltCard>
      </div>
    </Section>
  );
};

export default CaseStudies;