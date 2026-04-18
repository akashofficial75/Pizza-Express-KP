import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData, categories, MenuItem } from '../data/menuData';

interface MenuSectionProps {
  onOrderClick: () => void;
}

export default function MenuSection({ onOrderClick }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('Pizza');

  const filteredMenu: MenuItem[] = menuData.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-zinc-950 relative">
      {/* Decorative glow */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Explore Our <span className="text-orange-500">Menu</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto text-lg"
          >
            Handcrafted with love, using the freshest ingredients. Tap any category to view our delicious offerings.
          </motion.p>
        </div>

        {/* Categories Scroller */}
        <div className="flex overflow-x-auto pb-4 mb-12 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full flex-shrink-0 font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-[0_0_15px_rgba(234,88,12,0.4)] hover:scale-105'
                  : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/5 hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredMenu.map((item) => (
                <div 
                  key={item.id} 
                  className="group bg-[#0f0f0f] border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all duration-300 hover:shadow-[0_10px_30px_-15px_rgba(234,88,12,0.4)] flex flex-col hover:-translate-y-2 cursor-pointer"
                  onClick={onOrderClick}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-70" />
                  </div>
                  
                  <div className="p-5 flex-1 flex flex-col relative z-10 z-[1] -mt-6 bg-[#0f0f0f] rounded-t-2xl pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    {item.description && (
                      <p className="text-zinc-500 text-sm mb-4 flex-1 line-clamp-2 group-hover:text-zinc-400 transition-colors">
                        {item.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                      <span className="text-xl font-bold text-orange-500">
                        ৳{item.price}
                      </span>
                      <button 
                        className="text-sm font-semibold text-white bg-white/10 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-600 rounded-full px-5 py-2 transition-all duration-300 shadow-none group-hover:shadow-[0_0_15px_rgba(234,88,12,0.4)] group-hover:scale-105 active:scale-95"
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
