import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "Rakib H.",
      review: "Food is amazing and extremely budget-friendly. Their crispy burger is highly recommended!",
      rating: 5,
    },
    {
      name: "Samia T.",
      review: "Pasta and chicken shawarma taste great. One of the best fast food places in Kalampur area.",
      rating: 4,
    },
    {
      name: "Tariqul I.",
      review: "Good food ❤️. The pizza was loaded with cheese and served hot. Will definitey visit again.",
      rating: 5,
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex justify-center mb-4"
          >
             <div className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                <span className="text-orange-500 font-bold text-lg">4.2</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-orange-500 text-orange-500' : 'text-zinc-600'}`} />
                  ))}
                </div>
                <span className="text-zinc-400 text-sm">Average Rating</span>
             </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Loved by our <span className="text-orange-500">Customers</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-b from-zinc-900 to-zinc-950 p-8 rounded-3xl border border-white/5 hover:border-orange-500/20 transition-colors"
            >
              <div className="flex mb-4">
                 {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                 ))}
              </div>
              <p className="text-zinc-300 text-lg mb-6 flex-1 line-clamp-4 italic">
                "{review.review}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-white border border-white/10">
                  {review.name.charAt(0)}
                </div>
                <span className="font-medium text-white">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
