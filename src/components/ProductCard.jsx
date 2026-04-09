import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function ProductCard({ product }) {
  const [imageError, setImageError] = useState(false);

  // Fallback styling for the placeholder
  const categoryColors = {
    'Blood Pressure Monitors': 'bg-rose-100 text-rose-700',
    'Glucometers': 'bg-blue-100 text-blue-700',
    'Wheelchairs': 'bg-amber-100 text-amber-700',
    'Pharmaceuticals': 'bg-emerald-100 text-emerald-700',
    'Oxygen & Nebulizers': 'bg-cyan-100 text-cyan-700',
    'Others': 'bg-purple-100 text-purple-700',
  };

  const badgeColor = categoryColors[product.category] || 'bg-gray-100 text-gray-700';

  const handleEnquire = () => {
    const subject = encodeURIComponent(`Enquiry about ${product.name}`);
    const body = encodeURIComponent(
      `Hello Sai Kripa Distributors,\n\nI would like more information and a quote for: ${product.name}.\n\nPlease contact me regarding this product.\n\nThank you.`
    );
    window.location.href = `mailto:saikripadistributors.sales@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 group flex flex-col h-full reveal flex-1">
      
      {/* Image Area */}
      <div className="relative aspect-square w-full bg-gray-50 flex items-center justify-center overflow-hidden border-b border-gray-100 shrink-0">
        {!imageError && product.image ? (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          // Styled Placeholder Area
          <div className={`w-full h-full flex flex-col items-center justify-center ${badgeColor.split(' ')[0]}`}>
            <span className="text-6xl font-serif opacity-30 mb-2">
              {product.name.charAt(0)}
            </span>
            <span className="text-sm font-medium tracking-wide uppercase opacity-70 px-4 text-center">
              {product.category}
            </span>
            <span className="text-xs opacity-50 mt-1">Image Coming Soon</span>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${badgeColor}`}>
            {product.category}
          </span>
        </div>
        
        <h3 className="text-xl font-serif font-bold text-dark mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-text-body text-sm mb-6 flex-grow">
          {product.description}
        </p>
        
        <button 
          onClick={handleEnquire}
          className="w-full mt-auto py-2.5 rounded border border-primary text-primary hover:bg-primary hover:text-white font-medium flex items-center justify-center gap-2 transition-colors duration-300"
        >
          <Mail size={18} />
          Enquire Now
        </button>
      </div>
    </div>
  );
}
