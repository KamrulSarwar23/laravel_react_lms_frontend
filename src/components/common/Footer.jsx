import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 pt-16 pb-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="group">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6 group-hover:scale-105 transition-transform duration-300">
                LMS
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Join our Learning Management System and explore a wide range of
                courses to enhance your skills and achieve your goals.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4">
                {[
                  { name: "Twitter", icon: "𝕏" },
                  { name: "LinkedIn", icon: "💼" },
                  { name: "Discord", icon: "💬" },
                  { name: "GitHub", icon: "🐙" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-lg hover:bg-purple-500/30 hover:scale-110 transition-all duration-300 group"
                    title={social.name}
                  >
                    <span className="group-hover:rotate-12 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative">
              Popular Categories
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                "Digital Marketing",
                "Web Development",
                "Machine Learning",
                "Web Design",
                "Logo Design",
                "Graphic Design",
              ].map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 group-hover:bg-pink-400 transition-colors duration-300"></span>
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {["Login", "Register", "My Account", "Courses"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 group-hover:bg-purple-400 transition-colors duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative">
              Stay Updated
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full"></div>
            </h3>
            <p className="text-slate-300 mb-4">
              Get the latest courses and updates delivered to your inbox.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 mb-2 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
              />
              <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2025 LMS Platform. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-white hover:text-gray-300 transition-colors duration-300"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-40 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-500"></div>
      </div>
    </footer>
  );
};

export default Footer;
