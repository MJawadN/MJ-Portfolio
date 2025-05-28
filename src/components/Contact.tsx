import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#00589A" }}
          >
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "#00589A" }}
              >
                Let's Connect
              </h3>
              <p className="text-slate-600 mb-8">
                I'm always interested in new opportunities, whether it's a
                freelance project, full-time position, or just a chat about
                technology and development.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-200">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Email</p>
                  <a
                    href="mailto:mjnassereddine@gmail.com"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    mjnassereddine@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-200">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Phone</p>
                  <a
                    href="tel:+96103655689"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    +961 03 655 689
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-200">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Location</p>
                  <p className="text-slate-600">Beirut, Lebanon</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-4 text-slate-800">
                Social Links
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/MJawadN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300"
                >
                  <Github className="w-5 h-5 text-slate-600" />
                  <span className="text-slate-700 font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamad-jawad-nassereddine-9887a12a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700 font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: "#00589A" }}
            >
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-slate-700"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-slate-700"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2 text-slate-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-slate-700"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
