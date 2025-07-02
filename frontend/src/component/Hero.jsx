 import React, { useState, useEffect } from 'react';

const Hero = ({ heading,  Image, }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[3000ms] ease-out"
        style={{
          backgroundImage: `url(${Image || 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'})`,
          transform: `scale(1.05) translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
        aria-hidden="true"
      />

      {/* Animated Overlay with Breathing Effect */}
      <div
        className="absolute inset-0 bg-black/50 animate-pulse"
        style={{
          animationDuration: '4s',
          animationTimingFunction: 'ease-in-out',
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 8}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Interactive Light Beam */}
      <div
        className="absolute pointer-events-none opacity-30"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          transition: 'all 0.3s ease',
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-20 w-full px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col items-start text-left max-w-3xl">
          {/* Heading with Staggered Animation */}
          <div className="overflow-hidden mb-6">
            <h1
              className={`
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                font-black text-white leading-tight
                transform transition-all duration-1000 ease-out
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
              `}
              style={{
                textShadow: '0 4px 20px rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.1)',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              {heading?.split(' ').map((word, index) => (
                <span
                  key={index}
                  className="inline-block mr-3 hover:scale-105 transition-transform duration-300"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {word}
                </span>
              )) || 'Your Amazing Journey Starts Here'}
            </h1>
          </div>

          {/* Subtitle */}
          <div className="overflow-hidden mb-8">
            <p
              className={`
                text-lg sm:text-xl md:text-2xl text-white/90 
                transform transition-all duration-1000 ease-out delay-300
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
              `}
              style={{
                textShadow: '0 2px 10px rgba(0,0,0,0.8)',
              }}
            >
              Experience the extraordinary with cutting-edge innovation
            </p>
          </div>

        

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
            <div className="animate-bounce">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 10L12 15L17 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
