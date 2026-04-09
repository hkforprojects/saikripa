import { ArrowRight, ShieldCheck, Truck, Clock, Package } from 'lucide-react';
import heroBg from '../assets/hero.png';

export default function Hero() {
  const stats = [
    { icon: Clock, label: '15+ Years Experience' },
    { icon: Package, label: '500+ Products' },
    { icon: Truck, label: 'Pan-Maharashtra' },
    { icon: ShieldCheck, label: 'GST Verified' },
  ];

  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-32 lg:pb-32 min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Soft white gradient overlay to make text readable on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 sm:from-white/80 via-white/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl text-center md:text-left reveal">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#fef3c7] border border-[#fde68a] backdrop-blur-sm shadow-sm">
            <span className="text-[#b45309] font-medium text-sm sm:text-base tracking-wide uppercase">
              Trusted Since 2009 · Navi Mumbai
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-dark leading-tight mb-6">
            Your Trusted Partner in <span className="text-[#f59e0b]">Healthcare</span> Distribution
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-2xl font-sans">
            Supplying premium wholesale pharmaceuticals and surgical equipment with unmatched reliability and care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#products" className="btn-primary flex items-center justify-center group">
              Explore Products
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="#contact" className="btn-outline border-primary text-primary hover:bg-gray-50 flex items-center justify-center">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Floating Stat Cards (visible mostly on md+ screens, transformed on mobile) */}
      <div className="absolute bottom-0 left-0 w-full transform translate-y-1/2 hidden md:block z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-xl border border-gray-100 flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon size={24} />
                </div>
                <span className="font-semibold text-dark">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
