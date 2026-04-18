import { motion } from 'framer-motion';
import { ChefHat, Clock, CreditCard, HeartHandshake } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <CreditCard className="w-8 h-8 text-orange-500" />,
      title: 'Affordable Prices',
      description: 'Premium quality food that fits your budget perfectly. Prices range from ৳200-400.',
    },
    {
      icon: <ChefHat className="w-8 h-8 text-red-500" />,
      title: 'Tasty Food',
      description: 'Crafted with passion using the freshest ingredients for an unforgettable taste.',
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: 'Fast Service',
      description: 'We value your time. Enjoy quicker prep times and prompt delivery without compromising quality.',
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-red-500" />,
      title: 'Friendly Environment',
      description: 'A welcoming atmosphere perfect for families, friends, and food lovers.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              The Story of <br />
              <span className="text-orange-500">Pizza Express</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Located at Kalampur Bazar, we started Pizza Express with a simple mission: bringing high-end fast food experiences to our local community without the high-end price tag.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Whether you're craving a gooey, cheese-loaded pizza, a crispy chicken burger, or rich oven-baked pasta, our kitchen is dedicated to serving you delicious moments, every single time.
            </p>
            <div className="pt-6 border-t border-white/10 hidden">
               {/* Left intentionally blank for spacing or future stats */}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="bg-zinc-900 w-14 h-14 rounded-xl flex items-center justify-center mb-4 border border-white/5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
