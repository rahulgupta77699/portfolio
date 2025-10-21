import React from 'react';
import { BrainCircuitIcon, RocketIcon, UsersIcon, HeartIcon } from 'lucide-react';
const About = () => {
  return <section id="about" className="py-24 bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white drop-shadow-lg mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-lg">
              Our Mission
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              At SERA4tech, we're dedicated to building smart digital solutions
              and creative projects that solve real-world problems. Our team
              combines expertise in AI, web development, and innovative design
              to create meaningful technology that makes a difference.
            </p>
            <p className="text-white/90 mb-6 leading-relaxed">
              We believe in the power of technology to transform ideas into
              reality. Our collaborative approach ensures that every project we
              undertake reflects our commitment to excellence, innovation, and
              client satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white/20 backdrop-blur-md rounded-lg shadow-lg border border-white/20">
              <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center mb-4">
                <BrainCircuitIcon size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">
                Innovation
              </h4>
              <p className="text-white/90">
                Pushing boundaries with cutting-edge solutions and creative
                approaches.
              </p>
            </div>
            <div className="p-6 bg-white/20 backdrop-blur-md rounded-lg shadow-lg border border-white/20">
              <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center mb-4">
                <RocketIcon size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">
                Excellence
              </h4>
              <p className="text-white/90">
                Committed to delivering high-quality work that exceeds
                expectations.
              </p>
            </div>
            <div className="p-6 bg-white/20 backdrop-blur-md rounded-lg shadow-lg border border-white/20">
              <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center mb-4">
                <UsersIcon size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">
                Collaboration
              </h4>
              <p className="text-white/90">
                Working together to achieve shared goals and create impactful
                solutions.
              </p>
            </div>
            <div className="p-6 bg-white/20 backdrop-blur-md rounded-lg shadow-lg border border-white/20">
              <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center mb-4">
                <HeartIcon size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">
                Passion
              </h4>
              <p className="text-white/90">
                Driven by our love for technology and its potential to create
                positive change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;