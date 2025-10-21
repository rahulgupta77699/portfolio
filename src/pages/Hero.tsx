import React, { useEffect, useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isSubtextVisible, setIsSubtextVisible] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
    // Stagger the animations
    const textTimer = setTimeout(() => {
      setIsTextVisible(true);
    }, 300);
    const subtextTimer = setTimeout(() => {
      setIsSubtextVisible(true);
    }, 800);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(subtextTimer);
    };
  }, []);
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative w-full min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5 dark:opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl -mx-8 -my-8"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
              <span className={`block text-white drop-shadow-lg transition-all duration-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Welcome to
              </span>
              <span className={`block text-white font-bold drop-shadow-lg
                transition-all duration-700 transform ${isTextVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}>
                SERA4tech
              </span>
            </h1>
            <p className={`mt-8 text-xl md:text-2xl max-w-3xl mx-auto lg:mx-0 text-white/90 drop-shadow-md
              transition-all duration-700 transform ${isSubtextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Innovating Ideas into Intelligent Solutions
            </p>
            <div className={`mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-4
              transition-all duration-700 delay-300 transform ${isSubtextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })} className="px-8 py-3 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium shadow-lg hover:shadow-xl hover:bg-white/30 transition-all hover:scale-105 transform">
                Get in Touch
              </button>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({
              behavior: 'smooth'
            })} className="px-8 py-3 rounded-lg border-2 border-white/40 text-white font-medium hover:bg-white/20 backdrop-blur-md transition-all transform hover:scale-105">
                View Our Work
              </button>
            </div>
          </div>
          
          {/* Professional Workspace Image */}
          <div className={`hidden lg:block transition-all duration-700 delay-500 transform ${isSubtextVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Professional Team" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button onClick={scrollToAbout} className={`p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-md hover:shadow-lg hover:bg-white/30
          transition-all duration-1000 delay-1000 ${isSubtextVisible ? 'opacity-100 animate-bounce' : 'opacity-0'}`} aria-label="Scroll down">
          <ChevronDownIcon size={24} />
        </button>
      </div>
    </section>;
};
export default Hero;