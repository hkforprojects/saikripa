import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    "GST Verified Business",
    "Pan-Maharashtra Supply Network",
    "Independent Proprietorship",
  ];

  return (
    <section id="about" className="py-20 bg-white md:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Column */}
          <div className="relative order-2 lg:order-1 reveal">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ml-4 sm:ml-8 mt-8 sm:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173ff9e5ee4?q=80&w=2070&auto=format&fit=crop" 
                alt="Pharmacy distribution center" 
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute top-0 left-0 w-3/4 h-full border-4 border-primary-light/20 rounded-2xl -translate-x-4 -translate-y-4 sm:-translate-x-8 sm:-translate-y-8 -z-10 bg-accent"></div>
            
            {/* Experience Badge */}
            <div className="absolute bottom-6 -left-2 sm:-left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4">
              <div className="text-primary font-bold text-4xl">20+</div>
              <div className="text-sm font-semibold text-text-body leading-tight">
                Years of <br /> Excellence
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 reveal">
            <div className="mb-2">
              <span className="text-gold font-bold tracking-widest uppercase text-sm">About Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark mb-6">
              A Legacy of Care and Commitment
            </h2>
            
            <div className="space-y-4 text-text-body mb-8 text-base sm:text-lg">
              <p>
                Established in 2009 in Navi Mumbai, <strong>Sai Kripa Distributors</strong> has grown from a humble proprietorship into a leading name in wholesale pharmaceutical and surgical distribution across Pan-Maharashtra.
              </p>
              <p>
                With over a decade of hands-on experience in the medical supply chain, our founder built the company on a foundation of trust, transparency, and timely delivery. During the challenging times of the COVID-19 pandemic, we stood at the forefront, ensuring an uninterrupted supply of critical medicines, hand sanitizers, masks, and oxygen equipment to healthcare facilities when they needed it most.
              </p>
              <p>
                Today, our commitment remains unshaken: to provide premium quality healthcare products at competitive wholesale prices, empowering clinics, pharmacies, and hospitals to deliver better patient care.
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  <span className="font-medium text-dark">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary">
              Partner With Us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
