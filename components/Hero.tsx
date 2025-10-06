import React from 'react';
import { DownloadIcon } from './Icons';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start">
      <div className="max-w-4xl">
        <p className="text-teal text-lg mb-4 stagger-1">Hi, My name is</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-lightest-slate stagger-2 animate-float-1 gradient-text">
          Mayank Pandey.
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mt-2 stagger-3 animate-float-2">
          I turn ideas into impact.
        </h2>
        <p className="text-slate max-w-2xl mt-6 stagger-4">
          I'm on the frontline of AI in marketing, using it to work smarter, move faster, and create content that truly connects. I specialize in building systems that turn ideas into impact quickly, making brands more efficient, creative, and ready to scale.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 stagger-5">
           <a href="#contact" onClick={handleScroll} className="relative px-8 py-3 border border-teal text-teal rounded-md hover:bg-teal/10 transition-colors duration-300 text-center font-medium overflow-hidden group">
            <span className="absolute inset-0 bg-teal/10 w-0 group-hover:w-full transition-all duration-300 ease-out"></span>
            <span className="relative">Contact Me</span>
          </a>
          <a href="https://github.com/neorich/files/blob/main/Mayank-Resume.pdf?raw=true" download="Mayank-Pandey-Resume.pdf" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-3 bg-teal text-black rounded-md hover:bg-teal-dark hover:shadow-[0_0_25px_-5px_rgba(100,255,218,0.3)] hover:-translate-y-0.5 transform transition-all duration-300 font-semibold text-center flex items-center justify-center overflow-hidden">
             <span className="transition-transform duration-300 ease-out group-hover:-translate-x-4">Download Resume</span>
             <span className="absolute inset-y-0 right-0 flex items-center pr-4 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300 ease-out pointer-events-none">
                <DownloadIcon className="w-5 h-5"/>
             </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;