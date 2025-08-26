import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Code, Database, Brain, Award, GraduationCap, Calendar } from "lucide-react";
import { mockSkills } from "../data/mock";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">
            Skills & Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive foundation in computer science, machine learning, 
            and software development
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Education Timeline */}
          <div className="mb-20">
            <h3 className="text-2xl font-light text-black mb-8 text-center">Education</h3>
            <div className="space-y-6">
              {mockSkills.education.map((edu, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <GraduationCap size={20} className="text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">{edu.degree}</h4>
                          <p className="text-gray-600 mb-2">{edu.institution}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar size={14} className="mr-1" />
                            {edu.year}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Programming Languages */}
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg font-medium text-black">
                  <Code size={20} className="mr-2 text-gray-600" />
                  Programming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockSkills.programming.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Databases & Tools */}
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg font-medium text-black">
                  <Database size={20} className="mr-2 text-gray-600" />
                  Databases & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {mockSkills.databases.map((db, index) => (
                    <Badge 
                      key={index} 
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:border-black hover:text-black transition-colors duration-200"
                    >
                      {db}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {mockSkills.frameworks.map((framework, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                      >
                        {framework}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Machine Learning */}
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg font-medium text-black">
                  <Brain size={20} className="mr-2 text-gray-600" />
                  Machine Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockSkills.machineLearning.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-light text-black mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockSkills.certifications.map((cert, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <Award size={32} className="mx-auto text-gray-600" />
                    </div>
                    <h4 className="font-medium text-black mb-2">{cert.name}</h4>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
