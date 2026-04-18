import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const phoneNumber = '01327240031';
  const whatsappLink = `https://wa.me/88${phoneNumber}?text=${encodeURIComponent('Hello I want to order food from Pizza Express')}`;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 flex items-center justify-center p-4 z-[101] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-zinc-900 border border-white/10 p-6 md:p-8 rounded-3xl w-full max-w-md pointer-events-auto relative shadow-[0_0_40px_rgba(234,88,12,0.15)]"
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center mb-8 mt-2">
                <h3 className="text-2xl font-bold text-white mb-2">Complete Your Order</h3>
                <p className="text-zinc-400">Choose how you would like to place your order with us today.</p>
              </div>

              <div className="space-y-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white p-4 rounded-2xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                >
                  <div className="bg-white/20 p-3 rounded-xl">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="text-lg">Order via WhatsApp</div>
                    <div className="text-green-100 font-normal text-sm opacity-90">Fast messaging & menu queries</div>
                  </div>
                </a>

                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center gap-4 w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white p-4 rounded-2xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(234,88,12,0.3)]"
                >
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="text-lg">Direct Phone Call</div>
                    <div className="text-orange-100 font-normal text-sm opacity-90">Talk directly to our staff</div>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
