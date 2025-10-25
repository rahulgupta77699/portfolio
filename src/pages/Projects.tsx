import React, { useState } from 'react';
import { ExternalLinkIcon, ChevronRightIcon } from 'lucide-react';
const projects = [{
  title: 'AI-Based Aircraft Maintenance Predictor',
  description: 'A machine learning system that predicts aircraft maintenance needs by analyzing operational data, reducing downtime and improving safety.',
  image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  tags: ['Machine Learning', 'Python', 'Predictive Analytics', 'Aviation'],
  url: 'https://c3.ai/customers/enterprise-ai-for-aircraft-predictive-maintenance/?utm_source=chatgpt.com'
}, {
  title: 'FRA Atlas WebGIS System',
  description: 'An interactive web-based geographic information system for forest resource assessment, enabling data visualization and analysis.',
  image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  tags: ['GIS', 'Web Development', 'Data Visualization', 'Forestry'],
  url: 'https://fra1.onrender.com'
}, {
  title: 'Cybercrime Predictive Framework',
  description: 'An AI framework that analyzes patterns to predict and prevent potential cybersecurity threats before they occur.',
  image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  tags: ['Cybersecurity', 'AI', 'Threat Detection', 'Data Analysis'],
  url: 'https://www.researchgate.net/publication/388851104_Developing_Predictive_Financial_Fraud_Models_Using_AI-Driven_Analytics_Within_Cybercrime-Resilient_Security_Ecosystems'
}];
const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  return <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our innovative solutions and creative work
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Project Image */}
          <div className="order-2 md:order-1 relative">
            <div className="rounded-xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-100">
              <img src={projects[activeProject].image} alt={projects[activeProject].title} className="w-full h-full object-cover object-center transition-all duration-500 ease-in-out" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg opacity-20 -z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary-500 rounded-lg -z-10"></div>
          </div>
          {/* Project Info */}
          <div className="order-1 md:order-2">
            <div className="space-y-6 transition-all duration-500 ease-in-out">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-gray-900 transition-all duration-500">
                  {projects[activeProject].title}
                </h3>
                <p className="text-gray-600 leading-relaxed transition-all duration-500">
                  {projects[activeProject].description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 transition-all duration-500">
                {projects[activeProject].tags.map((tag, index) => <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {tag}
                  </span>)}
              </div>
              {projects[activeProject].url ? (
                <a 
                  href={projects[activeProject].url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 font-medium hover:underline"
                >
                  View Project <ChevronRightIcon size={16} className="ml-1" />
                </a>
              ) : (
                <span className="inline-flex items-center text-gray-400 font-medium cursor-not-allowed">
                  Coming Soon <ChevronRightIcon size={16} className="ml-1" />
                </span>
              )}
            </div>
            {/* Project Navigation */}
            <div className="mt-12 flex space-x-4">
              {projects.map((project, index) => <button key={index} onClick={() => setActiveProject(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${activeProject === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`} aria-label={`View ${project.title} project`} />)}
            </div>
          </div>
        </div>
        {/* More Projects Button */}
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-100 transition-colors">
            View All Projects
            <ExternalLinkIcon size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>;
};
export default Projects;