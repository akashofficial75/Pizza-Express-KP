import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 pt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-zinc-400">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Pizza Express
            </h3>
            <p className="leading-relaxed">
              Serving the best premium fast food in Kalampur. Dine-in, takeaway, or get it delivered straight to your door.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/akashofficial755" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/akash_official75/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-tr hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(217,70,239,0.5)]"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span>Kalampur Bazar Rd, Kalampur</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="tel:01327240031" className="hover:text-white transition-colors">01327-240031</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="mailto:akashabdullahalmahmud@gmail.com" className="hover:text-white transition-colors break-all">akashabdullahalmahmud@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Opening Hours</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-orange-500 shrink-0" />
                <div>
                  <p className="text-white">Everyday</p>
                  <p>11:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="mt-4 pt-4 border-t border-white/5">
                <p className="text-orange-500 font-medium">Delivery Available</p>
                <p className="text-sm mt-1">Within Kalampur area</p>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Find Us on Map</h4>
            <div className="w-full h-48 bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 relative shadow-lg group">
               <iframe 
                 title="Pizza Express Location"
                 className="absolute inset-0 w-full h-full grayscale-[50%] group-hover:grayscale-0 transition-all duration-500 ease-in-out group-hover:scale-105"
                 src="https://maps.google.com/maps?width=100%&height=400&hl=en&q=23.9299511,90.1543826+(Pizza%20Express)&ie=UTF8&t=&z=16&iwloc=B&output=embed"
                 loading="lazy" 
                 allowFullScreen
               />
               <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500/20 rounded-2xl pointer-events-none transition-colors duration-500" />
            </div>
          </div>

        </div>
      </div>
      
      <div className="border-t border-white/5 bg-[#050505] py-6 text-center text-zinc-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Pizza Express, Kalampur. All rights reserved. 
          <span className="mx-2 opacity-50">|</span> 
          <span className="text-zinc-500 text-xs sm:text-sm shadow-black">
            Developed by <a href="https://www.instagram.com/akash_official75/" target="_blank" rel="noopener noreferrer" className="font-medium text-zinc-400 hover:text-orange-500 hover:underline transition-colors duration-300">AkashProg</a>
          </span>
        </p>
      </div>
    </footer>
  );
}
