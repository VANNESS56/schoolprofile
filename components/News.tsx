"use client";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag } from "lucide-react";

const newsItems = [
  {
    title: "Siswa VannessSchool Menang Olimpiade Sains Internasional",
    date: "12 Des 2024",
    category: "Prestasi",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
  },
  {
    title: "Workshop Robotik: Membangun Masa Depan dengan Teknologi",
    date: "05 Des 2024",
    category: "Acara",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
  },
  {
    title: "Kunjungan Industri ke Perusahaan Teknologi Global",
    date: "28 Nov 2024",
    category: "Akademik",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
  },
];

export default function News() {
  return (
    <section id="berita" className="py-24 bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Berita & <span className="text-blue-600">Acara</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Ikuti perkembangan terbaru dan keseruan kegiatan di XavoSchool.
            </p>
          </div>
          
          <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all group shrink-0 bg-blue-50 px-6 py-3 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-300">
            Lihat Semua Berita <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden rounded-[2.5rem] mb-6 shadow-sm border border-slate-100">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-5 left-5">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-bold text-blue-600 flex items-center gap-2 shadow-sm border border-white/20">
                    <Tag className="w-3 h-3" /> {item.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm mb-4 font-medium">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>{item.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}