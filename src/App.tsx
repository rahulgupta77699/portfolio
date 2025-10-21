import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';
export function App() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };
  return <div className="min-h-screen w-full animated-gradient-bg text-white">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Team />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>;
}
