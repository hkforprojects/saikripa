import { Plus } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6 inline-block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white shrink-0">
                  <Plus size={20} strokeWidth={3} />
                </div>
                <div className="font-serif text-2xl font-bold text-white">
                  Sai Kripa <span className="text-primary-light font-sans text-base font-normal">Distributors</span>
                </div>
              </div>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Your trusted partner in healthcare distribution across Pan-Maharashtra. Supplying premium pharmaceutical and surgical products since 2009.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Products catalogue</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Business Info Column */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-sm">Business Info</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Navi Mumbai, Maharashtra</li>
              <li className="text-gray-400">GST Verified Business</li>
              <li className="text-gray-400 mt-4">
                <a href="mailto:saikripadistributors.sales@gmail.com" className="text-primary-light hover:text-white transition-colors">
                  saikripadistributors.sales@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} Sai Kripa Distributors. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>B2B Wholesale Only</span>
            <span>Healthcare Distribution</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
