import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MenuSection from './components/Menu';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import { PhoneIcon } from 'lucide-react';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-50 selection:bg-orange-500/30 font-sans">
      <Navbar onOrderClick={() => setIsOrderModalOpen(true)} />
      
      <main>
        <Hero onOrderClick={() => setIsOrderModalOpen(true)} />
        <Features />
        <MenuSection onOrderClick={() => setIsOrderModalOpen(true)} />
        <Reviews />
      </main>

      <Footer />

      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />

      {/* Floating Call to Action */}
      <button 
        onClick={() => setIsOrderModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white p-4 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all hover:-translate-y-1 active:scale-95 group flex items-center justify-center cursor-pointer"
        aria-label="Call to order"
      >
        <PhoneIcon className="w-6 h-6 animate-[bounce_2s_infinite]" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 ease-in-out font-bold">
          Order Now
        </span>
      </button>
    </div>
  );
}
