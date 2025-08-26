import React from "react";
import { Button } from "./ui/button";
import { ChevronDown, Mail, Linkedin, Github } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50"></div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-light text-black mb-6 tracking-tight">
              GAYATHRI V
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide">
              Aspiring AI/ML Engineer & Computer Science Graduate
            </p>
          </div>

          {/* Brief intro */}
          <div className="mb-12 max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Master's student in Computer Applications with expertise in Machine Learning, 
              Computer Vision, and Full-Stack Development. Passionate about building 
              intelligent solutions that make a difference.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={scrollToProjects}
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-base font-medium transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              size="lg" 
              className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-3 text-base font-medium transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="mailto:visu12268@gmail.com" 
              className="p-3 border border-gray-300 rounded-full hover:border-black hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} className="text-gray-600 hover:text-black" />
            </a>
            <a 
              href="https://linkedin.com/in/gayathri-v-69294a221" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 border border-gray-300 rounded-full hover:border-black hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-gray-600 hover:text-black" />
            </a>
            <a 
              href="#" 
              className="p-3 border border-gray-300 rounded-full hover:border-black hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} className="text-gray-600 hover:text-black" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ChevronDown 
              size={32} 
              className="text-gray-400 mx-auto cursor-pointer hover:text-black transition-colors duration-300" 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-gray-200 rounded-full opacity-30 animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border border-gray-200 rounded-full opacity-30 animate-pulse hidden lg:block"></div>
    </section>
  );
};

export default Hero;
