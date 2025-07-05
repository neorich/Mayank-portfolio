import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience',label: 'Experience' },
    { href: '#campaigns', label: 'Campaigns' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    if (!href) return;

    const targetId = href.startsWith('#') ? href.slice(1) : 'hero';
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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 animate-fade-in-down ${isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-md shadow-black/20' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-end items-center p-4">
        
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link, index) => (
             <a key={link.href} href={link.href} onClick={handleNavClick} className="nav-link group text-lightest-slate hover:text-teal transition-colors duration-300 cursor-pointer text-sm font-mono">
               {link.label}
             </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-teal focus:outline-none z-50">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      <div className={`md:hidden fixed top-0 right-0 h-full w-3/4 bg-dark-gray/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
             {navLinks.map((link, index) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={handleNavClick} 
                  className="text-lightest-slate hover:text-teal transition-all duration-300 text-2xl cursor-pointer"
                  style={{ transitionDelay: `${isOpen ? index * 100 : 0}ms`, opacity: isOpen ? 1 : 0, transform: isOpen ? 'translateY(0)' : 'translateY(10px)' }}
                >
                  {link.label}
                </a>
              ))}
          </nav>
      </div>
    </header>
  );
};

export default Header;
