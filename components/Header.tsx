import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience',label: 'Experience' },
    { href: '#campaigns', label: 'Campaigns' },
    { href: '#cost-efficiency', label: 'Cost Efficiency' },
    { href: '#content-concepts', label: 'AI Concepts' },
    { href: '#case-studies', label: 'Case Studies' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    if (!href) return;

    // A little hacky, but hero isn't a "section" so we handle it separately
    const targetId = href === '#hero' ? 'hero' : href.slice(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 animate-fade-in-down ${isScrolled ? 'bg-dark-gray/65 backdrop-blur-lg border-b border-gray/20 shadow-lg shadow-black/30' : 'bg-transparent'}`}>
        <div className="container mx-auto flex justify-end items-center p-4">
          
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
               <a 
                key={link.href} 
                href={link.href} 
                onClick={handleNavClick} 
                className={`nav-link group transition-colors duration-300 cursor-pointer text-sm font-mono ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                >
                 {link.label}
               </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-teal focus:outline-none z-50 relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
        aria-hidden={!isOpen}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-dark-gray shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link, index) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={handleNavClick} 
                  className={`text-2xl cursor-pointer transition-all duration-300 ${activeSection === link.href.substring(1) ? 'text-teal font-semibold' : 'text-lightest-slate'}`}
                  style={{ 
                    transition: 'opacity 0.3s ease, transform 0.3s ease',
                    transitionDelay: `${isOpen ? 100 + index * 50 : 0}ms`, 
                    opacity: isOpen ? 1 : 0, 
                    transform: isOpen ? 'translateY(0)' : 'translateY(10px)'
                  }}
                  tabIndex={isOpen ? 0 : -1}
                >
                  {link.label}
                </a>
              ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;