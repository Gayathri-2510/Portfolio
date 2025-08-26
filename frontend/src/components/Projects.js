import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Calendar, Zap } from "lucide-react";
import { mockProjects } from "../data/mock";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A showcase of my technical journey through various domains including 
            Machine Learning, Web Development, and Computer Vision
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {mockProjects.map((project, index) => (
            <Card 
              key={index}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-xl border-0 bg-white ${
                hoveredProject === index ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                <div className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  {project.icon}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-black text-white">
                    {project.year}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold text-black group-hover:text-gray-800 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline"
                      className="text-xs border-gray-300 text-gray-700 hover:border-black hover:text-black transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-800 mb-3">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Zap size={12} className="mt-1 mr-2 text-gray-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-black text-white hover:bg-gray-800 flex-1 transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink size={14} className="mr-2" />
                    View Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:border-black hover:text-black flex-1 transition-all duration-300"
                  >
                    <Github size={14} className="mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-light text-black mb-2">4+</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-black mb-2">6+</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-black mb-2">2+</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Years Learning</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light text-black mb-2">5+</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
