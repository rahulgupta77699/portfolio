import React from 'react';
import { PhoneIcon, MailIcon } from 'lucide-react';
import ContactForm from '../components/ContactForm';
const Contact = () => {
  return <section id="contact" className="py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can help.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Get in Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Fill out the form and our team will get back to you within 24
              hours. We're excited to hear about your project and how we can
              contribute to its success.
            </p>
            <div className="space-y-4">
              {/* Location removed as requested */}
              <div className="flex items-center">
                <PhoneIcon size={20} className="text-primary-600 dark:text-primary-400" />
                <span className="ml-3 text-gray-600 dark:text-gray-300">
                  7420970129
                </span>
              </div>
              <div className="flex items-center">
                <MailIcon size={20} className="text-primary-600 dark:text-primary-400" />
                <span className="ml-3 text-gray-600 dark:text-gray-300">
                  sera4tech@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
