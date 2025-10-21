import React from 'react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            <img src="/sera4.png" alt="SERA4tech Logo" className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover ring-2 ring-blue-500/30 mr-3" />
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                SERA4tech
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
                Innovating Ideas into Intelligent Solutions
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
              <GithubIcon size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
              <LinkedinIcon size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
              <TwitterIcon size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://www.instagram.com/sera4tech/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
              <InstagramIcon size={20} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} SERA4tech. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="https://www.instagram.com/sera4tech/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 flex items-center">
              <InstagramIcon size={16} className="mr-2" />
              Follow us on Instagram - @sera4tech
            </a>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;