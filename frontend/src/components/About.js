import React from "react";
import { Card, CardContent } from "./ui/card";
import { Target, Users, Lightbulb, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">
              About Me
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Passionate about leveraging technology to solve real-world problems
            </p>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side - Text content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I am a dedicated Computer Science graduate currently pursuing my Master's 
                in Computer Applications at Mepco Schlenk Engineering College. With a strong 
                foundation in programming and a keen interest in artificial intelligence, 
                I am passionate about creating innovative solutions that bridge the gap 
                between technology and human needs.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                My journey in technology has been driven by curiosity and a desire to learn. 
                From developing machine learning models for fabric defect detection to creating 
                user-friendly web applications, I enjoy tackling challenges that require both 
                technical expertise and creative problem-solving.
              </p>

              <p className="text-gray-700 leading-relaxed">
                As I prepare to enter the professional world, I am eager to contribute to 
                meaningful projects and collaborate with teams that share my enthusiasm 
                for innovation and excellence.
              </p>
            </div>

            {/* Right side - Profile placeholder */}
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-light">GV</span>
                  </div>
                  <p className="text-sm">Professional Photo</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border border-gray-300 rounded-full opacity-30"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gray-200 rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Values/Principles cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Target size={32} className="mx-auto text-gray-600" />
                </div>
                <h3 className="font-medium text-black mb-2">Goal-Oriented</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Focused on delivering results and achieving objectives through systematic approaches
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Lightbulb size={32} className="mx-auto text-gray-600" />
                </div>
                <h3 className="font-medium text-black mb-2">Innovation</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Always seeking creative solutions and new ways to improve existing processes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Users size={32} className="mx-auto text-gray-600" />
                </div>
                <h3 className="font-medium text-black mb-2">Collaboration</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Believe in the power of teamwork and diverse perspectives to achieve excellence
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Award size={32} className="mx-auto text-gray-600" />
                </div>
                <h3 className="font-medium text-black mb-2">Excellence</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Committed to continuous learning and delivering high-quality work in every project
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
