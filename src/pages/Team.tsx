import React from 'react';
import { LinkedinIcon, GithubIcon, ExternalLinkIcon } from 'lucide-react';
const teamMembers = [{
  name: 'Arya',
  role: 'Frontend Developer',
  bio: 'Specializes in creating responsive and intuitive user interfaces with modern frontend frameworks and technologies.'
}, {
  name: 'Rahul',
  role: 'Web Developer',
  bio: 'Full-stack developer with a passion for creating seamless user experiences and optimized back-end solutions.'
}, {
  name: 'Sahil',
  role: 'Backend Developer',
  bio: 'Expert in building robust server-side applications, APIs, and database architecture for scalable solutions.'
}, {
  name: 'Esha',
  role: 'UI/UX Designer & Project Coordinator',
  bio: 'Combines creative design thinking with project management to deliver exceptional user experiences and successful projects.'
}];
const Team = () => {
  return <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the talented individuals behind SERA4tech's success
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col h-full">
              <div className="text-center flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-blue-600 dark:text-primary-400 mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm flex-grow">
                  {member.bio}
                </p>
                <div className="flex justify-center space-x-4 mt-auto">
                  <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label={`${member.name}'s LinkedIn profile`}>
                    <LinkedinIcon size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label={`${member.name}'s GitHub profile`}>
                    <GithubIcon size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors" aria-label={`${member.name}'s personal website`}>
                    <ExternalLinkIcon size={18} />
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Team;