
import React, { useState, useEffect, useRef, forwardRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Campaigns from './components/Campaigns';
import CostEfficiency from './components/CostEfficiency';
import ContentConcepts from './components/ContentConcepts';
import Education from './components/Education';
import Contact from './components/Contact';
import CursorGlow from './components/CursorGlow';
import { campaignData } from './constants';
import { LinkedInIcon, EmailIcon, PhoneIcon } from './components/Icons';

const SocialLinks = forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} className="hidden md:flex flex-col items-center fixed bottom-0 left-10 z-10">
    <a href="https://www.linkedin.com/in/mayank3pandey/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-slate hover:text-teal hover:-translate-y-1 transition-all duration-300">
      <LinkedInIcon className="w-6 h-6" />
    </a>
    <a href="mailto:makemerichmp@gmail.com" aria-label="Email" className="p-2 text-slate hover:text-teal hover:-translate-y-1 transition-all duration-300">
      <EmailIcon className="w-6 h-6" />
    </a>
    <a href="tel:+917869207670" aria-label="Phone" className="p-2 text-slate hover:text-teal hover:-translate-y-1 transition-all duration-300">
      <PhoneIcon className="w-6 h-6" />
    </a>
    <div className="w-px h-24 bg-slate mt-2"></div>
  </div>
));
SocialLinks.displayName = 'SocialLinks';


const EmailLink = forwardRef<HTMLDivElement>((props, ref) => (
   <div ref={ref} className="hidden md:flex flex-col items-center fixed bottom-0 right-10 z-10">
      <a href="mailto:makemerichmp@gmail.com" className="p-2 text-sm text-slate hover:text-teal transition-colors duration-300 tracking-widest font-mono" style={{ writingMode: 'vertical-rl' }}>
        makemerichmp@gmail.com
      </a>
      <div className="w-px h-24 bg-slate mt-4"></div>
   </div>
));
EmailLink.displayName = 'EmailLink';


const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAppVisible, setIsAppVisible] = useState(false);

  const socialLinksRef = useRef<HTMLDivElement>(null);
  const emailLinkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide loader and show app content
    const timer = setTimeout(() => {
        const loader = document.getElementById('loader-container');
        if (loader) {
            loader.classList.add('hidden');
            // Remove the loader from the DOM after the transition ends
            setTimeout(() => loader.remove(), 500);
        }
        setIsAppVisible(true);
    }, 2800); // Time for loader animation

    return () => clearTimeout(timer);
  }, []);


  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    // Parallax effect for side elements
    if (window.innerWidth > 768) {
        const parallaxOffset = scrollY * -0.1;
        if (socialLinksRef.current) {
            socialLinksRef.current.style.transform = `translateY(${parallaxOffset}px)`;
        }
        if (emailLinkRef.current) {
            emailLinkRef.current.style.transform = `translateY(${parallaxOffset}px)`;
        }
    }
  };

  useEffect(() => {
    if (!isAppVisible) return;

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.section-hidden');
    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, [isAppVisible]);
  
  return (
    <>
      <div className={`relative transition-opacity duration-500 ${!isAppVisible ? 'opacity-0' : 'opacity-100'}`}>
        <CursorGlow />
        <Header isScrolled={isScrolled} />
        <SocialLinks ref={socialLinksRef} />
        <EmailLink ref={emailLinkRef} />
        <main className="container mx-auto px-6 md:px-12 lg:px-32">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Campaigns campaigns={campaignData} />
          <CostEfficiency />
          <ContentConcepts />
          <Education />
          <Contact />
        </main>
        <footer className="text-center py-10 text-slate mt-20">
          {/* Social Links for Mobile */}
          <div className="flex md:hidden justify-center space-x-8 mb-8">
            <a href="https://www.linkedin.com/in/mayank3pandey/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-slate hover:text-teal transform hover:-translate-y-1 transition-all duration-300">
              <LinkedInIcon className="w-7 h-7" />
            </a>
            <a href="mailto:makemerichmp@gmail.com" aria-label="Email" className="p-2 text-slate hover:text-teal transform hover:-translate-y-1 transition-all duration-300">
              <EmailIcon className="w-7 h-7" />
            </a>
            <a href="tel:+917869207670" aria-label="Phone" className="p-2 text-slate hover:text-teal transform hover:-translate-y-1 transition-all duration-300">
              <PhoneIcon className="w-7 h-7" />
            </a>
          </div>
          <div className="font-mono text-xs space-y-2">
            <a href="https://github.com/neorich" target="_blank" rel="noopener noreferrer" className="inline-block text-slate hover:text-teal transition-colors duration-300">
                Designed & Built by Mayank Pandey
            </a>
             <p className="text-slate/60">A showcase of human creativity and machine intelligence.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
