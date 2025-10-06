import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
        {/* Text Content */}
        <div className="md:col-span-3 text-slate text-lg leading-relaxed">
          <p className="mb-4 section-hidden" style={{ transitionDelay: '100ms' }}>
            Hello! I'm Mayank, a Fractional Marketing Director and Strategic Advisor focused on the intersection of AI and marketing. My goal is simple: to work smarter, move faster, and create content that genuinely connects. I have a proven track record of co-founding and scaling a digital marketing agency, achieving consistent profitability over four years.
          </p>
          <p className="mb-4 section-hidden" style={{ transitionDelay: '200ms' }}>
            My expertise lies in building robust systems that transform ideas into tangible impact. By implementing AI enablement, data-driven frameworks, and scalable creative workflows, I help brands become more efficient, innovative, and prepared for growth.
          </p>
          <p className="section-hidden" style={{ transitionDelay: '300ms' }}>
            From reducing go-to-market time by 30% to improving predictable cash flow by 50%, I thrive on delivering measurable results that shape not just marketing execution but core business direction.
          </p>
        </div>
        
        {/* Profile Image */}
        <div className="md:col-span-2 section-hidden" style={{ transitionDelay: '400ms' }}>
          <div className="group relative w-full max-w-[300px] mx-auto md:mx-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal via-slate to-dark-gray rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative tilt-card-wrapper">
                  <div className="tilt-card rounded-lg overflow-hidden">
                      <img 
                          className="w-full h-auto object-cover" 
                          src="https://github.com/neorich/files/blob/main/mayank.jpg?raw=true" 
                          alt="Mayank Pandey"
                      />
                  </div>
              </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;