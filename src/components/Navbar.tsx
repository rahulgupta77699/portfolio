import React, { useState } from 'react';
import { MenuIcon, XIcon, MoonIcon, SunIcon } from 'lucide-react';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  return <nav className="fixed w-full bg-white/20 backdrop-blur-md z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-3">
              <img src="/sera4.png" alt="SERA4tech Logo" className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover ring-2 ring-blue-500/30" />
              <div className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                SERA4tech
              </div>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
<button onClick={() => scrollToSection('about')} className="text-xl md:text-2xl text-white hover:text-white/80 transition-colors">
              About
            </button>
<button onClick={() => scrollToSection('team')} className="text-xl md:text-2xl text-white hover:text-white/80 transition-colors">
              Team
            </button>
<button onClick={() => scrollToSection('projects')} className="text-xl md:text-2xl text-white hover:text-white/80 transition-colors">
              Projects
            </button>
<button onClick={() => scrollToSection('services')} className="text-xl md:text-2xl text-white hover:text-white/80 transition-colors">
              Services
            </button>
<button onClick={() => scrollToSection('contact')} className="text-xl md:text-2xl text-white hover:text-white/80 transition-colors">
              Contact
            </button>
            <button onClick={toggleTheme} className="p-2 rounded-full text-white hover:bg-white/20 transition-colors" aria-label="Toggle theme">
              {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleTheme} className="p-2 mr-2 rounded-full text-white hover:bg-white/20 transition-colors" aria-label="Toggle theme">
              {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            </button>
            <button onClick={toggleMenu} className="p-2 rounded-md text-white hover:bg-white/20 transition-colors">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white/20 backdrop-blur-md shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
<button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 rounded-md text-xl text-white hover:bg-white/20 transition-colors">
              About
            </button>
<button onClick={() => scrollToSection('team')} className="block w-full text-left px-3 py-2 rounded-md text-xl text-white hover:bg-white/20 transition-colors">
              Team
            </button>
<button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 rounded-md text-xl text-white hover:bg-white/20 transition-colors">
              Projects
            </button>
<button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 rounded-md text-xl text-white hover:bg-white/20 transition-colors">
              Services
            </button>
<button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 rounded-md text-xl text-white hover:bg-white/20 transition-colors">
              Contact
            </button>
          </div>
        </div>}
    </nav>;
};
export default Navbar;