import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-6 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in discussing new opportunities, projects, 
            or just having a conversation about technology and innovation
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light text-black mb-6">Get In Touch</h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Whether you're looking to collaborate on a project, discuss opportunities, 
                  or simply want to connect, I'd love to hear from you. Feel free to reach 
                  out through any of the channels below.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Mail size={20} className="text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-black">Email</p>
                    <a 
                      href="mailto:visu12268@gmail.com" 
                      className="text-gray-600 hover:text-black transition-colors duration-300"
                    >
                      visu12268@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Phone size={20} className="text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-black">Phone</p>
                    <a 
                      href="tel:+916381261831" 
                      className="text-gray-600 hover:text-black transition-colors duration-300"
                    >
                      +91-6381261831
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <MapPin size={20} className="text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-black">Location</p>
                    <p className="text-gray-600">Madurai, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <Linkedin size={20} className="text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-black">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/gayathri-v-69294a221" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors duration-300"
                    >
                      gayathri-v-69294a221
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-8">
                <p className="text-gray-700 mb-4">Prefer direct contact?</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    asChild
                    className="bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                  >
                    <a href="mailto:visu12268@gmail.com">
                      <Mail size={16} className="mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:border-black hover:text-black transition-all duration-300"
                  >
                    <a 
                      href="https://linkedin.com/in/gayathri-v-69294a221" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={16} className="mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-black">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-black"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-black"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-2 block">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-black"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="border-gray-300 focus:border-black resize-none"
                      placeholder="Tell me more about your project or inquiry..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                  >
                    <Send size={16} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
