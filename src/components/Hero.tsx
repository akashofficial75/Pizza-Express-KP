import { motion } from 'framer-motion';
import { ArrowRight, UtensilsCrossed } from 'lucide-react';

interface HeroProps {
  onOrderClick: () => void;
}

export default function Hero({ onOrderClick }: HeroProps) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=2000&q=80"
          alt="Delicious Pizza and Fast Food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span className="text-sm font-medium text-zinc-300">Fast Delivery in Kalampur</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Delicious Food, <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Affordable Price
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
              Experience the best fast food in Kalampur Bazar. From crispy fried chicken and juicy burgers to premium quality pizzas. Dine in, take away, or get it delivered hot to your door.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onOrderClick}
                className="group w-full sm:w-auto bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(220,38,38,0.4)] flex items-center justify-center gap-2 text-lg"
              >
                Order Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollTo('menu')}
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-semibold transition-all backdrop-blur-sm flex items-center justify-center gap-2 text-lg"
              >
                <UtensilsCrossed className="w-5 h-5 opacity-70" />
                View Menu
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative gradient orb */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
