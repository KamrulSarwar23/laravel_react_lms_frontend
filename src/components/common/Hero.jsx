import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Play,
  BookOpen,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { number: "50K+", label: "Students" },
    { number: "1000+", label: "Courses" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support" },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <>
      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          background: linear-gradient(
            135deg,
            #0f172a 0%,
            #581c87 50%,
            #0f172a 100%
          );
          position: relative;
          overflow: hidden;
        }

        .bg-blur-1 {
          position: absolute;
          top: -2rem;
          left: -2rem;
          width: 18rem;
          height: 18rem;
          background: rgba(168, 85, 247, 0.4);
          border-radius: 50%;
          filter: blur(60px);
          animation: pulse 4s ease-in-out infinite;
        }

        .bg-blur-2 {
          position: absolute;
          bottom: -4rem;
          right: -2rem;
          width: 18rem;
          height: 18rem;
          background: rgba(34, 211, 238, 0.4);
          border-radius: 50%;
          filter: blur(60px);
          animation: pulse 4s ease-in-out infinite 2s;
        }

        .bg-blur-3 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 24rem;
          height: 24rem;
          background: rgba(99, 102, 241, 0.2);
          border-radius: 50%;
          filter: blur(80px);
          animation: pulse 4s ease-in-out infinite 4s;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }

        .animate-slide-up-delay {
          animation: slideUp 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-bounce-custom {
          animation: bounce 2s infinite;
        }

        .animate-bounce-delay {
          animation: bounce 2s infinite 1s;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1.5rem;
        }

        .glass-card-sm {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
        }

        .btn-gradient {
          background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
          border: none;
          transition: all 0.3s ease;
        }

        .btn-gradient:hover {
          background: linear-gradient(135deg, #7c3aed 0%, #db2777 100%);
          transform: translateY(-2px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .btn-glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }

        .btn-glass:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        .gradient-text {
          background: linear-gradient(
            135deg,
            #a855f7 0%,
            #f472b6 50%,
            #22d3ee 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: pulse 3s ease-in-out infinite;
        }

        .progress-gradient {
          background: linear-gradient(90deg, #9333ea 0%, #ec4899 100%);
          height: 8px;
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .progress-gradient-cyan {
          background: linear-gradient(90deg, #06b6d4 0%, #3b82f6 100%);
          height: 8px;
          border-radius: 4px;
        }

        .stat-highlight {
          transition: all 0.5s ease;
          transform: scale(1);
        }

        .stat-highlight.active {
          transform: scale(1.1);
          color: #a855f7 !important;
        }

        .floating-icon {
          position: absolute;
          padding: 1rem;
          border-radius: 1rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .floating-icon-1 {
          background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
          top: -1rem;
          right: -1rem;
        }

        .floating-icon-2 {
          background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
          bottom: -1rem;
          left: -1rem;
        }

        .badge-new {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        .grid-pattern {
          background-image: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.1) 1px,
            transparent 1px
          );
          background-size: 50px 50px;
        }
      `}</style>

      <section className="hero-section d-flex align-items-center position-relative">
        {/* Animated Background Elements */}
        <div className="bg-blur-1"></div>
        <div className="bg-blur-2"></div>
        <div className="bg-blur-3"></div>

        {/* Grid Pattern Overlay */}
        <div className="position-absolute w-100 h-100 grid-pattern"></div>

        <div className="container position-relative" style={{ zIndex: 10 }}>
          <div className="row align-items-center min-vh-100 py-5">
            {/* Left Content */}
            <div className={`col-lg-6 ${isVisible ? "animate-slide-up" : ""}`}>
              {/* Badge */}
              <div className="badge-new d-inline-flex align-items-center px-3 py-2 mb-4">
                <div className="pulse-dot me-2"></div>
                <small className="text-white">New courses added weekly</small>
              </div>

              {/* Main Heading */}
              <h1 className="display-1 fw-bold text-white lh-1 mb-4">
                Learn
                <span className="gradient-text"> Anytime</span>
                <br />
                <span className="text-white-50">Anywhere</span>
              </h1>

              {/* Description */}
              <p
                className="lead text-white-50 mb-5"
                style={{ maxWidth: "500px" }}
              >
                Transform your future with our cutting-edge Learning Management
                System. Access premium courses, connect with experts, and
                achieve your goals faster than ever.
              </p>

              {/* CTA Buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
                <button className="btn btn-gradient btn-lg text-white px-4 py-2 rounded-pill d-flex align-items-center justify-content-center">
                  <span>Explore Courses</span>
                  <ChevronRight className="ms-2" size={20} />
                </button>

                <button className="btn btn-glass btn-lg text-white px-4 py-2 rounded-pill d-flex align-items-center justify-content-center">
                  <Play className="me-2" size={20} />
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* Stats */}
              <div className="row g-3 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="col-6 col-sm-3">
                    <div
                      className={`text-center stat-highlight ${
                        currentStat === index ? "active" : ""
                      }`}
                    >
                      <div className="h4 fw-bold text-white mb-1">
                        {stat.number}
                      </div>
                      <small className="text-white-50">{stat.label}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Interactive Learning Dashboard */}
            <div
              className={`col-lg-6 mt-5 mt-lg-0 ${
                isVisible ? "animate-slide-up-delay" : ""
              }`}
            >
              {/* Main Dashboard Card */}
              <div className="glass-card p-4 p-md-5 position-relative">
                {/* Header */}
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h3 className="h4 fw-bold text-white mb-0">
                    Learning Dashboard
                  </h3>
                  <div className="pulse-dot"></div>
                </div>

                {/* Course Progress */}
                <div className="mb-5">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="text-white-50">React Development</span>
                    <span className="text-info fw-semibold">85%</span>
                  </div>
                  <div
                    className="bg-dark rounded-pill mb-4"
                    style={{ height: "8px" }}
                  >
                    <div
                      className="progress-gradient rounded-pill"
                      style={{ width: "85%" }}
                    ></div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="text-white-50">UI/UX Design</span>
                    <span className="text-info fw-semibold">92%</span>
                  </div>
                  <div
                    className="bg-dark rounded-pill"
                    style={{ height: "8px" }}
                  >
                    <div
                      className="progress-gradient-cyan rounded-pill"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="row g-3">
                  <div className="col-6">
                    <div className="glass-card-sm p-3 text-center">
                      <BookOpen className="text-info mb-2" size={32} />
                      <div className="h5 fw-bold text-white mb-1">12</div>
                      <small className="text-white-50">Courses</small>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="glass-card-sm p-3 text-center">
                      <Award className="text-warning mb-2" size={32} />
                      <div className="h5 fw-bold text-white mb-1">8</div>
                      <small className="text-white-50">Certificates</small>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="floating-icon floating-icon-1 animate-bounce-custom">
                  <TrendingUp className="text-white" size={24} />
                </div>

                <div className="floating-icon floating-icon-2 animate-bounce-delay">
                  <Users className="text-white" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div
          className="position-absolute bottom-0 start-0 end-0"
          style={{
            height: "8rem",
            background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
          }}
        ></div>
      </section>
    </>
  );
};

export default Hero;
