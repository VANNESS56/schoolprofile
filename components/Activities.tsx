"use client";
import { motion } from "framer-motion";
import { Music, Camera, Code, Mic2, Heart, Swords } from "lucide-react";

const ekskul = [
  { name: "Seni Musik", icon: <Music />, color: "bg-blue-50 text-blue-600" },
  { name: "Fotografi", icon: <Camera />, color: "bg-indigo-50 text-indigo-600" },
  { name: "Coding Club", icon: <Code />, color: "bg-cyan-50 text-cyan-600" },
  { name: "Paduan Suara", icon: <Mic2 />, color: "bg-purple-50 text-purple-600" },
  { name: "PMR", icon: <Heart />, color: "bg-red-50 text-red-600" },
  { name: "Pencak Silat", icon: <Swords />, color: "bg-orange-50 text-orange-600" },
];

export default function Activities() {
  return (
    <section id="ekskul" className="py-24 bg-slate-50/50">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Ekstrakurikuler</h2>
            <p className="text-slate-500">Wadah pengembangan diri di luar jam akademik.</p>
          </div>
          <button className="text-blue-600 font-semibold hover:underline">Lihat Semua Ekskul →</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {ekskul.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center gap-4 text-center group cursor-pointer"
            >
              <div className={`${item.color} w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-transform group-hover:rotate-12`}>
                {item.icon}
              </div>
              <span className="font-bold text-slate-800 text-sm">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}