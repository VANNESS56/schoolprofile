"use client";
import { motion } from "framer-motion";
import { 
  Laptop, 
  Book, 
  Globe2, 
  Sparkles, 
  Dribbble, 
  FlaskConical, 
  Palette, 
  Wifi 
} from "lucide-react";

const items = [
  { 
    title: "Smart Classroom", 
    desc: "Ruang kelas interaktif dengan perangkat Apple TV dan iPad.",
    icon: <Laptop className="text-blue-600"/>, 
    class: "md:col-span-2 bg-blue-50/50" 
  },
  { 
    title: "E-Library", 
    desc: "Akses ribuan jurnal dan buku digital dunia.",
    icon: <Book className="text-indigo-600"/>, 
    class: "bg-indigo-50/50" 
  },
  { 
    title: "Sport Center", 
    desc: "Lapangan indoor untuk basket, futsal, dan badminton.",
    icon: <Dribbble className="text-orange-600"/>, 
    class: "bg-orange-50/50" 
  },
  { 
    title: "Global Network", 
    desc: "Program pertukaran pelajar internasional.",
    icon: <Globe2 className="text-cyan-600"/>, 
    class: "md:col-span-1 bg-cyan-50/50" 
  },
  { 
    title: "Science Lab", 
    desc: "Laboratorium modern untuk riset kimia dan biologi.",
    icon: <FlaskConical className="text-emerald-600"/>, 
    class: "md:col-span-2 bg-emerald-50/50" 
  },
  { 
    title: "Art Studio", 
    desc: "Wadah kreativitas seni musik dan desain grafis.",
    icon: <Palette className="text-pink-600"/>, 
    class: "bg-pink-50/50" 
  },
  { 
    title: "Campus WiFi", 
    desc: "Koneksi internet super cepat di seluruh area sekolah.",
    icon: <Wifi className="text-blue-500"/>, 
    class: "bg-blue-50/50" 
  },
];

export default function Features() {
  return (
    <section id="fasilitas" className="py-24 bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Fasilitas <span className="text-blue-600">Terbaik</span>
          </motion.h2>
          <p className="text-slate-500">Mendukung setiap langkah eksplorasi bakat siswa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col justify-between group transition-all hover:shadow-2xl hover:shadow-blue-100/50 ${item.class}`}
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:rotate-12 transition-transform">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}