import { useState, useEffect } from 'react';
import { Plus, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
              <Plus size={24} strokeWidth={3} />
            </div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-dark leading-tight">
              Sai Kripa <br className="hidden sm:block lg:hidden" />
              <span className="text-primary sm:ml-1 lg:ml-0 font-sans text-sm sm:text-base font-normal">Distributors</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6 text-text-body font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors py-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="mailto:saikripadistributors.sales@gmail.com" className="btn-primary">
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-dark p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 origin-top overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 border-t border-gray-100' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-4">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-lg font-medium text-text-body hover:text-primary"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-gray-100">
            <a 
              href="mailto:saikripadistributors.sales@gmail.com" 
              className="btn-primary w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
