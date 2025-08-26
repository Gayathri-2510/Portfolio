import React from "react";
import { Mail, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand section */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-light mb-4">Gayathri V</h3>
              <p className="text-gray-400 leading-relaxed">
                Aspiring AI/ML Engineer passionate about building innovative 
                solutions that make a difference in the world.
              </p>
            </div>

            {/* Quick links */}
            <div className="md:col-span-1">
              <h4 className="font-medium mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <button
                  onClick={() => scrollToSection('about')}
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact
                </button>
              </nav>
            </div>

            {/* Contact info */}
            <div className="md:col-span-1">
              <h4 className="font-medium mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:visu12268@gmail.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Mail size={16} />
                  <span>visu12268@gmail.com</span>
                </a>
                <a 
                  href="https://linkedin.com/in/gayathri-v-69294a221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn Profile</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-400">
                  <span className="text-sm">Madurai, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:visu12268@gmail.com"
              className="p-3 border border-gray-700 rounded-full hover:border-white hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/gayathri-v-69294a221"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-700 rounded-full hover:border-white hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#"
              className="p-3 border border-gray-700 rounded-full hover:border-white hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-gray-800">
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>© {currentYear} Gayathri V. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and lots of coffee</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
