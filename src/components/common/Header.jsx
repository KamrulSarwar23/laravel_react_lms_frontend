import React, { useState } from "react";
import { Search, Menu, X, BookOpen, User, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Smart Learning
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/courses"
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
            >
              All Courses
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>

            {/* Modern Search Bar */}
            <div
              className={`relative transition-all duration-300 ${
                isSearchFocused ? "w-80" : "w-64"
              }`}
            >
              <div
                className={`flex items-center bg-gray-50 rounded-full px-4 py-2 transition-all duration-300 ${
                  isSearchFocused
                    ? "bg-white ring-2 ring-blue-500/20 shadow-lg"
                    : "hover:bg-gray-100"
                }`}
              >
                <Search className="w-4 h-4 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="bg-transparent border-none outline-none flex-1 text-sm placeholder-gray-400"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                <kbd className="hidden sm:inline-flex items-center px-2 py-1 text-xs font-medium text-gray-400 bg-gray-100 rounded">
                  ⌘
                </kbd>
              </div>
            </div>
          </nav>

          {/* Desktop Account Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="relative group">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:-translate-y-0.5">
                <User className="w-4 h-4" />
                <span>My Account</span>
                <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </div>

              {/* Dropdown Menu */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <div className="py-2">
                  <a
                    href="/account/my-learning"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    My Learning
                  </a>
                  <a
                    href="/account/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Profile
                  </a>
                  <a
                    href="/account/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Settings
                  </a>
                  <hr className="my-1 border-gray-100" />
                  <a
                    href="/logout"
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    Sign Out
                  </a>
                </div>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="pt-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <div className="flex items-center bg-gray-50 rounded-full px-4 py-3">
                <Search className="w-4 h-4 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="bg-transparent border-none outline-none flex-1 text-sm placeholder-gray-400"
                />
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="space-y-2">
              <a
                href="/courses"
                className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                All Courses
              </a>
              <a
                href="/account/my-learning"
                className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-center"
              >
                My Account
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
