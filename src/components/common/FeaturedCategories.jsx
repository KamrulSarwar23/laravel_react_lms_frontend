import React from "react";
import {
  Code,
  Smartphone,
  TrendingUp,
  Palette,
  Monitor,
  PenTool,
  DollarSign,
  Layers,
} from "lucide-react";

const FeaturedCategories = () => {
  const categories = [
    {
      title: "Web Development",
      icon: Code,
      gradient: "from-blue-500 to-cyan-400",
      description: "Build modern websites and web applications",
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      gradient: "from-purple-500 to-pink-400",
      description: "Create iOS and Android applications",
    },
    {
      title: "Digital Marketing",
      icon: TrendingUp,
      gradient: "from-green-500 to-teal-400",
      description: "Master online marketing strategies",
    },
    {
      title: "Graphic Design",
      icon: Palette,
      gradient: "from-orange-500 to-red-400",
      description: "Design stunning visual experiences",
    },
    {
      title: "Software Design",
      icon: Monitor,
      gradient: "from-indigo-500 to-blue-400",
      description: "Architect scalable software solutions",
    },
    {
      title: "Content Writing",
      icon: PenTool,
      gradient: "from-yellow-500 to-orange-400",
      description: "Craft compelling written content",
    },
    {
      title: "Finance",
      icon: DollarSign,
      gradient: "from-emerald-500 to-green-400",
      description: "Master financial planning and analysis",
    },
    {
      title: "UI/UX Design",
      icon: Layers,
      gradient: "from-pink-500 to-purple-400",
      description: "Design intuitive user interfaces",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Explore
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Categories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover categories designed to help you excel in your professional
            and personal growth journey.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 hover:border-white/40 cursor-pointer overflow-hidden"
              >
                {/* Hover gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                ></div>

                {/* Icon with gradient background */}
                <div
                  className={`relative w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h5 className="font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                    {category.title}
                  </h5>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <svg
                    className="w-4 h-4 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                {/* Subtle border glow on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Categories
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
