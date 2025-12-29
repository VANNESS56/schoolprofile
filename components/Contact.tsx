"use client";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontak" className="py-24 bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                Mari Terhubung <br />
                <span className="text-blue-600">Dengan Kami</span>
              </h2>
              <p className="text-slate-500 mb-10 text-lg leading-relaxed">
                Pintu kami selalu terbuka untuk diskusi mengenai masa depan pendidikan putra-putri Anda. Silakan hubungi kami melalui saluran berikut.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <MessageCircle className="w-5 h-5"/>, label: "WhatsApp", val: "0899-999-1950", color: "bg-green-50 text-green-600", link: "https://wa.me/6281234567890" },
                { icon: <Mail className="w-5 h-5"/>, label: "Email", val: "info@vannessschool.id", color: "bg-blue-50 text-blue-600", link: "mailto:info@xavoschool.id" },
                { icon: <Clock className="w-5 h-5"/>, label: "Jam Kerja", val: "07:00 - 15:00 WIB", color: "bg-purple-50 text-purple-600", link: "#" },
                { icon: <MapPin className="w-5 h-5"/>, label: "Lokasi", val: "Indonesia, Konoha", color: "bg-red-50 text-red-600", link: "https://maps.google.com" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  whileHover={{ y: -5 }}
                  className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-blue-100 group"
                >
                  <div className={`${item.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-slate-900 font-bold break-words">{item.val}</p>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[450px] w-full bg-slate-100 rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24153723332!2d106.75947798363654!3d-6.229746459344154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20Selatan%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid" 
              className="w-full h-full grayscale-[0.2] contrast-[1.1]"
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
            
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-lg flex justify-between items-center">
              <div>
                <p className="text-slate-900 font-bold">Kunjungi Sekolah Kami</p>
                <p className="text-slate-500 text-sm">Buka Senin - Jumat</p>
              </div>
              <a href="https://maps.google.com" target="_blank" className="bg-blue-600 text-white p-3 rounded-2xl hover:bg-blue-700 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}