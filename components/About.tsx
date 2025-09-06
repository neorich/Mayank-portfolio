import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-4xl mx-auto">
        <div className="text-slate text-lg leading-loose">
          <p className="mb-4">
            Hello! I'm Mayank, a Fractional Marketing Director and Strategic Advisor focused on the intersection of AI and marketing. My goal is simple: to work smarter, move faster, and create content that genuinely connects. I have a proven track record of co-founding and scaling a digital marketing agency, achieving consistent profitability over four years.
          </p>
          <p className="mb-4">
            My expertise lies in building robust systems that transform ideas into tangible impact. By implementing AI enablement, data-driven frameworks, and scalable creative workflows, I help brands become more efficient, innovative, and prepared for growth. From reducing go-to-market time by 30% to improving predictable cash flow by 50%, I thrive on delivering measurable results.
          </p>
          <p>
            Whether leading a team of professionals, advising leadership on revenue optimization, or executing a viral campaign, my passion is to shape not just marketing execution but the core business direction and operational scalability of the brands I work with.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;