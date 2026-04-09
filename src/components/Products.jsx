import { useState, useRef } from 'react';
import ProductCard from './ProductCard';
import { products, categories } from '../data/products';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollContainerRef = useRef(null);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;
    setIsAnimating(true);
    setActiveCategory(category);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const scrollTabs = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="products" className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <span className="text-gold font-bold tracking-widest uppercase text-sm mb-2 block">
            Catalogue
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark mb-4">
            Our Product Range
          </h2>
          <p className="text-text-body text-base sm:text-lg">
            Explore our comprehensive catalog of high-quality pharmaceuticals and advanced surgical equipment, sourced from trusted manufacturers.
          </p>
        </div>

        {/* Filter Tabs - Mobile Responsive with Scroll */}
        <div className="relative mb-12 max-w-5xl mx-auto reveal">
          <div className="absolute left-0 top-0 bottom-0 flex items-center xl:hidden bg-gradient-to-r from-bg-light to-transparent w-12 z-10">
            <button onClick={() => scrollTabs('left')} className="p-1 bg-white rounded-full shadow text-primary">
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto hide-scrollbar scroll-smooth gap-2 sm:gap-4 px-6 xl:px-0 py-2 items-center xl:justify-center justify-start snap-x"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`snap-center whitespace-nowrap px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 border ${
                  activeCategory === category
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'bg-white text-text-body border-gray-200 hover:border-primary-light hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="absolute right-0 top-0 bottom-0 flex items-center xl:hidden bg-gradient-to-l from-bg-light to-transparent w-12 z-10 justify-end">
            <button onClick={() => scrollTabs('right')} className="p-1 bg-white rounded-full shadow text-primary">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* CSS for hiding scrollbar */}
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />

        {/* Product Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-body text-lg">No products found in this category.</p>
          </div>
        )}

      </div>
    </section>
  );
}
