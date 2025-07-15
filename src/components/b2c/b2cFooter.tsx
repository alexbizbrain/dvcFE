import React from 'react';
import { Email, Phone, Language, LinkedIn, Facebook, Instagram, YouTube } from '@mui/icons-material';

const FooterSection = () => {
  const offices = [
    {
      title: "California Office",
      email: "info@dvc.com",
      phone: "(555) 454-8476"
    },
    {
      title: "New York Office",
      email: "info@dvc.com",
      phone: "(555) 454-8476"
    },
    {
      title: "Texas Office",
      email: "info@dvc.com",
      phone: "(555) 454-8476"
    },
    {
      title: "Florida Office",
      email: "info@dvc.com",
      phone: "(555) 454-8476"
    }
  ];

  const navigationLinks = [
    "Home",
    "How It Works",
    "Pricing",
    "Blog",
    "About us",
    "Contact"
  ];

  const socialLinks = [
    { icon: LinkedIn, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: YouTube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            
            {/* Logo */}
            <div className="mb-6 lg:mb-0">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center mr-3">
                  <div className="text-white font-bold text-xl">D</div>
                </div>
                <span className="text-xl font-semibold">DVC</span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="mb-6 lg:mb-0">
              <ul className="flex flex-wrap justify-center lg:justify-end gap-8">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Language Selector */}
            <div className="flex items-center gap-2">
              <Language className="w-5 h-5 text-gray-400" />
              <select className="bg-transparent text-white border-none outline-none cursor-pointer">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Office Locations */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4">
                {office.title}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Email className="w-5 h-5 text-gray-400" />
                  <a 
                    href={`mailto:${office.email}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {office.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <a 
                    href={`tel:${office.phone}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {office.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Copyright */}
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              All Rights Reserved by DVC | Since 2025
            </p>

            {/* Social Media Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-golden transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;