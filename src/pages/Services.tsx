import React from 'react';
import { BrainIcon, GlobeIcon, PenToolIcon, BarChartIcon } from 'lucide-react';
const services = [{
  title: 'AI Solutions',
  description: 'Custom artificial intelligence solutions including machine learning models, predictive analytics, and intelligent automation systems.',
  icon: <BrainIcon size={24} />,
  color: 'from-blue-500 to-purple-500'
}, {
  title: 'Web Development',
  description: 'End-to-end web application development with modern frameworks, responsive design, and seamless user experiences.',
  icon: <GlobeIcon size={24} />,
  color: 'from-green-500 to-teal-500'
}, {
  title: 'UI/UX Design',
  description: 'User-centered design services including interface design, prototyping, user research, and interaction design.',
  icon: <PenToolIcon size={24} />,
  color: 'from-orange-500 to-pink-500'
}, {
  title: 'Data Analytics',
  description: 'Comprehensive data analysis services to help businesses gain insights, visualize trends, and make data-driven decisions.',
  icon: <BarChartIcon size={24} />,
  color: 'from-red-500 to-yellow-500'
}];
const Services = () => {
  return <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:transform hover:-translate-y-1">
              <div className="p-1">
                <div className={`bg-gradient-to-r ${service.color} p-6 rounded-t-lg`}>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to start your project?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We're here to help turn your ideas into reality. Let's
                collaborate to create something amazing together.
              </p>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })} className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-md shadow-md hover:shadow-lg transition-all">
                Get in Touch
              </button>
            </div>
            <div className="hidden md:block">
              <div className="h-full w-full bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-lg flex items-center justify-center">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  SERA4tech
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;