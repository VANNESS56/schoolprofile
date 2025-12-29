"use client";
import { motion } from "framer-motion";
import { Users, Shield, Zap, Leaf } from "lucide-react";

const goals = [
  {
    title: "Unite",
    desc: "Mewujudkan kesatuan yang kokoh berdasarkan nilai-nilai karakter dan kebersamaan.",
    icon: <Users className="w-6 h-6 text-blue-600" />,
    color: "bg-blue-50",
  },
  {
    title: "Sovereign",
    desc: "Membentuk kemandirian siswa yang tangguh, aman, dan berintegritas tinggi.",
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    color: "bg-blue-50",
  },
  {
    title: "Proceed",
    desc: "Terus berinovasi secara modern, tanggap, dan adil dalam dunia pendidikan.",
    icon: <Zap className="w-6 h-6 text-blue-600" />,
    color: "bg-blue-50",
  },
  {
    title: "Sustainable",
    desc: "Membangun keseimbangan antara kualitas akademik dan kepedulian lingkungan.",
    icon: <Leaf className="w-6 h-6 text-blue-600" />,
    color: "bg-blue-50",
  },
];

export default function VisionMission() {
  return (
    // TAMBAHKAN id="visi-misi" DI SINI
    <section id="visi-misi" className="py-24 bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        {/* Header Visi */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            <span className="text-blue-600">Visi & Misi</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-6 max-w-3xl leading-relaxed text-lg"
          >
            {/* TAMBAHKAN TEKS DI SINI AGAR TIDAK KOSONG */}
            Menjadi lembaga pendidikan terdepan yang mengintegrasikan inovasi teknologi 
            dengan keluhuran budi pekerti untuk mencetak pemimpin masa depan.
          </motion.p>
        </div>

        {/* Grid Misi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                backgroundColor: "#eff6ff",
                borderColor: "#3b82f6"
              }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col gap-6 group transition-all duration-300"
            >
              <div className={`${goal.color} w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                {goal.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{goal.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {goal.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}