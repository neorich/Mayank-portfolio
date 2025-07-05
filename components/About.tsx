
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-4xl mx-auto">
        <div className="text-slate text-lg leading-loose">
          <p className="mb-4">
            Hello! I'm Mayank, a Digital Marketing Manager passionate about solving complex challenges with innovative, data-driven campaigns. With over four years of experience co-founding and growing a digital marketing agency, I've honed my skills in everything from strategic planning and team leadership to hands-on campaign execution and process optimization.
          </p>
          <p className="mb-4">
            I thrive on leveraging technology, especially AI and automation, to build groundbreaking solutions that drive ROI and pioneer brand growth. My work involves a deep dive into market research, audience persona development, and creating scalable systems that enhance efficiency and deliver high-impact results for clients across various industries.
          </p>
          <p>
            Whether it's launching a viral social media campaign or pioneering AI-driven marketing audits, my goal is always to deliver measurable success and contribute to building strong, resilient brands.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
