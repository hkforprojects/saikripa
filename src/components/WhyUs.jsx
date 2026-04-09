import { History, ShieldCheck, Truck, Stethoscope } from 'lucide-react';

export default function WhyUs() {
  const features = [
    {
      icon: History,
      title: "20+ Years Experience",
      description: "Deep expertise in the healthcare supply chain ensuring reliable and efficient distribution."
    },
    {
      icon: ShieldCheck,
      title: "GST Verified",
      description: "Fully compliant and verified, providing transparent and trustworthy business transactions."
    },
    {
      icon: Truck,
      title: "Reliable Supply Chain",
      description: "Robust logistics network enabling timely deliveries across Pan-Maharashtra."
    },
    {
      icon: Stethoscope,
      title: "Wide Product Range",
      description: "Comprehensive catalogue of over 500+ pharmaceutical and surgical products."
    }
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="text-primary-light font-bold tracking-widest uppercase text-sm mb-2 block">
            Our Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark mb-4">
            Why Choose Sai Kripa
          </h2>
          <div className="h-1 w-20 bg-gold mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 block text-center reveal"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-primary mb-6">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold text-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-text-body text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
