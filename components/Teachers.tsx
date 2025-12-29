"use client";
import { motion } from "framer-motion";
import { Linkedin, Mail, GraduationCap } from "lucide-react";

const teachers = [
  {
    name: "Drs Vanness, S.Kom, S.H, S.I, S.Ak, S.M, SPBU, PLN, PLTA",
    role: "Kepala Sekolah",
    desc: "Lulusan S100",
    img: "https://i.ibb.co.com/k2czKgNC/image.png",
  },
  {
    name: "Bpk. Djokowe",
    role: "Guru Perhutanan",
    desc: "Ahli dalam mengelola perhutanan",
    img: "https://i.ibb.co.com/k2czKgNC/image.png",
  },
  {
    name: "Bpk. Prubrayaya",
    role: "Guru Ekonomi",
    desc: "Bersertifikat Lulusan Ekonomi Terbaik",
    img: "https://i.ibb.co.com/k2czKgNC/image.png",
  },
];

export default function Teachers() {
  return (
    <section id="guru" className="py-24 bg-slate-50/50">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          >
            <GraduationCap className="w-4 h-4" /> Tenaga Pengajar
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Dipandu oleh <span className="text-blue-600">Terbaik</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-500 group"
            >
              <div className="relative h-72 w-full overflow-hidden rounded-[2rem] mb-6">
                <img 
                  src={teacher.img} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-4">
                   <button className="bg-white p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                   </button>
                   <button className="bg-white p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                   </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{teacher.name}</h3>
                <p className="text-blue-600 font-bold text-sm mb-4 uppercase tracking-tighter">{teacher.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed px-4">
                  {teacher.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}